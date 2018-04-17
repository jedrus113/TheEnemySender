var gameInterval;
var game_state;


game = {
    SAVE_KEY: 'savegame',
    save: function () {
        localStorage.setItem(game.SAVE_KEY, JSON.stringify(game_state));
    },
    load: function () {
        game_state = JSON.parse(localStorage.getItem(game.SAVE_KEY));
    },
    state: game.load()
};

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
    document.getElementById("main_menu").removeAttribute("hidden")
}


function restart(){
    gameInterval = setInterval(hasLoaded, 250);
}

