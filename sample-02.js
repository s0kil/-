import λ from "./elam.js";

const coordinates = [
  { x: 0.1, y: 2.0 },
  { x: 0.2, y: 1.9 },
  { x: 0.3, y: 1.8 },
  { x: 0.4, y: 1.7 },
  { x: 0.5, y: 1.6 },
  { x: 0.6, y: 1.5 },
  { x: 0.7, y: 1.4 },
  { x: 0.8, y: 1.3 },
  { x: 0.9, y: 1.2 },
  { x: 1.0, y: 1.1 },
  { x: 1.1, y: 1.0 },
  { x: 1.2, y: 0.9 },
  { x: 1.3, y: 0.8 },
  { x: 1.4, y: 0.7 },
  { x: 1.5, y: 0.6 },
  { x: 1.6, y: 0.5 },
  { x: 1.7, y: 0.4 },
  { x: 1.8, y: 0.3 },
  { x: 1.9, y: 0.2 },
  { x: 2.0, y: 0.1 },
];

const r = λ.filter(coordinates, (item) => item.x > 1 && item.y > 0);
console.log(r);
