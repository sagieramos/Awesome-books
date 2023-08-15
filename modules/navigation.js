const containers = {
  books: document.getElementById('book-container'),
  form: document.getElementById('myForm'),
  contact: document.getElementById('contact-container'),
};

let activeIndex = 0;

const toggleNav = (e) => {
  const { target } = e;

  if (target.parentNode.id !== 'nav-links') return;

  const children = [...target.parentNode.children];
  const index = children.indexOf(target);

  if (index === activeIndex) return;

  children[activeIndex].classList.remove('active');
  activeIndex = index;

  children[index].classList.add('active');

  Object.values(containers).forEach((container) => {
    container.classList.add('hidden');
  });

  containers[Object.keys(containers)[index]].classList.remove('hidden');
};

export default toggleNav;