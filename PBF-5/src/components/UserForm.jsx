import React from 'react'; // Mengimpor React dan hook useState
import useInput from '../hooks/useInput'; // Mengimpor custom hook useInput untuk mengelola nilai input

export default function UserForm() { // Komponen fungsi UserForm, diekspor sebagai default

  // useInput mengembalikan [nilai, props untuk input, fungsi reset]
  const [firstName, bindFirstName, resetFirstName] = useInput('Hendra'); // Nilai awal firstName adalah 'Hendra'
  const [lastName, bindLastName, resetLastName] = useInput('Permana') // Nilai awal lastName adalah 'Permana'
  const [title, setTitle] = React.useState('') // State untuk menyimpan teks sapaan, awalnya string kosong

  const submitHandler = e => { // Fungsi yang dijalankan saat form di-submit
    e.preventDefault(); // Mencegah browser me-refresh halaman saat submit

    setTitle(`Hello ${firstName} ${lastName}`)  // Mengisi title dengan sapaan dari nilai firstName dan lastName saat ini
    resetFirstName();
    resetLastName();
  }

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            {...bindFirstName}
            type='text' />
        </div>

        <div>
          <label>Last Name</label>
          <input
            {...bindLastName}
            type='text' />
        </div>

        <button>Submit</button>
      </form>
    </>
  )
}
