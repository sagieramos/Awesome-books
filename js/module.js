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
      const title = document.createElement('h2');
      title.className = 'title';
      title.textContent = obj.title;
      const author = document.createElement('h2');
      author.className = 'author';
      author.textContent = obj.author;
      const btn = document.createElement('button');
      btn.className = 'remove';
      btn.textContent = 'Remove';
      const article = document.createElement('article');
      article.className = 'awesome-book';
      const hr = document.createElement('hr');
      article.append(title, author, btn, hr);
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