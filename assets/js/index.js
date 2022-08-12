const mainEl = document.querySelector('main');
const navEl = document.querySelector('nav');

const methods = [
  {
    method: "at",
    description: "The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.",
  }
];

function init() {
  // Refreshes navigation bar
  navEl.innerHTML = null;
  // Populates nav with method buttons
  methods.forEach((method) => {
    const navBtn = document.createElement('button');
    navBtn.innerHTML = method.method;
    navBtn.classList = "navBtn";
    navEl.append(navBtn);
  })
}

init();