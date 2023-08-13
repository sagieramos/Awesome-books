import toggleNav from './modules/navigation.js';
import { book, handleBookStorage } from './modules/handleStorage.js';
import deleteCookie from './modules/cookie.js';
import displayTime from './modules/time.js';

const init = () => {
  document.addEventListener('click', (e) => {
    handleBookStorage(e);
    toggleNav(e);
  });

  book.display();
  deleteCookie('myCookie');
  setInterval(() => displayTime('#time'), 1000);
};

document.addEventListener('DOMContentLoaded', init);
