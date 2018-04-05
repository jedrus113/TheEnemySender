var gameCanvas;
var gameCanvas2d;
var eventCatcherDiv;


function startLoading()
{
    gameCanvas = document.getElementById("GraphicsBox");
    gameCanvas2d = gameCanvas.getContext("2d");
    showLoadingScreen();

    eventCatcherDiv = document.getElementById("EventCatcher");

    logicLoad();

    // start checking if images has been loaded
    gameInterval = setInterval(hasLoaded, 250);
}

function didEverythingLoad(){
    return didImagesLoad();
}

function hasLoaded()
{
    if (didEverythingLoad()) // Check to see if all info is loaded
    {
        clearInterval(gameInterval);

        score = 0;

        eventCatcherDiv.addEventListener("mousemove", canvasMove);
        secondInterval = setInterval(oneSecond, 1000);
        startGame();
    }
}

function oneSecond(){

}

function drawText(g, stringValue, fillText, size, x, y)
{
    g.font = "" + size + "px Arial";
    g.fillStyle = "#000000";
    if (fillText)
        g.fillText(stringValue, x, y);
    else
        g.strokeText(stringValue, x, y);
}

function startGame()
{
    initLogic();
    gameInterval = setInterval(runGame, 25);
}

function canvasMove(E)
{
    E = E || window.event;
    heroMoveTo(E.pageX, E.pageY);

}

function runGame()
{
    gameCanvas2d.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawGameFrame();
    drawUI();
}

function gameOver(reason){
    clearInterval(secondInterval);
    clearInterval(gameInterval);
    eventCatcherDiv.removeEventListener("mousemove", canvasMove);
    showGameOverScreen(reason);
    eventCatcherDiv.addEventListener("click", restart);
}

function restart(){
    gameInterval = setInterval(hasLoaded, 250);
}