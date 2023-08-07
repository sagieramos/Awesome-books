import { AwesomeBooks } from "./module.js";

const book = new AwesomeBooks('User');
const hero = document.getElementById('books');

/* book.store("stna1", "rrr");
book.store("stna", "rrr"); */

book.delete(0);

book.delete(3);

book.display(hero);

console.log('sssss');