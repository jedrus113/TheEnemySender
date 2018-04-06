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

    var newEnemy = JSON.parse(JSON.stringify(character.evil));
    newEnemy.weapon.damageMin = power / 5;
    newEnemy.weapon.damageMax = power / 2;
    newEnemy.size = {x: power+50, y: power+50};
    enemies.push(newEnemy);

    var waitTime = (power * config.enemy.multiplicationSpawnWaittime) + config.enemy.baseSpawnWaittime;
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
        enemies[i].position.x = enemies[i].position.x - config.enemy.speed;
        drawItem(enemies[i]);
    }
    if ( Date.now() < removeStopSignAt ){
        drawItem({
            position: {x:200, y:50},
            size: {x:200, y:200},
            image: "wait"
        })
    }
    else if ( removeStopSignAt !== 0 && Date.now() >= removeStopSignAt ){
        removeStopSignAt = 0;
    }
}