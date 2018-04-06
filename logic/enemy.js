var enemies;
var idEnemies;
var nextEnemyPossibleAt;
var removeStopSignAt;

function initEnemy(){
    idEnemies = 0;
    displayWaitSign = 0;
    enemies = {};
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
    newEnemy.health = power;
    newEnemy.id = idEnemies;
    newEnemy.weapon.damageMin = power / 5;
    newEnemy.weapon.damageMax = power / 2;
    newEnemy.size = {x: power+50, y: power+50};
    newEnemy.dict = enemies;
    enemies[idEnemies] = newEnemy;
    idEnemies++;

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
    for (var id in enemies){
        if (firstHero !== null && enemies[id].position.x - enemies[id].weapon.range <= firstHero.position.x + firstHero.size.x){
            if(enemies[id].nextAttackOn <= Date.now()) {
                attack(enemies[id], firstHero);
            }
        } else
        {
            enemies[id].position.x = enemies[id].position.x - config.enemy.speed;
        }
        drawItem(enemies[id]);
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