var id;
var timer;

function start_defence(){
    hide('div_defence_result');
    timer = 6;
    update_defence_variable();
    show('div_defencetime');
    id = setInterval(defence_update, 1000);
}

function update_defence_variable(){
    document.getElementById('defence_time_left').innerHTML = (timer-1);
}

function defence_update(){
    timer -= 1;
    if(timer <= 0){
        clearInterval(id);
        show('div_defence_result');
        return;
    }
    update_defence_variable();
}

function end_of_defence(){
    hide('div_defencetime');
    game.save();
    start_day();
}