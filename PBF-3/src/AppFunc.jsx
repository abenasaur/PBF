import './App.css' //mengimport file css agar style di App.css berlaku pada komponen-komponen di file ini

export default function AppFunc() { //mendefinisikan komponen fungsi bernama AppFunc dan mengekspornya sebagai default

  const element = <h1>Hello, world</h1>; //membuat elemen JSX berupa judul <h1> dan menyimpan di avariabel "element"

  return ( //mengembalikan JSX yang akan ditampilkan di halaman
    <main>
      <h2>Belajar menggunakan JSX pada React</h2>
      <Header />

    </main>
  )
}


function Header() { //mendefinisikan komponen fungsi Header 
  return ( //mengembalikan JSX untuk komponen Header
    <div>
      <h1>Tutorial Reactjs untuk Pemula</h1>
      <h2>Function Component</h2>
      <Message sender="dian" content="Hi, Apa kabar?" />
    </div>
  );
}

function Message(props) { //mendefinisikan komponen fungsi Massage yang menerima parameter "props"
  return ( //mengembalikan JSX untuk komponen Massage
    <div>
      <small>{props.sender}:</small>
      <p>{props.content}</p>
      <hr />
    </div>
  );

}
