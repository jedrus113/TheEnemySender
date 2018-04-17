

function start_day(){
    log("Start day " + game.state.day);
    show("bttn_daytime_robbery");
    update_day_variables();
    show("div_daytime");

}

function update_day_variables(){
    document.getElementById('gold').innerHTML = game.state.gold;
    document.getElementById('day').innerHTML = game.state.day;
    document.getElementById('lvl').innerHTML = game.state.lvl;
}

function daytime_robbery(){
    hide("bttn_daytime_robbery");
    game.state.gold += 100;
    update_day_variables();
}

function daytime_shop(){
    if(game.state.gold >= 75){
        game.state.gold -= 75;
        game.state.lvl += 1;
        update_day_variables();
    }
}

function end_of_day(){
    hide("div_daytime");
    start_preparation();
}