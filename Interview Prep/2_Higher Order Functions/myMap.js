
//Custom way ->
function map(arr, mapFn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const mappedValue = mapFn(arr[i], i, arr);
      result.push(mappedValue);
    }
    return result;
  }
  
  const numbers = [1, 2, 3, 4];
  const square = x => x * x;
  const squaredNumbers = map(numbers, square);
  
  console.log(squaredNumbers); // -> [1, 4, 9, 16]




//Array Prototype way-





