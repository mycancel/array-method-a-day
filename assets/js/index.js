const mainEl = document.querySelector('main');
const selectEl = document.querySelector('select');

const methods = [
  {
    method: 'at',
    description: 'The at() method takes an integer value (positive or negative) and returns the item at that index.',
  },
  {
    method: 'concat',
    description: 'The concat() method is used to merge two or more arrays, returning a new array without changing the old ones.',
  },
  {
    method: 'copyWithin',
    description: 'The copyWithin() method shallow copies part of an array to another location in the same array. The length of the array is not changed. The first parameter is the index where the copy will be placed within the array(the target). The second parameter is the starting index for the copied section. The optional third parameter is the ending index (which will not be copied in the array). If the third parameter is not provided, all element until the end of the array will be copied.'
  },
  {
    method: 'every',
    description: 'The every() method takes in a function and returns a Boolean value if all elements of the array passes the function test.',
  },
  {
    method: 'fill',
    description: 'The fill() method fills every element of an array with a static value from the given start index to the given end index. The modified array is returned. If the end index is omitted, the elements will be filled with the static value from the start index to the end of the array. If neither a start index nor an end index is given, the entire array will be filled with the static value.',
  },
  {
    method: 'filter',
    description: 'The filter() method takes in a function which will be applied to each element of an array. It returns an array with elements that pass the test in the function.'
  },
];

const fn = {
  at() {
    // Establish array and integer variables
    const atArr = ['Apple', 3, 'Green', 6, 'Seven'];
    const atInt1 = 2;
    const atInt2 = -2;
    // Use method to create solved solutions
    const atSolved1 = atArr.at(atInt1);
    const atSolved2 = atArr.at(atInt2);

    // Create document elements to display example
    const atP = document.createElement('p');
    atP.innerHTML = `
    With the example array, the method returns "${atSolved1}" when passing the integer, 2.
    Then, when using -2, the method returns "${atSolved2}".`;
    const atImg = document.createElement('img');
    atImg.src = './assets/images/at.png';
    atImg.alt = 'at method variables';
    mainEl.append(atImg, atP);
  },
  
  concat() {
    // Establish array variables
    const concatArr1 = ['Red', 'Orange', 'Yellow', 'Green'];
    const concatArr2 = [1, 2, 3, 4, 5];
    // Use method to create solved solution
    const concatSolved = concatArr1.concat(concatArr2);

    // Create document elements to display example
    const concatP = document.createElement('p');
    concatP.innerHTML = `
    This method combines the two arrays into one new array that looks like the following:`;
    const concatImg1 = document.createElement('img');
    concatImg1.src = './assets/images/concat1.png';
    concatImg1.alt = 'concat method variables';
    const concatImg2  = document.createElement('img');
    concatImg2.src = './assets/images/concat2.png';
    concatImg2.alt = `[ ${concatSolved} ]`;
    mainEl.append(concatImg1, concatP, concatImg2);
  },

  copyWithin() {
    // Establish array variables
    const copyArr1 = [ 'a', 'b', 'c', 'x', 'y', 'z'];
    const copyArr2 = [ 'a', 'b', 'c', 'x', 'y', 'z'];

    // "c" (index 2, 3) will end the array instead of "z" (index 5)
    // const copySolved1 = copyArr1.copyWithin(5, 2, 3);
    // output: ["a", "b", "c", "x", "y", "c"]
    
    // "y" and "z" (index 4, end) will be copied over to index 0
    // const copySolved2 = copyArr2.copyWithin(0, 4);
    // output: ["y", "z", "c", "x", "y", "z"]
    
    // "y" and "z" (index 0, 2) will be copied over to index 2
    // const copySolved3 = copyArr2.copyWithin(2, 0, 2);
    // output: ["y", "z", "y", "z", "y", "z"]

    // Create document elements to display example
    const copyP1 = document.createElement('p');
    copyP1.innerHTML = 'The first example takes the string on the second index (up until but excluding the third index) and copies that item at the fifth index. In this case, the fifth index is the end of the array.';
    const copyImg1 = document.createElement('img');
    copyImg1.src = './assets/images/copyWithin1.png';
    copyImg1.alt = `[ ${copyArr1} ]`;
    const copyP2 = document.createElement('p');
    copyP2.innerHTML = 'The second example copies more than one item. It copies the items from the fourth index to the end and places that copy at the beginning of the array (at index 0). Keep in mind that the copyWithin method changes the original array. Therefore, when the copyWithin method is used a second time in this example, the array is already altered from the first copyWithin.';
    const copyImg2  = document.createElement('img');
    copyImg2.src = './assets/images/copyWithin2.png';
    copyImg2.alt = `[ ${copyArr2} ]`;
    mainEl.append(copyP1, copyImg1, copyP2, copyImg2);
  },

  every() {
    // Establish array variables
    // const everyFn = (element) => element >= 0;
    // const everyArr1 = [ 1.1, 2.3, 3.7, 4.2, 5.9 ];
    // const everyArr2 = [ 1.1, 2.3, 3.7, -4.2, 5.9 ];
    // Use method to create solved solution
    // const everySolved1 = everyArr1.every(everyFn);
    // const everySolved2 = everyArr2.every(everyFn);

    // Create document elements to display example
    const everyP = document.createElement('p');
    everyP.innerHTML = 'The function in this example checks to see if each element of the array is above zero. Therefore, the every() method returns "true" on the first array and "false" on the second array.';
    const everyImg = document.createElement('img');
    everyImg.src = './assets/images/every.png';
    everyImg.alt = 'every method variables';
    mainEl.append(everyImg, everyP);
  },

  fill() {
    // Establish array variables
    let fillArr = [' 0', ' 1', ' 2', ' 3', ' 4', ' 5'];
    const fillSolved1 = fillArr.fill(' partial', 1, 3);
    fillArr = [' 0', ' 1', ' 2', ' 3', ' 4', ' 5'];
    const fillSolved2 = fillArr.fill(' toEnd', 3);
    fillArr = [' 0', ' 1', ' 2', ' 3', ' 4', ' 5'];
    const fillSolved3 = fillArr.fill(' all');

    // Create document elements to display example
    const fillP = document.createElement('p');
    fillP.innerHTML = `In the first example of the array method, the method returns [${fillSolved1} ]. Only a portion of the array is filled with the static value of "partial" from index 1 up to, but not including, index 3. The second example defines the starting index at index 3, but does not define the ending index. This means that the array will be filled with the static value of "toEnd" starting at index 3 up to the end of the array. Therefore, the value of fillSolved2 is [${fillSolved2} ]. Finally, the third example fills all of the array because no starting or ending index is defined. This is seen in the value of fillSolved3: [${fillSolved3} ]. The fillArr variable is reassigned after each method instance because the original array is modified when the fill() method is called.`;
    const fillImg = document.createElement('img');
    fillImg.src = './assets/images/fill.png';
    fillImg.alt = 'fill method variables';
    mainEl.append(fillImg, fillP);
  },
};

function methodInfo(obj) {
  // Refreshes main element
  mainEl.innerHTML = null;
  // Populates main with method title, description, and subheading
  const title = document.createElement('h2');
  const description = document.createElement('p');
  const subheading = document.createElement('h3');
  title.innerHTML = obj.method;
  description.innerHTML = obj.description;
  subheading.innerHTML = 'Example of the ' + obj.method + ' Method';
  mainEl.append(title, description, subheading);
  // Calls function to practice method and display example
  fn[obj.method]();
};

function init() {
  // Populates method select with default option
  const navSelected = document.createElement('option');
  navSelected.innerHTML = "Method Select";
  navSelected.selected = true;
  navSelected.disabled = "disabled";
  selectEl.append(navSelected);

  // Populates method select with method information
  methods.forEach((method) => {
    const navOption = document.createElement('option');
    navOption.innerHTML = method.method;
    navOption.value = method.method;
    selectEl.append(navOption);
  });
};

init();

selectEl.addEventListener('change', (event) => {
  if (event.target.matches('select')) {
    // Get method information based on button pressed
    const method = event.target.value;
    const [methodObj] = methods.filter((item) => item.method === method);
    methodInfo(methodObj);
  };
  return;
});