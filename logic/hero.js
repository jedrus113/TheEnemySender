heroes = [];

function initHero(){
    hero = {
        name: "hero",
        image: images[imageNames.hero],
        health: 100,
        attack: 45,
        x: heroSpanAtX,
        y: heroSpanAtY
    };

    heroes.push(hero);
}