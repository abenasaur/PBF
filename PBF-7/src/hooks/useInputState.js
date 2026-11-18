import { useState } from 'react'; // Mengimpor hook useState dari React untuk menyimpan state

export default () => { // Custom hook anonim yang diekspor sebagai default (tanpa nama fungsi)
  const [value, setValue] = useState(''); // value = nilai input saat ini, setValue = fungsi untuk mengubahnya

  return {  // Mengembalikan sebuah objek (bukan array seperti useInput sebelumnya)
    value, // Nilai input saat ini, menjadikan input sebagai controlled component
    onChange: event => { // Dipanggil setiap kali pengguna mengetik di input
      setValue(event.target.value); // Memperbarui state dengan teks terbaru dari input
    },
    reset: () => setValue('') // Fungsi untuk mengosongkan input kembali ke string kosong
  };
};
