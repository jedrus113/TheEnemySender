var enemies;
var nextEnemyPossibleAt;
var removeStopSignAt;

function initEnemy(){
    displayWaitSign = 0;
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
    var waitTime = power * 50 + enemySpawnWaittime;
    nextEnemyPossibleAt = Date.now() + waitTime;
}

function canICreateAnEnemy(){
    if (Date.now() > nextEnemyPossibleAt){
        removeStopSignAt = 0;
        return true;
    } else {
        removeStopSignAt = Date.now() + 500;
        return false;
    }
}

function drawEnemies(){
    for (var i = 0; i < enemies.length; i++){
        enemies[i].x -= enemySpeed;
        drawItem(enemies[i]);
    }
    if ( Date.now() < removeStopSignAt ){
        drawItem({
            x:200,
            y:50,
            sizeX: 200,
            sizeY: 200,
            image: imageNames.wait
        })
    }
    else if ( removeStopSignAt !== 0 && Date.now() >= removeStopSignAt ){
        removeStopSignAt = 0;
    }
}