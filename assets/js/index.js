const mainEl = document.querySelector('main');
const navEl = document.querySelector('nav');

const methods = [
  {
    method: 'at',
    description: 'The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.',
  },
  {
    method: 'concat',
    description: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
  },
];

function methodInfo(obj) {
  // Refreshes main element
  mainEl.innerHTML = null;
  // Populates main with method title and description
  const title = document.createElement('h2');
  const description = document.createElement('p');
  title.innerHTML = obj.method;
  description.innerHTML = obj.description;
  mainEl.append(title, description);
  // TODO: create way to display how the method works
}

function init() {
  // Refreshes navigation bar
  navEl.innerHTML = null;
  // Populates nav with method buttons
  methods.forEach((method) => {
    const navBtn = document.createElement('button');
    navBtn.innerHTML = method.method;
    navBtn.classList = 'navBtn';
    navEl.append(navBtn);
  })
}

init();

navEl.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    // Get method information based on button pressed
    const method = event.target.innerHTML;
    const [methodObj] = methods.filter((item) => item.method === method);
    methodInfo(methodObj);
  }
  return;
});