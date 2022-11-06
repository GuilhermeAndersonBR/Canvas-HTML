var gameObstacles = [];

function startGame() {
    gameArea.start();
    gameComponent = new component(20, 30, "red", 10, 10, true);
    gameObstacle = new component(gameArea.canvas.width - 100, 100, "cyan", 50, gameArea.canvas.height - 300, false);
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = (innerWidth - 100);
        this.canvas.height = (innerHeight - 100);
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 10);
        allMovements();
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function updateGameArea() {
    gameComponent.crashWith(gameObstacle);
    gameArea.clear();
    gameComponent.update();
    Movement();
    gameObstacle.update();
    gameComponent.updateMovements();
}