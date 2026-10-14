// destructuring
const book = { // membuat objek bernama book yang berisi informasi buku
  "title": "Manusia Setengah Salmon", 
  "author": "Raditya Dika",
  "publisher": {
    "name": "Gagas Media",
    "address": "Jakarta Selatan"
  }
}

const {title: bookTitle, author = "RD", publisher:{name, address}} = book; // mengambil data dari objek book, mengganti nama title menjadi bookTitle, memberi nilai default author "RD" jika tidak tersedia, serta mengambil name dan address dari objek publisher

console.log(bookTitle, author, name, address); // menampilkan judul buku, author, name, address pada console
