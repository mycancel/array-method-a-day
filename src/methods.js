const methods = [
  {
    method: 'at',
    description:
      'The at() method takes an integer value (positive or negative) and returns the item at that index.',
    examples: [
      {
        image: './images/at.png',
        text: 'With the example array, the method returns "Green" when passing the integer, 2. Then, when using -2, the method returns "6".',
      },
    ],
  },
  {
    method: 'concat',
    description:
      'The concat() method is used to merge two or more arrays, returning a new array without changing the old ones.',
    examples: [
      { 
        image: './images/concat1.png', 
        text: "This method combines the two arrays into one new array that looks like the following:" 
      },
      { image: './images/concat2.png' },
    ],
  },
  {
    method: 'copyWithin',
    description:
      'The copyWithin() method shallow copies part of an array to another location in the same array. The length of the array is not changed. The first parameter is the index where the copy will be placed within the array (the target). The second parameter is the starting index for the copied section. The optional third parameter is the ending index (which will not be copied in the array). If the third parameter is not provided, all element until the end of the array will be copied.',
    examples: [
      { 
        image: './images/copyWithin1.png',
        text: 'The first example takes the string on the second index (up until but excluding the third index) and copies that item at the fifth index. In this case, the fifth index is the end of the array.'
      },
      { 
        image: './images/copyWithin2.png',
        text: 'The second example copies more than one item. It copies the items from the fourth index to the end and places that copy at the beginning of the array (at index 0). Keep in mind that the copyWithin method changes the original array. Therefore, when the copyWithin method is used a second time in this example, the array is already altered from the first copyWithin.'
      },
    ],
  },
  {
    method: 'every',
    description:
      'The every() method takes in a function and returns a Boolean value if all elements of the array passes the function test.',
    examples: [
      { 
        image: './images/every.png',
        text: 'The function in this example checks to see if each element of the array is above zero. Therefore, the every() method returns "true" on the first array and "false" on the second array.'
      }
    ],
  },
  {
    method: 'fill',
    description:
      'The fill() method fills every element of an array with a static value from the given start index to the given end index. The modified array is returned. If the end index is omitted, the elements will be filled with the static value from the start index to the end of the array. If neither a start index nor an end index is given, the entire array will be filled with the static value.',
    examples: [
      { 
        image: './images/fill.png',
        text: 'In the first example of the array method, the method returns [ 0 , partial, partial, 3, 4, 5 ]. Only a portion of the array is filled with the static value of "partial" from index 1 up to, but not including, index 3. The second example defines the starting index at index 3, but does not define the ending index. This means that the array will be filled with the static value of "toEnd" starting at index 3 up to the end of the array. Therefore, the value of fillSolved2 is [ 0, 1, 2, "toEnd", "toEnd", "toEnd" ]. Finally, the third example fills all of the array because no starting or ending index is defined. This is seen in the value of fillSolved3: [ "all", "all", "all", "all", "all", "all" ]. The fillArr variable is reassigned after each method instance because the original array is modified when the fill() method is called.' 
      }
    ],
  },
  {
    method: 'filter',
    description:
      'The filter() method takes in a function which will be applied to each element of an array. It returns an array with elements that return "true" when passed in the function. The returned array may also be called a shallow copy— a protion of the given array that is filtered down. If no elements pass the test, an empty array is returned.',
    examples: [
      { 
        image: './images/filter.png',
        text:  'In this simple example of the filter method, the method returns [ 3, 15, 40 ]. This is created because the elements "3", "15", and "40" return "true" when passed into the filter function.'
      }
    ],
  },
  {
    method: 'find',
    description:
      'The find() method returns the first element in the array that satisfies the function passed into the method. See the findIndex method for a similar method that returns the index instead.',
    examples: [
      { 
        image: './images/find.png',
        text: 'For this example, the method returns "dragon" because it is the first element in the array that has a length more than 5 characters. The method does not return "red" or "white" because they do not pass the function. The method also does not return "lizard" because "dragon" comes before "lizard" in the order of the array.' 
      }
    ],
  },
  {
    method: 'findIndex',
    description:
      'The findIndex() method returns the index of the first element in the array that satisfies the function passed into the method. See the find method for a similar method that returns the element instead.',
    examples: [
      { 
        image: './images/findIndex.png',
        text: 'For this example, the method returns the index of 2 because "dragon" is the first element in the array that has a length more than 5 characters. The method does not return 0 or 1 because "red" or "white" do not pass the function. The method also does not return the index of 3 for the element "lizard" because "dragon" comes before "lizard" in the order of the array.' 
      }
    ],
  },
  {
    method: 'findLast',
    description:
      'The findLast() method returns the index of the last element in the array that satisfies the function passed into the method. See the find method for a method that returns the first element instead.',
    examples: [
      { 
        image: './images/findLast.png',
        text: 'For this example, the method returns "lizard" because it is the last element in the array that has a length more than 5 characters. The method does not return "red" or "white" because they do not pass the function. The method also does not return "dragon" because "lizard" comes after "dragon" in the order of the array.'
      }
    ],
  },
  {
    method: 'flat',
    description: 'The flat() method is used to reduce and concat an array in order to remove layers of square brackets from nested arrays. The method takes in a depth level to flatten the nested arrays, and returns a new array. The method flatmap() uses this method as well as the map() method.',
    examples: [
      {
        image: './images/flat1.png',
        text: 'The first example flattens an array that has another array in its last index. Without specifying the depth, the entire array is flattened by the depth of 1. Therefore, flatSolved is assigned [ "red", "orange", "green", "blue" ].'
      },
      {
        image: './images/flat2.png',
        text: 'The second example flattens an array that has a triple nested array in its first index. After flattened by a depth of 2,  flatSolved is assigned [ ["red", "orange"], "green", "blue" ]. The elements of "red" and "orange" are still contained within a nested array because the depth did not flatten the array entirely.' 
      }
    ]
  },
  {
    method: 'flatmap',
    description: 'The flatmap() method is a combination of the methods flat() and map(). It returns a new array after applying a function to each element of he array. Then, the array is flattened by one level. Possible parameters include a callback function, current value, index, and array.',
    examples: [
      {
        image: './images/flatMap.png',
        text: 'This example calls both the map() and flatmap() methods in order to highlight the difference between their outputs. The callback function also calls the split() string method which returns an array. While the map() takes each element and splits them at each space, the method returns an array which contains nested arrays. On the other hand, the flatmap() method returns an array with no nested arrays.'
      }
    ]
  },
  {
    method: 'forEach',
    description: 'The forEach() method is similar to a for loop because it executes a function for each element of the array. However, unlike a for loop, it cannot be exited early (with the break statement), it is slower than a for loop, and it does not work with the await keyword. However, it reduces the amount of code to write when applying a for loop function to an array.',
    examples: [
      {
        image: './images/forEach.png',
        text: 'In this example, the function is executed with each element of the array. Therefore, the console will show four logs of "true".'
      }
    ]
  },
  {
    method: 'Array.from',
    description: 'The Array.from() method creates arrays from iterable objects (like Map and Set) or array-like objects (that have a length property and indexed elements, like strings). It takes in the object, but can also take in a function optionally to execute a map function on each element of the array.',
    examples: [
      {
        image: './images/from1.png',
        text: 'This example takes in a string and separates each letter to form an array. This is an alternative to the string method split().'
      },
      {
        image: './images/from2.png',
        text: 'This example takes in the same string as the first example, but before the array is completely constructed, it executes a function for each element of the array. Unlike a function in the map() method, a function in the from() method does not have the array as one of its parameters.'
      }
    ]
  },
  {
    method: 'includes',
    description: 'The includes() method returns a boolean value depending on if the array contains an element with a certain value.',
    examples: [
      {
        image: './images/includes.png',
        text: 'When the method is first executed, it searches the array for "74" and returns "true" because the array includes that value. However, when the method is executed again, it searches for "Tuna" — a value not included in the array. Thus, the method returns "false".'
      }
    ]
  },
  {
    method: 'indexOf',
    description: 'The indexOf() method returns the index of the element in the array. If that element could not be found, "-1" is returned. If multiple elements in the array have the same value, the index of the first element is returned.',
    examples: [
      {
        image: './images/indexOf.png',
        text: 'When indexOf() is first called, it searches the array for an element that matches the value of "Elves". This appears twice in the array; however, the method returns the index of the first instance of "Elves" in the array. When indexOf() is called a second time, it is passed a value which is not present in the array. Therefore, the method returns "-1".'
      }
    ]
  },
  {
    method: 'Array.isArray',
    description: 'Array.isArray() returns a boolean value depending on whether the value passed into the method is (or is not) an array.',
    examples: [
      {
        image: './images/isArray.png',
        text: 'Since the first value is an array, the method returns "true." However, it returns false for the second variable because that value is not an array.'
      }
    ]
  },
  {
    method: 'join',
    description: 'The join() method returns a new string created by concatenating all elements in an array. If a separator is passed as a string into the method, the returned string value concats each element of the array with the separator in between. If nothing is passed into the method, the steing will be separated by commas.',
    examples: [
      {
        image: './images/join.png',
        text: 'Without passing anything into the join() method, the string value separates each element of the joinElements array with commas. When a string is passed into the method, that string replaces those commas. Therefore, when an empty string is passed into the method, all of the elements are directly next to each other. When a string containing a dash is passed into the method, the dash separates the elements. When a string containing a space is passed into the method, the space separates the elements. By using the join() method in this way, the returned string looks most similar to a sentence.'
      }
    ]
  }
];

export default methods;
