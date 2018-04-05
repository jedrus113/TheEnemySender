var keyDownAt = 0;

function initKeyListeners(){
    document.body.onkeydown = function(e) {
        if (e.code === "Space" || e.code === "Enter" ) {
            keyDownAt = new Date().getTime();
        }
    };
    document.body.onkeyup = function(e) {
        if (e.code === "Space" || e.code === "Enter" ) {
            if ( keyDownAt !== 0 ){
                var result = new Date().getTime() - keyDownAt;
                keyDownAt = 0;
                addEnemy(result);
            }
        }
    };
}