import AwesomeBooks from './module.js';

const form = document.getElementById('myForm');
const book = new AwesomeBooks('User');
const hero = document.getElementById('books');

book.display(hero);

function handleBookStorage(e) {
  const { target } = e;
  e.preventDefault();
  if (target.matches('.remove')) {
    const books = [...(document.querySelectorAll('.remove'))];
    const i = books.indexOf(target);
    book.delete(i);
    book.display(hero);
  }
  else if (target.matches('#submit')) 
  {  const formData = new FormData(form);
     const title = formData.get('title');
     const author = formData.get('author');
           book.store(title, author);
      form.reset(); 
      book.display(hero); }
}


window.addEventListener('click',(e)=> handleBookStorage(e));