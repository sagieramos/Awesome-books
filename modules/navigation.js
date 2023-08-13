const containers = {
  books: document.getElementById('book-container'),
  form: document.getElementById('myForm'),
  contact: document.getElementById('contact-container'),
};

const toggleNav = (e) => {
  const { target } = e;

  if (target.parentNode.id !== 'nav-links') return;

  const children = [...target.parentNode.children];
  const index = children.indexOf(target);

  children.forEach((item) => {
    item.classList.remove('active');
  });

  children[index].classList.add('active');

  Object.values(containers).forEach((container) => {
    container.classList.add('hidden');
  });

  containers[Object.keys(containers)[index]].classList.remove('hidden');
};

export default toggleNav;