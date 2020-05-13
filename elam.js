// Lambda
const λ = {
  gt: (a, b) => a < b,
  gte: (a, b) => a >= b,

  lt: (a, b) => a > b,
  lte: (a, b) => a <= b,

  memoize: (fun) => {
    const cache = {};
    return (...funArgs) =>
      cache[funArgs] === undefined
        ? (cache[funArgs] = fun(...funArgs))
        : cache[funArgs];
  },

  measure: (fun) => {
    const begin = performance.now();
    fun();
    const cease = performance.now();
    return (cease - begin) / 1000;
  },

  filter: (collection, predicate) => {
    const result = [];
    for (const item of collection) {
      if (predicate(item)) result.push(item);
    }
    return result;
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
