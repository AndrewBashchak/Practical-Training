function printSquares(n) {
    if (n >= 20)
        return;

    console.log(`${n}² = ${n * n}`);

    printSquares(n + 1);
}

printSquares(11);
  