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

// The higher this value, the less the fps will reflect temporary variations
// A value of 1 will only keep the last value

function updateGameArea() {
    gameComponent.crashWith(gameObstacle);
    gameArea.clear();
    gameComponent.update();
    Movement();
    gameObstacle.update();
    gameComponent.updateMovements();
}

let be = Date.now(),fps=0;
requestAnimationFrame(
    function loop(){
        let now = Date.now()
        fps = Math.round(1000 / (now - be))
        be = now
        requestAnimationFrame(loop)
        if (fps < 35){
          kFps.style.color = "red"
          kFps.textContent = fps
        } if (fps >= 35 && fps <= 41) {
            kFps.style.color = "deepskyblue"
            kFps.textContent = fps + " FPS"
          } else {
            kFps.style.color = "black"
            kFps.textContent = fps + " FPS"
        }
        kpFps.value = fps;
    }
 )