class AwesomeBooks {
  constructor(memAdrr, container) {
    this.memAdrr = memAdrr;
    this.container = document.querySelector(container);
  }

  store(BookTitle, booKAuthor) {
    if (!BookTitle || !booKAuthor) return;
    const storeData = JSON.parse(localStorage.getItem(this.memAdrr)) || [];
    const book = { title: BookTitle, author: booKAuthor };
    storeData.push(book);
    localStorage.setItem(this.memAdrr, JSON.stringify(storeData));
    const article = this.#addActicle(BookTitle, booKAuthor);
    this.container.appendChild(article);
  }

  // eslint-disable-next-line class-methods-use-this
  #addActicle(title, author) {
    const h2 = document.createElement('h2');
    h2.className = 'author';
    h2.textContent = `"${title}" by ${author}`;
    const btn = document.createElement('button');
    btn.className = 'remove';
    btn.textContent = 'Remove';
    const article = document.createElement('article');
    article.className = 'awesome-book';
    article.append(h2, btn);
    return article;
  }

  display() {
    const storeData = JSON.parse(localStorage.getItem(this.memAdrr)) || [];
    const fragment = document.createDocumentFragment();

    while (this.container.firstChild) {
      this.container.firstChild.remove();
    }
    storeData.forEach((obj) => {
      const article = this.#addActicle(obj.title, obj.author);
      fragment.appendChild(article);
    });
    this.container.appendChild(fragment);
  }

  delete(index) {
    const { children } = this.container;
    if (index < 0 || index >= children.length) return;

    children[index].remove();
    const storeData = JSON.parse(localStorage.getItem(this.memAdrr)) || [];

    if (Array.isArray(storeData)) {
      storeData.splice(index, 1);
      localStorage.setItem(this.memAdrr, JSON.stringify(storeData));
    }
  }
}

export default AwesomeBooks;
