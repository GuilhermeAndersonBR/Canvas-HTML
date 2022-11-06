let baseSpeed = [8,2,2,2];

function allMovements() {

    window.addEventListener('keydown', function (e) {
        e.preventDefault();
        gameArea.keys = (gameArea.keys || []);
        gameArea.keys[e.key] = (e.type == "keydown");
    })
    window.addEventListener('keyup', function (e) {
        gameArea.keys[e.key] = (e.type == "keydown");
    })

}

function Movement() {
    gameComponent.speedX = 0;
    gameComponent.speedY = 0;
    if (!gameComponent.crashWith(gameObstacle).localCrash.crashBottom || !gameComponent.crashWith(gameObstacle).crash) {
        if (gameArea.keys && gameArea.keys['w']) {gameComponent.speedY = -baseSpeed[0]; }
    }
    if (!gameComponent.crashWith(gameObstacle).localCrash.crashTop || !gameComponent.crashWith(gameObstacle).crash) {
        if (gameArea.keys && gameArea.keys['s']) {gameComponent.speedY = baseSpeed[1]; }
    }
    if (!gameComponent.crashWith(gameObstacle).localCrash.crashRight || !gameComponent.crashWith(gameObstacle).crash) {
        if (gameArea.keys && gameArea.keys['a']) {gameComponent.speedX = -baseSpeed[2]; }
    }
    if (!gameComponent.crashWith(gameObstacle).localCrash.crashLeft || !gameComponent.crashWith(gameObstacle).crash) {
        if (gameArea.keys && gameArea.keys['d']) {gameComponent.speedX = baseSpeed[3]; }
    }
}

