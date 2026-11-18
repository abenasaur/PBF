import { useState } from 'react'; // Mengimpor hook useState dari React untuk menyimpan state

export default initialValue => { // Custom hook anonim yang diekspor sebagai default; menerima daftar todo awal
  const [todos, setTodos] = useState(initialValue); // todos = daftar todo saat ini, setTodos = fungsi untuk mengubahnya

  return { // Mengembalikan objek berisi data dan fungsi untuk mengelola todo
    todos,
    addTodo: todoText => { // Fungsi menambah todo baru; menerima teks todo
      setTodos([...todos, todoText]); // Membuat array baru: semua todo lama + todo baru di akhir
    },
    deleteTodo: todoIndex => { // Fungsi menghapus todo; menerima index todo yang ingin dihapus
      const newTodos = todos.filter((_, index) => index !== todoIndex); // filter menyimpan semua item kecuali yang index-nya sama dengan todoIndex

      setTodos(newTodos); // Menyimpan array hasil filter sebagai state baru
    }
  };
};
