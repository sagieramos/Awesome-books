class AwesomeBooks {
  constructor(memAdrr) {
    this.memAdrr = memAdrr;
  }

  store(BookTitle, booKAuthor) {
    if (BookTitle < 1 || booKAuthor < 1) return;
    const storeData = JSON.parse(localStorage.getItem(this.memAdrr)) || [];
    const book = { title: BookTitle, author: booKAuthor };
    storeData.push(book);
    localStorage.setItem(this.memAdrr, JSON.stringify(storeData));
  }

  display(container) {
    const storeData = JSON.parse(localStorage.getItem(this.memAdrr)) || [];
    const fragment = document.createDocumentFragment();

    while (container.firstChild) {
      container.firstChild.remove();
    }

    storeData.forEach((obj) => {
      const h2 = document.createElement('h2');
      h2.className = 'author';
      h2.textContent = `"${obj.title}" by ${obj.author}`;
      const btn = document.createElement('button');
      btn.className = 'remove';
      btn.textContent = 'Remove';
      const article = document.createElement('article');
      article.className = 'awesome-book';
      article.append(h2, btn);
      fragment.appendChild(article);
    });

    container.appendChild(fragment);
  }

  delete(index) {
    const storeData = JSON.parse(localStorage.getItem(this.memAdrr));

    if (!Array.isArray(storeData)) return;

    if (index < 0 || index >= storeData.length) return;

    storeData.splice(index, 1);
    localStorage.setItem(this.memAdrr, JSON.stringify(storeData));
  }
}

export default AwesomeBooks;