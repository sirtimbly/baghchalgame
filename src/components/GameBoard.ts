import { BoardNode } from './BoardNode';
import { PieceType } from './Pieces';

var c = document.getElementById("canvas") as HTMLCanvasElement;
var ctx = c.getContext("2d");
var _thickness = 3;
var _color = "#ccc";
var _highlight = "#ff3322";
var _goat = "#0022ee";
var nodes = [];
var turn = 0;
var runCount = 0;
var gridSize = 68;
var tigers = [];
var goats = [];
var selectedTiger, selectedGoat;


//-----------------------
//Utils
//-----------------------
var rand = function(e) {
  var number = Math.floor(Math.random() * e);
  return number;
};

export class GameBoard {
    currentTurn:PieceType;
    constructor() {
        //--------------
        //Kick it off
        for (var i = nodes.length; i < 25; i++) {
            var n = new BoardNode(i);
            console.log(n.id);
            n.position();
            n.calculateConnections();
            n.draw(_color);
            n.createHitbox();
            nodes.push(n);
        }
    }

    nextTurn() {

    }
}




// var t1 = new Tiger(1);
// t1.place(BoardNodes[0]);


// var g1 = new Goat(1);
// g1.place(BoardNodes[1]);
// var g2 = new Goat(2);
// g1.place(BoardNodes[2]);

// var targets = t1.targets();

// for (var target of targets) {
//   target.hitbox.style.backgroundColor = 'red';
// }


setInterval(function() {
  runCount++;
  //console.log("---");
  
  ctx.clearRect(0,0,400,400);
  for (var i = 0; i < 25; i++) {
    if (nodes[i].occupied === "t") {
      nodes[i].draw(_highlight);
    // } else if (BoardNodes[i].occupied === "g") {
    //   BoardNodes[i].draw(_goat);      
    } else {
      nodes[i].draw(_color);      
    }
  }
}, 300);