class AwesomeBooks {
    constructor(memAdrr) {
      this.memAdrr = memAdrr;
    }
  
    store(BookTitle, booKAuthor) {
        let storeData = JSON.parse(localStorage.getItem(this.memAdrr)) || [];
        let book = { title: BookTitle, author: booKAuthor };
        storeData.push(book);
        localStorage.setItem(this.memAdrr, JSON.stringify(storeData));
      }
      

      display(container) {
        let storeData = JSON.parse(localStorage.getItem(this.memAdrr)) || [];
        const fragment = document.createDocumentFragment();
        
        storeData.forEach(obj => {
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
          article.append(title, author, btn);
          fragment.appendChild(article);
        });
      
        container.appendChild(fragment);
      }    
      
      delete(index) {
        let storeData = JSON.parse(localStorage.getItem(this.memAdrr));
    
        if (!Array.isArray(storeData)) {
          /* console.error(`Data with key "${this.memAdrr}" is not an array.`); */
          return;
        }
    
        if (index < 0 || index >= storeData.length) {
          /* console.error(`Index ${index} is out of range.`); */
          return;
        }
    
        storeData.splice(index, 1);
        localStorage.setItem(this.memAdrr, JSON.stringify(storeData));
      }
  }
  

export { AwesomeBooks };