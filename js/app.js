import AwesomeBooks from './module.js';

const form = document.getElementById('myForm');
const book = new AwesomeBooks('User');
const hero = document.getElementById('books');

book.display(hero);

function handleBookStorage(e) {
  const { target } = e;
  if (target.matches('.remove')) {
    const books = [...(document.querySelectorAll('.remove'))];
    const i = books.indexOf(target);
    book.delete(i);
    book.display(hero);
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const title = formData.get('title');
  const author = formData.get('author');

  book.store(title, author);
  form.reset();
  book.display(hero);
}

window.addEventListener('click', handleBookStorage);
form.addEventListener('submit', handleSubmit);