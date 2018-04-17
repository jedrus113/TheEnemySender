//DEBUG = true;

var config = {
    enemy: {
        spanAt: {x:521, y:300},
        speed: 1,
        multiplicationSpawnWaittime: 30,
        baseSpawnWaittime: 2000
    },
    hero: {
        defaultHP: 100,
        spanAt: {x:10, y:310},
        size: {x:100, y:100}
    }
};

DEBUG = typeof DEBUG !== 'undefined';
if (DEBUG){
    console.log("Debug = " + DEBUG);
}