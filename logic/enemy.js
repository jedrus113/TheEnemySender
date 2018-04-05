var enemies;
var nextEnemyPossibleAt;


function initEnemy(){
    enemies = [];
    nextEnemyPossibleAt = 0;
}

function addEnemy(power){
    power = power / 20;
    if (power > 100){
        power = 100;
    } else if(power < 10){
        power = 10;
    }

    sizeX = 50 + power;
    sizeY = 50 + power;

    var newEnemy = {
        name: "evil",
        image: imageNames.evil,
        x: enemySpawnAtX,
        y: enemySpawnAtY,
        sizeX: sizeX,
        sizeY: sizeY,
        health: power
    };
    enemies.push(newEnemy);
    var waitTime = power * 30;
    nextEnemyPossibleAt = Date.now() + waitTime;
}

function canICreateAnEnemy(){
    return (Date.now() > nextEnemyPossibleAt)
}

function drawEnemies(){
    for (var i = 0; i < enemies.length; i++){
        drawItem(enemies[i])
    }
}