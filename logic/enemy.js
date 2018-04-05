var enemies;


function initEnemy(){
    enemies = [];
}

function addEnemy(){
    var newEnemy = {
        name: "evil",
        image: images[imageNames.evil],
        x: enemySpawnAtX,
        y: enemySpawnAtY,
        health: 100
    };
    enemies.push(newEnemy)
}