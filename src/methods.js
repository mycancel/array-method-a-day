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
];

export default methods;
