function startGame() {
    gameArea.start();
    gameComponent = new component(20, 30, "red", 10, 10, true);
    gameObstacle = new component(100, 100, "cyan", 50, 50, false);
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = (innerWidth - 100);
        this.canvas.height = (innerHeight - 100);
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGameArea() {
    gameArea.clear();
    gameComponent.update();
    gameObstacle.update();
}