function startGame() {
    gameArea.start();
    gameComponent = new component(20, 30, "red", 10, 10);
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = (innerWidth - 100);
        this.canvas.height = (innerHeight - 100);
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function component(width, height, color, x, y) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.ctx = gameArea.context;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}