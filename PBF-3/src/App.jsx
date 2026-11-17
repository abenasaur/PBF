import './App.css' //mengimpor file css agar style di App.css berlaku pada komponen ini

export default function App() { //mendefinisikan komponen fungsi bernama App dna mengekspornya sebagai default

  const element = <h1>Hello, world</h1>; //membuat elemen JSX berupa judul <h1> dan menyimpan divariabel "element"

  return ( //mengembalikan JSX yang akan ditampilkan di halaman
    <main>
      <h2>Belajar menggunakan JSX pada React</h2>
      <header>
        <h1>Belajar menggunakan JSX pada React</h1>
        <p>Tutorial Reactjs untuk Pemula</p>
      </header>
    </main>
  )
}


