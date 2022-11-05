const gravity = 9.8;

function component(width, height, color, x, y, movement) {
    this.height = height;
    this.width = width;
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
}
