const makeMatrix = (size, fill) => {
  const m = [];
  for (let i = 0; i < size; i++) {
    m[i] = [];
    for (let j = 0; j < size; j++) {
      m[i][j] = fill;
    }
  }
  return m;
};


export default (list, size, fill = '') => {
  const matrixSize = size * size;
  const matrix = makeMatrix(size, fill);

  const leftTop = 0;
  const rightTop = size - 1;
  const rightBottom = (size * 2) - 2;
  const leftBottom = (size * 3) - 3;

  const topSide = i => i >= leftTop && i < size;
  const rightSide = i => i >= rightTop && i < (size * 2) - 1;
  const bottomSide = i => i >= rightBottom && i < (size * 3) - 2;
  const leftSide = i => i >= leftBottom && i < (size * 4) - 4;

  const first = leftTop;
  const last = rightTop;


  for (let i = 0; i < matrixSize; i++) {
    if (topSide(i)) {
      matrix[first][i] = list[i];
    }
    if (rightSide(i)) {
      matrix[(i + 1) - size][last] = list[i];
    }
    if (bottomSide(i)) {
      const reverseCounterBottom = ((i - rightBottom) * -1) + last;
      matrix[last][reverseCounterBottom] = list[i];
    }
    if (leftSide(i)) {
      const reverseCounterLeft = ((i - leftBottom) * -1) + last;
      matrix[reverseCounterLeft][first] = list[i];
    }
  }
  return matrix;
};
