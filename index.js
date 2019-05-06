function pow(number1, number2) {
  let result = 1;
  for (let i = 0; i < number2; i++) {
    result *= number1;
  }
  return result;
}

function memoizer(func) {
  return function() {
    const args = JSON.stringify(arguments);
    if (func[args]) {
      console.log("Result from cache");
      return func[args];
    } else {
      const result = func.apply(null, arguments);
      func[args] = result;
      return result;
    }
  };
}

function tryIt(count) {
  for (let i = 0; i < count; i++) {
    const startTime = performance.now();
    const result = memoizer(pow)(2, 100000000); //If function that will memoize is not hard to calculate, function runs slower than normal invocation. 
    const endTime = performance.now();
    console.log(`Result: ${result} \\ Performance: ${endTime - startTime}`);
  }
}

tryIt(5);
//try it manually from console with tryIt function
