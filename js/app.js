import { AwesomeBooks, displayTime } from './module.js';
import toggleNav from './navigation.js';

const book = new AwesomeBooks('User', '#books');
const formValues = document.getElementById('form');

setInterval(() => { displayTime('#time'); }, 1000);

const handleBookStorage = (e) => {
  const { target } = e;
  if (target.matches('.remove')) {
    target.parentNode.classList.add('fade-out');
    const index = [...(document.querySelectorAll('.remove'))].indexOf(target);
    setTimeout(() => {
      book.delete(index);
    }, 300);
  } else if (target.matches('#submit')) {
    e.preventDefault();
    const formData = new FormData(formValues);
    const title = formData.get('title');
    const author = formData.get('author');
    book.store(title, author);
    formValues.reset();
    if (title && author) {
      const confirm = document.getElementById('confirm');
      confirm.textContent = `"${title}" by ${author} is added!`;
      confirm.style.display = 'block';
      setTimeout(() => {
        confirm.textContent = null;
        confirm.style.display = 'none';
      }, 2000);
    }
  }
};

const init = () => {
  document.addEventListener('click', (e) => {
    handleBookStorage(e);
    toggleNav(e);
  });

  book.display();
};

const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 2023 00:00:00 UTC; path=/; domain=https://sagieramos.github.io/Awesome-books/;`;
};

deleteCookie('myCookie');

document.addEventListener('DOMContentLoaded', init);
