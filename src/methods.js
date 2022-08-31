const methods = [
  {
    "method": "at",
    "description": "The at() method takes an integer value (positive or negative) and returns the item at that index."
  },
  {
    "method": "concat",
    "description": "The concat() method is used to merge two or more arrays, returning a new array without changing the old ones."
  },
  {
    "method": "copyWithin",
    "description": "The copyWithin() method shallow copies part of an array to another location in the same array. The length of the array is not changed. The first parameter is the index where the copy will be placed within the array(the target). The second parameter is the starting index for the copied section. The optional third parameter is the ending index (which will not be copied in the array). If the third parameter is not provided, all element until the end of the array will be copied."
  },
  {
    "method": "every",
    "description": "The every() method takes in a function and returns a Boolean value if all elements of the array passes the function test."
  },
  {
    "method": "fill",
    "description": "The fill() method fills every element of an array with a static value from the given start index to the given end index. The modified array is returned. If the end index is omitted, the elements will be filled with the static value from the start index to the end of the array. If neither a start index nor an end index is given, the entire array will be filled with the static value."
  },
  {
    "method": "filter",
    "description": "The filter() method takes in a function which will be applied to each element of an array. It returns an array with elements that return 'true' when passed in the function. The returned array may also be called a shallow copy— a protion of the given array that is filtered down. If no elements pass the test, an empty array is returned."
  },
  {
    "method": "find",
    "description": "The find() method returns the first element in the array that satisfies the function passed into the method. See the findIndex method for a similar method that returns the index instead."
  },
  {
    "method": "findIndex",
    "description": "The findIndex() method returns the index of the first element in the array that satisfies the function passed into the method. See the find method for a similar method that returns the element instead."
  },
  {
    "method": "findLast",
    "description": "The findLast() method returns the index of the last element in the array that satisfies the function passed into the method. See the find method for a method that returns the first element instead."
  }
];

export default methods;