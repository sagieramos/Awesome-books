const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 2023 00:00:00 UTC; path=/; domain=https://sagieramos.github.io/Awesome-books/;`;
};

export default deleteCookie;