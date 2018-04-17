var gameInterval;


game = {
    state: {},
    save: function () {
        localStorage.setItem("savegame", JSON.stringify(game.state));
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

function showMainMenu(){
    if (game.continue){
        document.getElementById("continue").removeAttribute("hidden");
    } else {
        document.getElementById("continue").setAttribute("hidden", "True");
    }
    document.getElementById("main_menu").removeAttribute("hidden");
}

