const gravity = 0;

function component(width, height, color, x, y, movement, type) {
    this.type = type;
    this.height = height;
    this.width = width;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.movement = movement;
    
    this.update = function() {
        if (this.movement) {
            this.gravityMovement = this.y += gravity;
        }
        this.gravityMovement;
        this.ctx = gameArea.context;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    this.updateMovements = function() {

        this.x += this.speedX;
        this.y += this.speedY;
    }
}
