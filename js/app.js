import AwesomeBooks from './module.js';

const form = document.getElementById('myForm');
const book = new AwesomeBooks('User', '#books');

function handleBookStorage(e) {
  const { target } = e;
  if (target.matches('.remove')) {
    target.parentNode.classList.add('fade-out');
    const index = [...(document.querySelectorAll('.remove'))].indexOf(target);
    setTimeout(() => {
      book.delete(index);
    }, 300);
  } else if (target.matches('#submit')) {
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const author = formData.get('author');
    book.store(title, author);
    form.reset();
  }
}

function init() {
  document.addEventListener('click', handleBookStorage);
  book.display();
}

function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=https://sagieramos.github.io/Awesome-books/;`;
}

deleteCookie('myCookie');

document.addEventListener('DOMContentLoaded', init);
