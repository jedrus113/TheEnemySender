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
    if(!heroes[firstHero.id]){
        firstHero = null;
        for (var id in heroes){
            if(fistHero == null || heroes[id].position.x > firstHero.position.x){
                firstHero = heroes[id];
            }
        }
    }
    for (var id in heroes){
        drawItem(heroes[id]);
    }
}