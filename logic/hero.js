heroes = [];

function initHero(){
    hero = {
        name: "hero",
        image: imageNames.hero,
        health: 100,
        attack: 45,
        x: heroSpanAtX,
        y: heroSpanAtY,
        sizeX: heroSizeX,
        sizeY: heroSizeY
    };

    heroes.push(hero);
}

function drawHeroes(){
    for (var i = 0; i < heroes.length; i++){
        drawItem(heroes[i])
    }
}