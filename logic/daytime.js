

function start_day(){
    console.log("Start day " + game.state.day);
    update_variables();
    show("div_daytime");

}

function update_variables(){
    document.getElementById('gold').innerHTML = game.state.gold;
    document.getElementById('day').innerHTML = game.state.day;
    document.getElementById('lvl').innerHTML = game.state.lvl;
}

function end_of_day(){
    hide("div_daytime");
}