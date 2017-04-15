import {PieceType} from './Pieces'
export class BoardNode {

    id:number;
    row:number;
    col:number;
    n:boolean;
    e:boolean;
    s:boolean;
    w:boolean;
    ne:boolean;
    se:boolean;
    sw:boolean;
    nw:boolean;
    occupied:PieceType;
    hitbox:HTMLElement;

    constructor (iteration) {
        console.log("new");

        this.id = iteration;
        this.row = 0;
        this.col = 0;
        this.n = false;
        this.e = false;
        this.s = false;
        this.w = false;
        this.ne = false;
        this.se = false;
        this.sw = false;
        this.nw = false;
        this.occupied = null; //null, "t", "s"
    }

    x() {
        return this.col * gridSize;
    }

    y() {
        return this.row * gridSize;
    }

    draw(color):BoardNode {
        ctx.globalAlpha = 0.5;
        //ctx.shadowBlur = rand(50);
        ctx.shadowColor = '#ffffff';// + Math.round(0xffffff * Math.random()).toString(16);
        ctx.fillStyle = '#ffffff';// + Math.round(0xffffff * Math.random()).toString(16);

        ctx.beginPath();
        // ctx.arc(rand(2000),rand(2000),1,0,2*Math.PI);
        // ctx.stroke();
        var y = this.y();
        var x = this.x();
        if (this.n) {
            ctx.lineTo(x, y);
            ctx.lineTo(x, y - gridSize);
        }
        if (this.e) {
            ctx.lineTo(x, y);
            ctx.lineTo(x + gridSize, y);
        }
        if (this.s) {
            ctx.lineTo(x, y);
            ctx.lineTo(x, y + gridSize);
        }
        if (this.w) {
            ctx.lineTo(x, y);
            ctx.lineTo(x - gridSize, y);
        }
        if (this.ne) {
            ctx.lineTo(x, y);
            ctx.lineTo(x + gridSize, y - gridSize);
        }
        if (this.se) {
            ctx.lineTo(x, y);
            ctx.lineTo(x + gridSize, y + gridSize);
        }
        if (this.sw) {
            ctx.lineTo(x, y);
            ctx.lineTo(x - gridSize, y + gridSize);
        }
        if (this.nw) {
            ctx.lineTo(x, y);
            ctx.lineTo(x - gridSize, y - gridSize);
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = _thickness;
        ctx.stroke();
        return this;
    }

    position(): BoardNode {
        var i = this.id;
        i++;
        var col = i;
        var row = 1;
        if (i > 5) {
            row = Math.ceil(i / 5);
        }
        if (col > 5) {
            if (i % 5 === 0) {
            col = 5;
            } else {
            col = Math.max(i % 5, 0);
            }
        }
        console.log(row + "x" + col);
        // console.log("row", row)
        this.col = col; //Math.min(l);
        this.row = row;
        return this;
    }

    calculateConnections():BoardNode {
        this.n = this.s = this.e = this.w = true;
        
        // if (this.col === 1 || this.col === 3) {
        //   this.se = true;
        // }
        // if (this.col === 3 || this.col === 5) {
        //   this.sw = true;
        // }
        
        
        if (this.col % 2 === 0 && this.row % 2 === 0) {
            this.ne = this.se = this.sw = this.nw = true;
        }
        
        if ((this.row % 2 !== 0) && this.col % 2 !== 0) {
            this.sw = this.se = this.nw = this.ne = true;
        }
        
        //trim edges
        if (this.row === 1) {
            this.n = this.ne = this.nw = false;
        }
        if (this.col === 1) {
            this.w = this.nw = this.sw = false;
        }
        if (this.row === 5) {
            this.s = this.se = this.sw = false;
        }
        if (this.col === 5) {
            this.e = this.se = this.ne = false;
        }
        
        return this;
    }

    createHitbox():BoardNode {
        document.getElementById("BoardNodes").insertAdjacentHTML('beforeend', '<a href="#" class="BoardNode color-'+ this.occupied+'" id="' + this.id + '"></a>');
        var context = this;
        this.hitbox = document.getElementById(this.id.toString());
        this.hitbox.style.top = this.y()-7+"px";
        this.hitbox.style.left = this.x()-7+"px";
        
        return this;
    }

    show() {
        if (this.occupied === PieceType.Tiger)
            this.hitbox.style.backgroundColor = 'yellow';
        if (this.occupied === PieceType.Goat)
            this.hitbox.style.backgroundColor = 'blue';
    }

    findNorth() {
        if (this.row === 1) {
            return this.id - 5;
        }
        return null;
    }
    findEast() {
        if (this.col === 5) {
            return null;
        }
        return this.id + 1;
    }
    findSouth() {
        if (this.row === 5) {
            return null;
        }
        return this.id + 5;
    }
    findWest() {
        if (this.col === 1) {
            return null;
        }
        return this.id + 5;
    }
}
