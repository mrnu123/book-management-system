const books = [];
const readme = () => {
  console.log("Please follow this instruction:");
};
const addBook = () => {
  let bookTitle = prompt("Enter the title of the book : ");
  alert(`You have entered ${bookTitle}`);
  let bookAuthor = prompt("Enter the author of the book :");
  alert(`The author of ${bookTitle} book is ${bookAuthor}`);
  let bookYear = prompt("Enter the year of the book :");
  alert(`The year of the book is ${bookYear}`);
  let bookPrice = prompt("Enter the price of the book (THB): ");
  alert(`The price of book is ${bookPrice} THB.`);

  const book = {
    id: books.length + 1,
    title: bookTitle,
    author: bookAuthor,
    year: bookYear,
    price: bookPrice,
  };
  books.push(book);
};

const viewBooks = () => {
  books.forEach((item) => {
    console.log(`
  id     : ${item.id}
  title  : ${item.title}
  author : ${item.author}
  year   : ${item.year}
  price  : ${item.price}
  `);
  });
};

const editBook = () => {
  const id = prompt("Enter the book's ID to edit : ");
  const book = books.find((item) => item.id == id);
  const bookTitle = prompt("Edit book's title :", book.title);
  if (bookTitle != book.title) {
    alert(`You change the book's title from ${book.title} to ${bookTitle}`);
  } else {
    alert(`You don't change the book's title`);
  }

  const bookAuthor = prompt("Edit book's author :", book.author);
  if (bookAuthor != book.author) {
    alert(`You change the book's author from ${book.author} to ${bookAuthor}`);
  } else {
    alert(`You don't change the book's author`);
  }

  const bookYear = prompt("Edit book's year :", book.year);
  if (bookYear != book.year) {
    alert(`You change the book's year from ${book.year} to ${bookYear}`);
  } else {
    alert(`You don't change the book's year`);
  }

  const bookPrice = prompt("Edit book's price :", book.price);
  if (bookPrice != book.price) {
    alert(`You change the book's price from ${book.price} to ${bookPrice}`);
  } else {
    alert(`You don't change the book's price`);
  }
  book.title = bookTitle;
  book.author = bookAuthor;
  book.year = bookYear;
  book.price = bookPrice;
};

const deleteBook = () => {
  const id = prompt("Enter the book's id :");
  const book = books.find((item) => item.id == id);

  if (!book) {
    alert(`Not have book ID : ${id}`);
    return;
  }

  const _confirm = prompt(
    `Are you sure to delete book id : ${id}\n(Enter Y to confirm)`
  );
  const isConfirm = _confirm.toUpperCase() === "Y";
  if (isConfirm) {
    const idx = books.findIndex((item) => item.id == id);
    books.splice(idx, 1);
    alert(`Book ID  ${book.id} is deleted.`);
  }
};
readme();
