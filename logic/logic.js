var score;

function logicLoad(){
    getImageFile("images/Stickman.png", "hero");
    getImageFile("images/evil.png", "evil");
    getImageFile("images/stop.jpg", "wait");
    getImageFile("images/boom.png", "boom");
}

function initLogic(){
    score = 0;
    initEnemy();
    initHero();
}

function drawGameFrame(){
    drawEnemies();
    drawHeroes();
}