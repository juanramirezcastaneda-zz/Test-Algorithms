const fibonacciIndex = 10;

const fibonacciSolver = (nthElement: number): number => {
  if (nthElement < 2) {
    return nthElement;
  }
  return fibonacciSolver(nthElement - 1) + fibonacciSolver(nthElement - 2);
};

console.time("complexitysort");

for (let index = 0; index < fibonacciIndex; index++) {
  console.log(fibonacciSolver(index));
}

console.timeEnd("complexitysort");

export { fibonacciSolver };
