import Storage from "./Storage.js";

export default class Books {
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
          document.querySelector("#bookNotDone").appendChild(target);
          target.querySelector(".status").textContent = "Selesai Dibaca";
        } else {
          book.selesai = true;
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

export class Book {
  constructor(judul, penulis, tahun, selesai) {
    this.id = Math.random().toString(16).slice(2);
    this.judul = judul;
    this.penulis = penulis;
    this.tahun = tahun;
    this.selesai = selesai;
  }
}
