function show(id){
    document.getElementById(id).removeAttribute("hidden");
}

function hide(id){
    document.getElementById(id).setAttribute("hidden", "True");
}


function drawUI(){
    var waitTime = 0;
    if (nextEnemyPossibleAt !== 0 && nextEnemyPossibleAt > Date.now()) {
        waitTime = (nextEnemyPossibleAt - Date.now()) / 1000;
    }
    drawText(gameCanvas2d, "Wait " + waitTime, true, 20, 10, 20);

}

function showLoadingScreen(){
    show("loading_bar");
}