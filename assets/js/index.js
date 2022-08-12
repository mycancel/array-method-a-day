const mainEl = document.querySelector('main');
const navEl = document.querySelector('nav');

const methods = [
  {
    method: 'at',
    description: 'The at() method takes an integer value (positive or negative) and returns the item at that index.',
  },
  {
    method: 'concat',
    description: 'The concat() method is used to merge two or more arrays, returning a new array without changing the old ones.',
  },
];

const fn = {
  at() {
    console.log('at');
  },
  
  concat() {
    console.log('concat');
  },
};

function methodInfo(obj) {
  // Refreshes main element
  mainEl.innerHTML = null;
  // Populates main with method title and description
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
  // Refreshes navigation bar
  navEl.innerHTML = null;
  // Populates nav with method buttons
  methods.forEach((method) => {
    const navBtn = document.createElement('button');
    navBtn.innerHTML = method.method;
    navBtn.classList = 'navBtn';
    navEl.append(navBtn);
  });
};

init();

navEl.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    // Get method information based on button pressed
    const method = event.target.innerHTML;
    const [methodObj] = methods.filter((item) => item.method === method);
    methodInfo(methodObj);
  };
  return;
});