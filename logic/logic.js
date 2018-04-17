
function start_new_game(){
    hide("div_main_menu");
    show("div_intro");
}

function skip_intro(){
    game.state = {
        gold: 0,
        lvl: 0,
        day: 0
    };
    hide("div_intro");
    end_of_night();
}

function continue_game(){
    hide("div_main_menu");
    start_day();
}