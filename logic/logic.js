var score;

function logicLoad(){
    getImageFile("images/Stickman.png");
    getImageFile("images/evil.png");
}

function initLogic(){
    score = 0;
    initEnemy();
    initHero();
}

function drawGameFrame(){

}