
function start_new_game(){
    hide("main_menu");
    show("intro");
}

function skip_intro(){
    game.state = {
        gold: 0,
        lvl: 0,
        day: 0
    };
    hide("intro");
    end_of_night();
}

