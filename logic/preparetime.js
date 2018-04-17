
function start_preparation(){
    document.getElementById('preparetime_hint').innerHTML = "</br>Enemy!";
    show('div_preparetime');
}



function end_of_preparation(){
    hide('div_preparetime');
    start_defence();
}