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

function attack(attacker, defender){
    if(attacker.nextAttackOn <= Date.now()) {
        var damage = attacker.weapon.attack.baseDamage;
        damage += Math.random() * (attacker.weapon.damage.max - attacker.weapon.damage.min) + attacker.weapon.damage.min;
        defender.health -= damage;
        if (defender.health <= 0) {
            delete defender.dict[defender.id];
        }
        attacker.nextAttackOn = Date.now() + attacker.weapon.speed;
    }
}