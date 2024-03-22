const books = [];
const readme = () => {
  console.log(`Please follow this instruction:
  1. You can view all books using viewBooks()
  2. You can add a book using addBook()
  3. You can edit a book using editBook()
  4. You can delete a book using deleteBook()
  `);
  
};

const validateYear = (year) => {
  const _yearNow = new Date().getFullYear();
  if (year == "") return false;
  try {
    const _year = Number.parseInt(year);
    if (_year > _yearNow || _year < 1000) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};

const validateBookPrice = (price) => {
  const priceSplitDot = price.split(".");
  if (priceSplitDot.length > 2) {
    return false;
  }
  const price0 = priceSplitDot[0];

  const priceComma = price0.split(",");
  console.log(priceComma);
  let idx = 0;
  if (priceComma.length > 1) {
    for (const item of priceComma) {
      if (priceComma[0].length > 3) {
        return false;
      } else if (idx > 0 && item.length != 3) {
        return false;
      }
      idx += 1;
    }
  }

  const re = /^[0-9]{1,}.[0-9]{2,}$/;
  let _price = price.replaceAll(",", "");
  if (priceSplitDot.length == 1) {
    _price += ".00";
  }
  return _price.match(re) != null;
};

const addBook = () => {
  let bookTitle;
  let bookAuthor;
  let bookYear;
  let bookPrice;
  let _bookYearIsValid = false;
  let _bookPriceIsValid = false;
  do {
    bookTitle = prompt("Enter the title of the book : ");
    if (bookTitle == "") {
      alert("Title book is invalid.");
    } else {
      alert(`You have entered ${bookTitle}`);
    }
  } while (bookTitle == "");
  do {
    bookAuthor = prompt("Enter the author of the book :");
    if (bookAuthor == "") {
      alert("Author book is invalid");
    } else {
      alert(`The author of ${bookTitle} book is ${bookAuthor}`);
    }
  } while (bookAuthor == "");

  do {
    bookYear = prompt("Enter the year of the book (A.D.):");
    _bookYearIsValid = validateYear(bookYear);
    if (_bookYearIsValid) {
      alert(`The year of the book is ${bookYear}`);
    } else {
      alert("The year of the book is invalid.");
    }
  } while (!_bookYearIsValid);

  do {
    bookPrice = prompt("Enter the price of the book (THB): ");
    _bookPriceIsValid = validateBookPrice(bookPrice);
    if (_bookPriceIsValid) {
      alert(`The price of book is ${bookPrice} THB.`);
    } else {
      alert("The price of book is invalid.");
    }
  } while (!_bookPriceIsValid);

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
  id           : ${item.id}
  title        : ${item.title}
  author       : ${item.author}
  year         : ${item.year}
  price (THB)  : ${item.price}
  `);
  });
};

const editBook = () => {
  let bookTitle;
  let bookAuthor;
  let bookYear;
  let bookPrice;
  let _bookYearIsValid = false;
  let _bookPriceIsValid = false;
  const id = prompt("Enter the book's ID to edit : ");
  const book = books.find((item) => item.id == id);
  if (!book) {
    alert("The id is invalid.");
    return;
  }
  do {
    bookTitle = prompt("Edit book's title :", book.title);
    if (bookTitle == "") {
      alert("Title book is invalid.");
    } else if (bookTitle != book.title) {
      alert(`You change the book's title from ${book.title} to ${bookTitle}`);
    } else {
      alert(`You don't change the book's title`);
    }
  } while (bookTitle == "");

  do {
    bookAuthor = prompt("Edit book's author :", book.author);
    if (bookAuthor == "") {
      alert("Author book is invalid.");
    } else if (bookAuthor != book.author) {
      alert(
        `You change the book's author from ${book.author} to ${bookAuthor}`
      );
    } else {
      alert(`You don't change the book's author`);
    }
  } while (bookAuthor == "");
  do {
    bookYear = prompt("Edit book's year :", book.year);
    _bookYearIsValid = validateYear(bookYear);
    if (bookYear != book.year && _bookYearIsValid) {
      alert(`You change the book's year from ${book.year} to ${bookYear}`);
    } else if (!_bookYearIsValid) {
      alert("Book's year is invalid.");
    } else {
      alert(`You don't change the book's year`);
    }
  } while (!_bookYearIsValid);

  do {
    bookPrice = prompt("Edit book's price :", book.price);
    _bookPriceIsValid = validateBookPrice(bookPrice);
    if (bookPrice != book.price && _bookPriceIsValid) {
      alert(`You change the book's price from ${book.price} to ${bookPrice}`);
    } else if (!_bookPriceIsValid) {
      alert("Book's price is invalid.");
    } else {
      alert(`You don't change the book's price`);
    }
  } while (!_bookPriceIsValid);
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
