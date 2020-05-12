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

  /* Memoization
  I:
    Accepts A Function `fun` as arguments
  O:
    Returns An Anonymous Function That Accepts Multiple Arguments `funArgs`
    When `funArgs` Is Not Memoized (Cached), Then Evaluate The Function `fun` With The Arguments `funArgs` And Memoize The Result
    Otherwise Return The Memoized Computation With The Arguments `funArgs` As Cache Identifier `cache[funArgs]`
  */
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
