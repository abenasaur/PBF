class Holiday {
  constructor(destination, days) { // membuat constructor untuk menerima tujuan dan lama hari liburan
    this.destination = destination; // menyimpan tujuan liburan ke dalam properti destination
    this.days = days; // menyimpan lama libuan ke dalam properti days
  }
  info() { // membuat method bernama info untuk menampilkan informasi liburan
    alert(this.destination + " will take " + this.days + " days."); // menampilkan tujuan dan lama liburan dalam kotak pesan
  }
}

var trip = new Holiday("Semeru", 10); // membuat objek trip class Holiday dengan tujuan Semeru selama 10 hari
trip.info(); // memanggil method info untuk menampilkan informasi liburan dalam kotak pesan
