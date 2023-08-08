import AwesomeBooks from './module.js';

const form = document.getElementById('myForm');
const book = new AwesomeBooks('User');
const bookContainer = document.getElementById('books');

book.display(bookContainer);

function handleBookStorage(e) {
  const { target } = e;
  e.preventDefault();
  if (target.matches('.remove')) {
    const books = [...(document.querySelectorAll('.remove'))];
    const i = books.indexOf(target);
    book.delete(i);
  } else if (target.matches('#submit')) {
    const formData = new FormData(form);
    const title = formData.get('title');
    const author = formData.get('author');
    book.store(title, author);
    form.reset();
  }
  if (target.matches('.remove, #submit')) { book.display(bookContainer); }
}

window.addEventListener('click', (e) => handleBookStorage(e));
