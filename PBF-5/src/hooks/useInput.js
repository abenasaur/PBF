import { useState } from 'react'; // Mengimpor hook useState dari React untuk menyimpan state

export default function useInput(initialValue) { // Custom hook yang diekspor sebagai default; menerima nilai awal input

  // value = nilai input saat ini, setValue = fungsi untuk mengubahnya
  const [value, setValue] = useState(initialValue); // State diinisialisasi dengan initialValue

  const reset = () => { // Fungsi untuk mengembalikan input ke nilai awal
    setValue(initialValue); // Mengatur ulang state ke initialValue (bukan string kosong)
  }

  const bind = { // Objek yang nanti di-spread ke elemen <input> lewat {...bind}
    value,
    onChange: e => {
      setValue(e.target.value) // Memperbarui state dengan teks terbaru dari input (e.target.value)
    }
  };

  // Mengembalikan array: [nilai saat ini, props untuk input, fungsi reset]
  return [value, bind, reset];
}
