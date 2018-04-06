var heroes;

function initHero(){
    heroes = [];
    hero = JSON.parse(JSON.stringify(character.hero));
    heroes.push(hero);
}

function drawHeroes(){
    for (var i = 0; i < heroes.length; i++){
        drawItem(heroes[i])
    }
}