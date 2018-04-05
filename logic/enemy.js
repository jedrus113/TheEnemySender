var enemies;


function initEnemy(){
    enemies = [];
}

function addEnemy(power){
    if (power > 2000){
        power = 2000;
    }
    power = power / 20;

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
    enemies.push(newEnemy)
}

function drawEnemies(){
    for (var i = 0; i < enemies.length; i++){
        drawItem(enemies[i])
    }
}