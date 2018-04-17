function show(id){
    document.getElementById(id).removeAttribute("hidden");
}

function hide(id){
    document.getElementById(id).setAttribute("hidden", "True");
}

function showLoadingScreen(){
    show("img_loading_bar");
}
function hideLoadingScreen(){
    hide("img_loading_bar");
}

function showMainMenu(){
    if (game.continue){
        show("bttn_continue_game");
    } else {
        hide("bttn_continue_game");
    }
    show("div_main_menu");
}
