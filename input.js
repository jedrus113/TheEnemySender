var keyDownAt = 0;

function initKeyListeners(){
    document.body.onkeydown(function(e) {
        if (e.char === 32 || e.char === 13 ) {
            keyDownAt = new Date().getTime();
        }
    });
    document.body.onkeyup(function(e) {
        if (e.char === 32 || e.char === 13 ) {
            if ( keyDownAt !== 0 ){
                var result = keyDownAt - new Date().getTime();
                keyDownAt = 0;
                addEnemy(result);
            }
        }
    });
}