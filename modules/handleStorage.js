import { AwesomeBooks } from './module.js';

const book = new AwesomeBooks('User', '#books');
const formValues = document.getElementById('form');

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

export { book, handleBookStorage };