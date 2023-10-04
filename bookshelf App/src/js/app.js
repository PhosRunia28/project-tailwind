import Books from "./Book.js";
import { Book } from "./Book.js";

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
