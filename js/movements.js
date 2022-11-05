let baseSpeed = 2

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
    if (gameArea.keys && gameArea.keys['w']) {gameComponent.speedY = -baseSpeed; }
    if (gameArea.keys && gameArea.keys['s']) {gameComponent.speedY = baseSpeed; }
    if (gameArea.keys && gameArea.keys['a']) {gameComponent.speedX= -baseSpeed; }
    if (gameArea.keys && gameArea.keys['d']) {gameComponent.speedX= baseSpeed; }
}

