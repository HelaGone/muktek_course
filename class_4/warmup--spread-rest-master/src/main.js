/*
Spread syntax allows an iterable such as an array expression to be expanded
in places where zero or more arguments (for function calls) or elements
(for array literals) are expected. (from MDN)
Spread in function calls -
The spread operator allows elements of an array as arguments to a function.
exports.calculateArrayMax = function(arr) {
  return Math.max.apply(null, arr)
}
Re-write calculateArrayMax using the spread operator instead of apply.
*/
const calculateArrayMax = (arr) => {
	return Math.max(...arr);
};

/*
Spread in arrays -
The spread operator can sometimes be used in place of push, splice, concat, etc.
exports.combineArrays = function(arr1, arr2) {
  return arr1.concat(arr2);
}
Rewrite combineArrays to use the spread operator.
*/

const combineArrays = (arr1, arr2) => {
	const arr3 = [...arr1, ...arr2];
	return arr3;
};

/*
Destructure an array with spread -
The spread operator is useful when destructuring arrays.
exports.skipFirstThree = function(arr) {
  return arr.slice(3);
}
Rewrite skipFirstThree to use the spread operator.
*/

const skipFirstThree = ([a, b, c, ...rest]) => {
	const rest_2 = rest;
	return rest_2
};

/*
Use the spread operator to capture rest parameters -
The rest parameter syntax allows us to represent
an indefinite number of arguments as an array.
Map (x 2) over all parameters beyond the first two, a and b.
*/

const allOthersMapTimesTwo = (a, b, ...others) => others.map(number => number * 2);

export default {
  calculateArrayMax,
  combineArrays,
  skipFirstThree,
  allOthersMapTimesTwo
};
