
function drawUI(){
    var waitTime = 0;
    if (nextEnemyPossibleAt !== 0 && nextEnemyPossibleAt > Date.now()) {
        waitTime = (nextEnemyPossibleAt - Date.now()) / 1000;
    }
    drawText(gameCanvas2d, "Wait " + waitTime, true, 20, 10, 20);

}

function showLoadingScreen(){
    drawText(gameCanvas2d, "Loading...", true, 130, 20, 200);
}