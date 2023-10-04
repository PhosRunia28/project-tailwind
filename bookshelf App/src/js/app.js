class Books {
  constructor() {
    this._books = Storage.getBooks();
  }

  addBook(book) {
    this._books.push(book);
    Storage.saveBook(book);
    this._displayBook(book);
  }

  removeBook(id) {
    const index = this._books.findIndex((book) => book.id == id);
    if (index !== -1) {
      this._books.splice(index, 1);
      Storage.removeBook(id);
    }
  }

  loadBook() {
    this._books.forEach((book) => this._displayBook(book));
  }

  reset() {
    this._books = [];
    Storage.clearAll();
  }

  changeStatus(id, target) {
    this._books.forEach((book) => {
      if (book.id == id) {
        if (book.selesai) {
          book.selesai = false;
          localStorage.setItem("books", JSON.stringify(this._books));
          document.querySelector("#bookNotDone").appendChild(target);
          target.querySelector(".status").textContent = "Selesai Dibaca";
        } else {
          book.selesai = true;
          localStorage.setItem("books", JSON.stringify(this._books));
          document.querySelector("#bookDone").appendChild(target);
          target.querySelector(".status").textContent = "Baca Lagi";
        }
      }
    });
  }

  _displayBook(book) {
    var newDiv = document.createElement("div");
    newDiv.className = "rounded-md border border-black px-4 py-2 card";
    newDiv.setAttribute("id", book.id);

    if (!book.selesai) {
      newDiv.innerHTML = `<h4 class="mb-2 text-3xl font-bold">${book.judul}</h4>
      <p class="">Penulis : ${book.penulis}</p>
      <p class="">Tahun : ${book.tahun}</p>
      <div
        class="my-2 block rounded bg-green-400 px-4 py-2 text-xs text-black cursor-pointer status"
      >
        Selesai Dibaca
      </div>
      <div
        class="my-2 block rounded bg-red-400 px-4 py-2 text-xs text-black delete cursor-pointer"
      >
        Hapus Buku
      </div>`;
      document.querySelector("#bookNotDone").appendChild(newDiv);
    } else {
      newDiv.innerHTML = `<h4 class="mb-2 text-3xl font-bold">${book.judul}</h4>
      <p class="">Penulis : ${book.penulis}</p>
      <p class="">Tahun : ${book.tahun}</p>
      <div
        class="my-2 block rounded bg-green-400 px-4 py-2 text-xs text-black cursor-pointer status"
      >
        Baca Lagi
      </div>
      <div
        class="my-2 cursor-pointer block rounded bg-red-400 px-4 py-2 text-xs text-black delete"
      >
        Hapus Buku
      </div>`;
      document.querySelector("#bookDone").appendChild(newDiv);
    }
  }
}

class Book {
  constructor(judul, penulis, tahun, selesai) {
    this.id = Math.random().toString(16).slice(2);
    this.judul = judul;
    this.penulis = penulis;
    this.tahun = parseInt(tahun);
    this.selesai = selesai;
  }
}

class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static saveBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  // static loadStatus() {
  //   const books = Storage.getBooks();
  //   localStorage.setItem("books", JSON.stringify(books));
  // }

  static removeBook(id) {
    const books = Storage.getBooks();
    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }

  static clearAll() {
    localStorage.clear();
  }
}

class App {
  constructor() {
    this._bookList = new Books();
    document
      .querySelector("#inputUser")
      .addEventListener("submit", this._newBook.bind(this));

    document.querySelectorAll(".book").forEach((book) => {
      book.addEventListener("click", this._actionBook.bind(this));
    });

    document
      .querySelector("#search")
      .addEventListener("keyup", this._searchBook.bind(this));

    document
      .querySelector("#reset")
      .addEventListener("click", this._resetBook.bind(this));

    this._bookList.loadBook();
  }

  _newBook(e) {
    e.preventDefault();

    const judul = document.querySelector("#judul");
    const penulis = document.querySelector("#penulis");
    const tahun = document.querySelector("#tahun");
    const selesai = document.querySelector("#selesai");

    if (judul.value === "" || penulis.value === "" || tahun.value === "") {
      this._displayMessage("Input Kosong Masukkan input", "red");
      return;
    }

    const book = new Book(
      judul.value,
      penulis.value,
      tahun.value,
      selesai.checked
    );
    this._bookList.addBook(book);

    judul.value = "";
    penulis.value = "";
    tahun.value = "";
    selesai.checked = false;
    this._displayMessage("Input Berhasil Disimpan", "green");
  }

  _actionBook(e) {
    // Delete Book
    if (e.target.classList.contains("delete")) {
      if (confirm("ingin dihapus ? ")) {
        const id = e.target.closest(".card").getAttribute("id");
        this._bookList.removeBook(id);
        e.target.closest(".card").remove();
      }
    }

    // Change Status
    if (e.target.classList.contains("status")) {
      if (confirm("ingin diubah ? ")) {
        const id = e.target.closest(".card").getAttribute("id");
        this._bookList.changeStatus(id, e.target.closest(".card"));
      }
    }
  }

  _searchBook(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach((book) => {
      const judul = book.firstElementChild.textContent;
      if (judul.toLowerCase().indexOf(text) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
    console.log(text);
  }

  _resetBook(e) {
    if (confirm("ingin hapus semua ? ")) {
      this._bookList.reset();
      document.querySelector("#bookDone").innerHTML = "";
      document.querySelector("#bookNotDone").innerHTML = "";
    }
  }

  _displayMessage(message, color) {
    const divBaru = document.createElement("div");
    divBaru.style.backgroundColor = color;
    divBaru.className =
      "fixed right-36 top-8 z-10 px-4 py-2 text-white md:right-14 lg:right-20 lg:top-28";
    divBaru.innerHTML = `<h3 class="">${message}</h3>`;

    document.body.appendChild(divBaru);
    setTimeout(() => {
      divBaru.remove();
    }, 1000);
  }
}

const app = new App();
