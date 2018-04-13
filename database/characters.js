// first include weapons.js and constants.js

var character = {
    evil: {
        items: [],
        name: "evil",
        image: "evil",
        position: config.enemy.spanAt,
        size: {x:70, y:70},
        health: 50,
        nextAttackOn: 0
    },
    hero: {
        weapon: [],
        name: "hero",
        image: "hero",
        health: config.hero.defaultHP,
        position: config.hero.spanAt,
        size: config.hero.size,
        nextAttackOn: 0
    }
};

