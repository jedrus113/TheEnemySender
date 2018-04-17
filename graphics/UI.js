function show(id){
    document.getElementById(id).removeAttribute("hidden");
}

function hide(id){
    document.getElementById(id).setAttribute("hidden", "True");
}

function showLoadingScreen(){
    show("loading_bar");
}

function showMainMenu(){
    if (game.continue){
        show("continue");
    } else {
        hide("continue");
    }
    show("main_menu");
}
