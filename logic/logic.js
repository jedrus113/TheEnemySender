var score;

function logicLoad(){
    getImageFile("images/Stickman.png", "hero");
    getImageFile("images/evil.png", "evil");
}

function initLogic(){
    score = 0;
    initEnemy();
    initHero();
}

function drawGameFrame(){

}