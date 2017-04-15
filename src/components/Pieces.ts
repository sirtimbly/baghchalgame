import { BoardNode } from './BoardNode'

export class Piece {
    id:number;
    type:PieceType;
    node:BoardNode;
    constructor(id) {
        this.id = id;
    }

    place(node:BoardNode) {
        if (!node.occupied) {
            this.node = node; 
            this.node.occupied = this.type;
            this.node.show();
        }
    }
}

export enum PieceType {
    Tiger,
    Goat
}