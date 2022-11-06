const gravity = 0.5;

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
        this.gravityMovement;
        this.ctx = gameArea.context;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    this.updateMovements = function() {

        this.x += this.speedX;
        this.y += this.speedY;
    }

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }

        var localCrash = {
            crashRight: (myleft == otherright),
            crashLeft: (myright == otherleft),
            crashTop: (mybottom == othertop),
            crashBottom: (mytop == otherbottom),
        }

        if (this.movement && !crash) {
            this.gravityMovement = this.y += gravity;
        } else {
            if (!localCrash.crashTop) {
                this.gravityMovement = this.y += gravity;
            }
        }

        var crashResponse = {
            crash,
            localCrash
        }

        return crashResponse;
    }
}
