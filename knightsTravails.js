//create chessboard
function createBoard(size) {
    let board = [];
    for (let i = 0; i < size; i++) {
        board.push([]);
        for (let j = 0; j < size; j++) {
            let cordinates = [i, j];
            board[i].push(cordinates);
        }
    }
    return board;
}

//create knight
function createKnight() {
    let knight = {
        position: [null, null],
        moves: [],
        visited: []
    }
    return knight;
}
