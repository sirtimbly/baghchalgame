import {Piece, PieceType} from './Pieces';

class Goat extends Piece {
    constructor(id) {
        super(id);
        this.type = PieceType.Goat
    }
}