var makeMatrix = (size, fill) => {
  var m =[];
  for(var i = 0; i < size; i++) {
    m[i] = [];
    for(var j=0; j< size; j++) {
      m[i][j] = fill;
    }
  }
  return m;
}

var makeCards = (size) => {
  var outerSquire = size*size;
  var innerSquireSide = size % 2 ? size - 2 : size / 2;
  var innerSquire = innerSquireSide * innerSquireSide;
  var result = outerSquire - innerSquire;
  var arr = [];
  for (var i = 1; i <= result; i++) {
    arr.push(i);
  }
  return arr;
};


var makeBoard = function (list, size) {
  var matrixSize = size*size;
  var matrix = makeMatrix(size, 0);

  var leftTop     = size * 0 - 0;
  var rightTop    = size * 1 - 1;
  var rightBottom = size * 2 - 2;
  var leftBottom  = size * 3 - 3;

  var topSide    = i => i >= leftTop     && i < size * 1 - 0;
  var rightSide  = i => i >= rightTop    && i < size * 2 - 1;
  var bottomSide = i => i >= rightBottom && i < size * 3 - 2;
  var leftSide   = i => i >= leftBottom  && i < size * 4 - 4;

  var first = leftTop;
  var last = rightTop;

  for(var i = 0; i < matrixSize; i++) {
    if(topSide(i)) {
      matrix[first][i] = list[i];
    }
    if(rightSide(i)) {
      matrix[i+1-size][last] = list[i];
    }
    if(bottomSide(i)) {
      var reverseCounterBottom = ((i -  rightBottom) * -1) + last;
       matrix[last][reverseCounterBottom] =  list[i];
    }
    if(leftSide(i)) {
      var reverseCounterLeft = ((i -  leftBottom) * -1) + last;
      matrix[reverseCounterLeft][first] = list[i];
    }
  }
  return matrix;
};


var fieldSize = 4;

var makeTable = (size) => {
  var cards = makeCards(+size)
  var board = makeBoard(cards, +size);
  var table =
    '<table>' + (
      board.map(row =>
          '<tr>' + (
              row.map(col =>'<td>' + col + '</td>').join('')
            ) +
          '</tr>'
      ).join('')) +
    '</table>';

  $("#table").html(table);
};

makeTable(fieldSize);

$('input').val(fieldSize);

$('input').on('change', (e) => {
  makeTable(e.target.value);
})


