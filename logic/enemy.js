var enemies;


function initEnemy(){
    enemies = [];
}

function addEnemy(power){
    if (power > 2000){
        power = 2000;
    }
    var newEnemy = {
        name: "evil",
        image: images[imageNames.evil],
        x: enemySpawnAtX,
        y: enemySpawnAtY,
        health: power / 20
    };
    enemies.push(newEnemy)
}