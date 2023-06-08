const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    subject: "Classic Literature",
    publishDate: "1925",
    image: "assets/thegreatgatsby.jpeg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    subject: "Fiction",
    publishDate: "1960",
    image: "assets/tokillamockingbird.jpeg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    subject: "Classic Literature",
    publishDate: "1813",
    image: "assets/prideandprejudice.jpeg",
  },
  {
    title: "1984",
    author: "George Orwell",
    subject: "Dystopian Fiction",
    publishDate: "1949",
    image: "assets/1984.png",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    subject: "Fiction",
    publishDate: "1951",
    image: "assets/thecatcherintherye.jpeg",
  },
  {
    title: "The Princess Diaries",
    author: "Meg Cabot",
    subject: "Young Adult, Romance",
    publishDate: "2000",
    image: "assets/princessdiaries.jpeg",
  },
  {
    title: "Ella Enchanted",
    author: "Gail Carson Levine",
    subject: "Children's Fantasy",
    publishDate: "1997",
    image: "assets/ellaenchanted.jpeg",
  },
  {
    title: "The Paper Bag Princess",
    author: "Robert Munsch",
    subject: "Children's Fiction",
    publishDate: "1980",
    image: "assets/thepaperbagprincess.jpeg",
  },
  {
    title: "The Princess and the Pea",
    author: "Hans Christian Andersen",
    subject: "Children's Fairy Tale",
    publishDate: "1835",
    image: "assets/theprincessandpea.jpeg",
  },
  {
    title: "Wonder Woman: Warbringer",
    author: "Leigh Bardugo",
    subject: "Young Adult, Fantasy",
    publishDate: "2017",
    image: "assets/WonderWomen.jpeg",
  },
  {
    title: "Batman: Year One",
    author: "Frank Miller",
    subject: "Comic, Superhero",
    publishDate: "1987",
    image: "assets/batman.jpeg",
  },
  {
    title: "Spider-Man: Miles Morales Vol. 1",
    author: "Saladin Ahmed",
    subject: "Comic, Superhero",
    publishDate: "2019",
    image: "assets/spiderman.jpeg",
  },
  {
    title: "The Incredibles: Family Matters",
    author: "Mark Waid",
    subject: "Comic, Superhero",
    publishDate: "2005",
    image: "assets/incredibles.jpeg",
  },
  {
    title: "It",
    author: "Stephen King",
    subject: "Horror",
    publishDate: "1986",
    image: "assets/IT.jpeg",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    subject: "Horror",
    publishDate: "1977",
    image: "assets/theshinning.jpeg",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    subject: "Horror",
    publishDate: "1897",
    image: "assets/dracula.jpeg",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    subject: "Horror",
    publishDate: "1818",
    image: "assets/frankenstien.jpeg",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    subject: "Fantasy",
    publishDate: "1997",
    image: "assets/harrypotterandphilosopherstone.jpeg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    subject: "Fantasy",
    publishDate: "1937",
    image: "assets/thehobbit.jpeg",
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    subject: "Fantasy",
    publishDate: "1996",
    image: "assets/GOT.jpeg",
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    subject: "Fantasy",
    publishDate: "1950",
    image: "assets/Narnia.jpeg",
  },
  {
    title: "Spider-Man: Homecoming",
    author: "Marvel Press",
    subject: "Marvel",
    publishDate: "2017",
    image: "assets/homecoming.jpeg",
  },
  {
    title: "Black Panther: A Nation Under Our Feet",
    author: "Ta-Nehisi Coates",
    subject: "Marvel",
    publishDate: "2016",
    image: "assets/panther.jpeg",
  },
  {
    title: "Captain America: Winter Soldier",
    author: "Ed Brubaker",
    subject: "Marvel",
    publishDate: "2005",
    image: "assets/captain.jpeg",
  },
  {
    title: "Thor: God of Thunder",
    author: "Jason Aaron",
    subject: "Marvel",
    publishDate: "2012",
    image: "assets/thor.jpeg",
  },
];

const itemsPerPage = 10;
let currentPage = 1;
let filteredBooks = [];
let savedBooks = [];

function renderBookList() {
  const bookContainer = document.getElementById("bookContainer");
  bookContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const booksToShow = filteredBooks.slice(startIndex, endIndex);

  booksToShow.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    const imgElement = document.createElement("img");
    imgElement.src = book.image;
    bookElement.appendChild(imgElement);

    const titleElement = document.createElement("h3");
    titleElement.textContent = book.title;
    bookElement.appendChild(titleElement);

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;
    bookElement.appendChild(authorElement);

    const subjectElement = document.createElement("p");
    subjectElement.textContent = `Subject: ${book.subject}`;
    bookElement.appendChild(subjectElement);

    const publishDateElement = document.createElement("p");
    publishDateElement.textContent = `Publish Date: ${book.publishDate}`;
    bookElement.appendChild(publishDateElement);

    // Add click event listener to move the book to the user profile
    bookElement.addEventListener("click", () => {
      addBookToUserProfile(book);
    });

    bookContainer.appendChild(bookElement);
  });

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = endIndex >= filteredBooks.length;
}

function addBookToUserProfile(book) {
  if (savedBooks.length < 5) {
    savedBooks.push(book);
    updateSavedBookList();
    updateBookCount();
  } else {
    alert("You have reached the maximum limit of saved books.");
  }
}

function updateSavedBookList() {
  const savedBooksContainer = document.getElementById("savedBooks");
  savedBooksContainer.innerHTML = "";

  savedBooks.forEach((book) => {
    const savedBookElement = document.createElement("div");
    savedBookElement.classList.add("book");

    const imgElement = document.createElement("img");
    imgElement.src = book.image;
    savedBookElement.appendChild(imgElement);

    const titleElement = document.createElement("h3");
    titleElement.textContent = book.title;
    savedBookElement.appendChild(titleElement);

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;
    savedBookElement.appendChild(authorElement);

    const subjectElement = document.createElement("p");
    subjectElement.textContent = `Subject: ${book.subject}`;
    savedBookElement.appendChild(subjectElement);

    const publishDateElement = document.createElement("p");
    publishDateElement.textContent = `Publish Date: ${book.publishDate}`;
    savedBookElement.appendChild(publishDateElement);

    savedBooksContainer.appendChild(savedBookElement);
  });
}

function updateBookList() {
  const titleFilter = document
    .getElementById("titleFilter")
    .value.trim()
    .toLowerCase();
  const authorFilter = document
    .getElementById("authorFilter")
    .value.trim()
    .toLowerCase();
  const subjectFilter = document
    .getElementById("subjectFilter")
    .value.trim()
    .toLowerCase();
  const publishDateFilter = document
    .getElementById("publishDateFilter")
    .value.trim()
    .toLowerCase();

  filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(titleFilter) &&
      book.author.toLowerCase().includes(authorFilter) &&
      book.subject.toLowerCase().includes(subjectFilter) &&
      book.publishDate.toLowerCase().includes(publishDateFilter)
  );

  currentPage = 1;
  renderBookList();
}

function updateBookCount() {
  const titleFilter = document
    .getElementById("titleFilter")
    .value.trim()
    .toLowerCase();
  const authorFilter = document
    .getElementById("authorFilter")
    .value.trim()
    .toLowerCase();
  const subjectFilter = document
    .getElementById("subjectFilter")
    .value.trim()
    .toLowerCase();
  const publishDateFilter = document
    .getElementById("publishDateFilter")
    .value.trim()
    .toLowerCase();

  if (titleFilter || authorFilter || subjectFilter || publishDateFilter) {
    filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(titleFilter) &&
        book.author.toLowerCase().includes(authorFilter) &&
        book.subject.toLowerCase().includes(subjectFilter) &&
        book.publishDate.toLowerCase().includes(publishDateFilter)
    );
  } else {
    filteredBooks = books;
  }
  const bookCount = document.getElementById("bookCount");
  bookCount.innerHTML = `Available Books: ${filteredBooks.length}`;
}

function onPageChange(direction) {
  if (direction === "prev" && currentPage > 1) {
    currentPage--;
  } else if (
    direction === "next" &&
    currentPage < Math.ceil(filteredBooks.length / itemsPerPage)
  ) {
    currentPage++;
  }

  renderBookList();
}

document
  .getElementById("prevBtn")
  .addEventListener("click", () => onPageChange("prev"));
document
  .getElementById("nextBtn")
  .addEventListener("click", () => onPageChange("next"));

document.getElementById("titleFilter").addEventListener("input", () => {
  updateBookList();
  updateBookCount();
});
document.getElementById("authorFilter").addEventListener("input", () => {
  updateBookList();
  updateBookCount();
});
document.getElementById("subjectFilter").addEventListener("input", () => {
  updateBookList();
  updateBookCount();
});
document.getElementById("publishDateFilter").addEventListener("input", () => {
  updateBookList();
  updateBookCount();
});

updateBookCount();
renderBookList();
