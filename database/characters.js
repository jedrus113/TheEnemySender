// first include weapons.js and constants.js

var character = {
    evil: {
        weapon: weapon.rustyKnife,
        name: "evil",
        image: "evil",
        position: config.enemy.spanAt,
        size: {x:70, y:70},
        health: 50
    },
    hero: {
        weapon: weapon.heroSword,
        name: "hero",
        image: "hero",
        health: config.hero.defaultHP,
        position: config.hero.spanAt,
        size: config.hero.size
    }
};

