var gameInterval;


game = {
    state: {},
    save: function () {
        console.log("Saving...");
        localStorage.setItem("savegame", JSON.stringify(game.state));
        if (DEBUG){
            if(JSON.parse(localStorage.getItem("savegame"))){
                JSON.parse(localStorage.getItem("savegame"));
                var new_save = JSON.parse(localStorage.getItem("savegame"));
                if (JSON.stringify(new_save) == JSON.stringify(game.state)){
                    console.log("Saved!");
                } else {
                    console.log("Corrupted save! ERROR!");
                }
            } else {
                console.lod("Couldn't save! Error!");
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
        document.getElementById("loading_bar").setAttribute("hidden", "True");
        showMainMenu();
    }
    didEverythingLoad();
}

function new_game(){
    if (!game.continue || confirm('Are you sure you want to start new game?')){
        start_new_game();
    }
}
