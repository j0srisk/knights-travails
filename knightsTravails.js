class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.parent = null;
  }
}

class Board {
    constructor() {
        this.board = [];
        for (let i = 0; i < 8; i++) {
        this.board.push([]);
        for (let j = 0; j < 8; j++) {
            this.board[i].push(new Square(i, j));
        }
        }
    }
}

class Knight {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function knightMoves(start, end) {
    let chessboard = new Board();

    let startSquare = chessboard.board[start[0]][start[1]];
    let endSquare = chessboard.board[end[0]][end[1]];

    let queue = [startSquare];

    startSquare.visited = true;

    while (queue.length > 0) {
        let currentSquare = queue.shift();
        if (currentSquare === endSquare) {
            getPath(currentSquare);
            return;
        } else {
            let possibleMoves = getPossibleMoves(currentSquare);
            possibleMoves.forEach(move => {
                let x = move[0];
                let y = move[1];
                let nextSquare = chessboard.board[x][y];
                if (!nextSquare.visited) {
                    nextSquare.visited = true;
                    nextSquare.parent = currentSquare;
                    queue.push(nextSquare);
                }
            });
        }
    }
}

function getPossibleMoves(square) {
    let possibleMoves = [];
    let x = square.x;
    let y = square.y;

    let moves = [[x + 1, y + 2], [x + 2, y + 1], [x + 2, y - 1], [x + 1, y - 2], [x - 1, y - 2], [x - 2, y - 1], [x - 2, y + 1], [x - 1, y + 2]];

    moves.forEach(move => {
        if (move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7) {
            possibleMoves.push(move);
        }
    });

    return possibleMoves;
}

function getPath(square) {
    let path = [];
    let currentSquare = square;
    while (currentSquare) {
        path.push([currentSquare.x, currentSquare.y]);
        currentSquare = currentSquare.parent;
    }

    console.log("You made it in " + (path.length - 1) + " moves! Here's your path:");
    path.reverse().forEach(move => {
        console.log(move);
    }); 

}

knightMoves([3, 3], [4, 3]);