import λ from "./elam.js";

const sum = λ.memoize((a, b) => a + b);

const addOne = λ.memoize((number) => number + 1);

// Initial
const r1 = sum(9, 9);
console.log(r1);

// Memoized
const r2 = sum(9, 9);
console.log(r2);

// One Parameter
const r3 = addOne(2);
console.log(r3);
