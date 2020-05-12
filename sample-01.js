import λ from "./elam.js";

const sum = λ.memoize((a, b) => a + b);

// Initial
const r1 = sum(9, 9);
console.log(r1);

// Memoized
const r2 = sum(9, 9);
console.log(r2);
