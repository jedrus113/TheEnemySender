var keyDownAt = 0;

function initKeyListeners(){
    document.body.onkeydown = function(e) {
        if (keyDownAt === 0 && canICreateAnEnemy() && (e.code === "Space" || e.code === "Enter" )) {
            keyDownAt = Date.now();
        }
    };
    document.body.onkeyup = function(e) {
        if (e.code === "Space" || e.code === "Enter" ) {
            if ( keyDownAt !== 0 ){
                var newDate = Date.now();
                var result = newDate - keyDownAt;
                keyDownAt = 0;
                addEnemy(result);
            }
        }
    };
}