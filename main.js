var gameInterval;


game = {
    state: {},
    save: function () {
        console.log("Saving...");
        localStorage.setItem("savegame", JSON.stringify(game.state));
        if (DEBUG){
            var new_save = localStorage.getItem("savegame");
            if(JSON.parse(new_save)){
                if (new_save == JSON.stringify(game.state)){
                    console.log("Saved!");
                } else {
                    console.log("Corrupted save! ERROR!");
                }
            } else {
                console.log("Couldn't save! Error!");
            }
        }
    },
    load: function () {
        try {
            game.state = JSON.parse(localStorage.getItem("savegame"));
            console.log("Game loade: " + !!game.state);
        } catch(err) {
            console.log("Error while loading game:" + err);
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
