import './App.css'

//mengimpor fungsi dan kamus kata dari library "unique-names-generator" untuk membuat nama car (gabungan kata sifat + warna + hewan)
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

export default function App() { //komponen utama App, diekspor sebagai default agar bisa diimpor di index.jsx
  return (
    <main>
      <h3>Belajar React</h3>
      {/*<EventExample />*/}
      {/*<GenerateRandomName />*/}
      {/*<ConditionalExample isLoading={false} />*/}
      {<ListKeyExample />}

    </main>
  )
}


function ListKeyExample() { //kokmponen yang menampilkan daftar produk dari sebuah array
  const phoneData = [ //array berisi objek data ponsel taip objek punya nama, price, discount
    { name: "iPhone X", price: 10000000, discount: 50 },
    { name: "Oppo Find X", price: 14000000, discount: 30 },
    { name: "Redmi Note X", price: 5000000, discount: 42 },
    { name: "Vivo XYZ", price: 10000000, discount: 0 },
  ];

  return (
    <div>
      {
        //map() mengulang setiap element array dan mengubah menjadi komponen <Product>
        //parameter "data mewakili satu objek onsel pada tiap putaran
        phoneData.map(data => {
          return (
            <Product
              //key wajib unik pada tiap item list agar React bisa melacak perubahan
              key={data.name}
              name={data.name}
              price={data.price}
              discount={data.discount}
            />
          )
        })
      }
    </div>
  )

}

//komponen untuk menampilkan satu produk
//props langusng diambil lewat destructing: { name, price, disount }
//"dicount = 0" artinya nilai bawaan 0 jika props discount tidak dikirim
function Product({ name, price, discount = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      {discount > 0 && <p><s>Rp {price}</s> ({discount}%)</p>}
      <p>
        <b>
          {/* Menghitung harga setelah diskon: harga - (harga x diskon/100).
              parseInt memastikan nilainya dibaca sebagai angka bulat */}
          Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
        </b>
      </p>
      <hr />
    </div>
  );
}


// Komponen contoh rendering kondisional: menampilkan tampilan berbeda sesuai props isLoading
function ConditionalExample(props) {
  if (props.isLoading) { // Jika props.isLoading bernilai true
    return <LoadingView /> // Tampilkan komponen LoadingView
  } else {
    return <LoggedView /> // Tampilkan komponen LoggedView
  }
}


function LoadingView() { // Komponen yang ditampilkan saat kondisi sedang memuat
  return (
    <h2>Loading...</h2>
  )
}

function LoggedView() { // Komponen yang ditampilkan saat pengguna sudah masuk (login)
  // Membuat nama acak dengan menggabungkan satu kata dari kamus adjectives, colors, dan animals
  const random = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
  return <h2>Welcome {random}</h2> // Menampilkan sapaan beserta nama acak tersebut
}


function GenerateRandomName() { // Komponen berisi tombol yang menghasilkan nama acak saat diklik
  let randomName // Deklarasi variabel untuk menyimpan nama acak (belum diberi nilai)

  function createRandomName() { // Fungsi yang dijalankan saat tombol diklik
    // Membuat nama acak baru dan menyimpannya ke variabel randomName
    randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); 
    alert(`Random Name: ${randomName}`)  // Menampilkan nama acak dalam kotak peringatan (alert) browser
  }

  return ( // Mengembalikan JSX berisi tombol
    // onClick menghubungkan klik tombol dengan fungsi createRandomName
    <button onClick={createRandomName}>Generate Random Name</button> 
  )
}


function EventExample() { // Komponen contoh menangani event (input teks dan klik tombol)

  let email = "" // Variabel untuk menyimpan teks email yang diketik pengguna, awalnya string kosong

  function handleClick() { // Fungsi yang dijalankan saat tombol diklik
    alert('Email: ' + email) // Menampilkan email yang tersimpan dalam kotak alert
  }


  function handleChange(event) { // Fungsi yang dijalankan setiap kali isi input berubah; menerima objek event
    email = event.target.value; // event.target.value berisi teks terbaru di input, lalu disimpan ke variabel email
  }


  return ( // Mengembalikan JSX untuk tampilan komponen
    <div>
      <h4>Menangani Event</h4>
      <input onChange={(event) => {
        handleChange(event) // Meneruskan objek event ke fungsi handleChange
      }} type="email" />
      <button onClick={() => {
        handleClick() // Memanggil fungsi handleClick
      }}>Tampilkan Email</button>
    </div>
  )
}
