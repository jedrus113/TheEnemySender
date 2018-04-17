var gameInterval;

function log(message){
    if (DEBUG){
        console.log(message);
    }
}

game = {
    state: {},
    save: function () {
        log("Saving...");
        localStorage.setItem("savegame", JSON.stringify(game.state));
        if (DEBUG){
            var new_save = localStorage.getItem("savegame");
            if(JSON.parse(new_save)){
                if (new_save == JSON.stringify(game.state)){
                    log("Saved!");
                } else {
                    log("Corrupted save! ERROR!");
                }
            } else {
                log("Couldn't save! Error!");
            }
        }
    },
    load: function () {
        try {
            game.state = JSON.parse(localStorage.getItem("savegame"));
            log("Game loade: " + !!game.state);
        } catch(err) {
            log("Error while loading game:" + err);
        }
        return !!game.state;
    }
};
game.continue = game.load();


function startLoading()
{
    showLoadingScreen();
    getImages();

    // start checking if images has been loaded
    gameInterval = setInterval(hasLoaded, 1200);

    if (DEBUG) {
        hasLoaded();
    }
}

function didEverythingLoad(){
    return didImagesLoad();
}

function hasLoaded()
{
    if (loaddedSuccess || didEverythingLoad()) // Check to see if all info is loaded
    {
        clearInterval(gameInterval);
        hideLoadingScreen();
        document.getElementById("BackgroundBox").appendChild(images.logo);
        gameInterval = setInterval(hide_logo_and_start, 1000);
        if (DEBUG){
            hide_logo_and_start();
        }

    } else {
        clearInterval(gameInterval);
        gameInterval = setInterval(hasLoaded, 300);
    }
}

function hide_logo_and_start(){
    clearInterval(gameInterval);
    document.getElementById("BackgroundBox").removeChild(images.logo);
    showMainMenu();
}


function new_game(){
    if (!game.continue || confirm('Are you sure you want to start new game?')){
        start_new_game();
    }
}
