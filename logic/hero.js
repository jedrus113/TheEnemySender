var heroes;
var firstHero;
var idHeroes;

function initHero(){
    idHeroes = 0;
    heroes = {};
    hero = JSON.parse(JSON.stringify(character.hero));
    hero.id = idHeroes;
    hero.dict = heroes;
    heroes[idHeroes] = hero;
    firstHero = hero;
    idHeroes++;
}

function drawHeroes(){
    if(!firstHero || !heroes[firstHero.id]){
        firstHero = null;
        for (var id in heroes){
            if(fistHero == null || heroes[id].position.x > firstHero.position.x){
                firstHero = heroes[id];
            }
        }
    }
    for (var id in heroes){
        drawItem(heroes[id]);

        if (heroes[id].nextAttackOn <= Date.now()) {
            for (var enemyId in enemies) {
                if (enemies[enemyId].position.x < heroes[id].position.x + heroes[id].size.x + heroes[id].weapon.range) {
                    attack(heroes[id], enemies[enemyId]);
                }

            }
        }
    }

}