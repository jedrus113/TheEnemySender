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
    if (loaddedSuccess) // Check to see if all info is loaded
    {
        clearInterval(gameInterval);

        score = 0;
        document.getElementById("loading_bar").setAttribute("hidden", "True");

        showMainMenu();
    }
    didEverythingLoad();
}

function showMainMenu(){
    document.getElementById("main_menu").setAttribute("hidden", "True");
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
    initKeyListeners();
    gameInterval = setInterval(runGame, 25);
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
    showGameOverScreen(reason);
    eventCatcherDiv.addEventListener("click", restart);
}

function restart(){
    gameInterval = setInterval(hasLoaded, 250);
}