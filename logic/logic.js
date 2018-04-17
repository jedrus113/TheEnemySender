
function start_new_game(){
    hide("main_menu");
    show("intro");
}

function skip_intro(){
    hide("intro");
    initLogic();
}

function initLogic(){
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
        defender.health -= Math.round(damage);
        if (defender.health <= 0) {
            delete defender.dict[defender.id];
        }
        attacker.nextAttackOn = Date.now() + attacker.weapon.speed;
    }
}