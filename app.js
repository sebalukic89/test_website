const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const login = document.querySelector('#login');
const bottomOfPage = document.querySelector('#bottom');
const nav = document.querySelector('.nav');
const hiddenListElement = document.querySelector('ul div');
const rootElement = document.documentElement;

// Open the sidebar
openBtn.addEventListener('click', () => {
  nav.classList.add('visible');
});

// Close the sidebar
closeBtn.addEventListener('click', () => {
  nav.classList.remove('visible');

  // Remove the 3 elements shown when clicking on login
  hiddenListElement.classList.add('hidden');
  hiddenListElement.classList.remove('show-hidden');
});

login.addEventListener('click', () => {
  // Open and close the sidebar
  nav.classList.add('visible');

  // Add the hidden elements only when clicked on login
  hiddenListElement.classList.remove('hidden');
  hiddenListElement.classList.add('show-hidden');

  // Scroll to the bottom of the page
  document.body.scrollTop = document.body.scrollHeight;
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
});
