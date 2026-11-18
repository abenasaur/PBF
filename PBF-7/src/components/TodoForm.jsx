import React from 'react';
import TextField from '@mui/material/TextField'; // Mengimpor komponen TextField dari Material UI (input teks siap pakai dengan styling)
import useInputState from '../hooks/useInputState'; // Mengimpor custom hook useInputState (versi objek { value, onChange, reset })

const TodoForm = ({ saveTodo }) => { // Komponen form; menerima props saveTodo (fungsi dari komponen induk) lewat destructuring
  const { value, reset, onChange } = useInputState(); // Mengambil value, reset, dan onChange dari hook; nilai awal input adalah ''

  return (
    <form
      onSubmit={event => { // Fungsi yang dijalankan saat form di-submit
        event.preventDefault(); // Mencegah browser me-refresh halaman saat submit

        saveTodo(value); // Memanggil fungsi dari induk untuk menyimpan teks todo yang diketik
        reset(); // Mengosongkan input setelah todo disimpan
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm; // Mengekspor komponen sebagai default agar bisa diimpor di file lain
