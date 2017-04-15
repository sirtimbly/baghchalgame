import { BoardNode } from './BoardNode';
import {Piece, PieceType} from './Pieces';

export class Tiger extends Piece {

    constructor(id) {
        super(id);
        this.type = PieceType.Tiger
    }

    targetsOnBoard(boardNodes:Array<BoardNode>){
        var ret = [];
        var n = boardNodes[this.node.findNorth()];
        if (n && n.occupied === PieceType.Goat) {     
            ret.push(n);
        }
        var e = boardNodes[this.node.findEast()];
        if (e && e.occupied === PieceType.Goat) {     
            var ee = boardNodes[e.findEast()];
            if (ee && !ee.occupied) {
                ret.push(e);      
            }
        }
        var s = boardNodes[this.node.findSouth()];
        if (s && s.occupied === PieceType.Goat) {     
            ret.push(s);
        }
        var w = boardNodes[this.node.findWest()];
        if (w && w.occupied === PieceType.Goat) {     
            ret.push(w);
        }
        console.log(ret);
        return ret;
    }
}
