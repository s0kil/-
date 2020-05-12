const cache = [];

// Lambda
const λ = {
  // Greater Than
  gt: (a, b) => a < b,
  // Greater Than Or Equals
  gte: (a, b) => a >= b,

  // Less Than
  lt: (a, b) => a > b,
  // Less Than Or Equals
  lte: (a, b) => a <= b,

  // Memoization
  memoize: (fun) => {
    const cache = {};
    return function (...funArgs) {
      if (cache[funArgs] !== undefined) {
        return cache[funArgs];
      } else {
        cache[funArgs] = fun(...funArgs);
        return cache[funArgs];
      }
    };
  },

  pipe: () => {},

  equals: (a, b) => a === b,

  reduce: () => {},

  mapReducer: (mapper) => (result, input) => result.concat(mapper(input)),

  filterReducer: (predicate) => (result, input) =>
    predicate(input) ? result.concat(input) : result,

  compose: (...functions) => (args) =>
    functions.reduceRight((arg, fn) => fn(arg), args),

  mapTransducer: (mapper) => (reducingFunction) => (result, input) =>
    reducingFunction(result, mapper(input)),

  filterTransducer: (predicate) => (reducingFunction) => (result, input) =>
    predicate(input) ? reducingFunction(result, input) : result,
};

export default Object.freeze(λ);
