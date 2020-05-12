import λ from "./elam.js";

const sum = λ.memoize((a, b) => a + b);

const addOne = λ.memoize((number) => number + 1);

// Initial
const r1 = sum(9, 9);
console.log(r1);

// Memoized
const r2 = sum(9, 9);
console.log(r2);

// Memoize One Parameter
const r3 = addOne(2);
console.log(r3);

const r4 = λ.measure(() => {
  let i = Number("1" + "000" + "000" + "000");
  while (i > 0) {
    i = i - 1;
  }
});

console.log(`Result 4 Toke ${r4} Seconds`);
