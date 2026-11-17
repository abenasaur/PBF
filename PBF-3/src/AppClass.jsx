import './App.css' //import file CSS agar style di App.css berlaku pada komponen-komponen difile ini 
import React from 'react'; //import library React agar bisa memakai React.Component (komponen berbasis class)

//medefinisikan komponen class bernama AppClass yang mewarisi (extends) React.Component
//lalu mengeksportnya sebagai default agar bisa diimpor di file lain
export default class AppClass extends React.Component {

  render() { //method render () wajib ada di komponen class; isinya menentukan apa yang ditampilkan
    return ( //mengembalikan JSX yang akan dirender ke halaman
      <main>
        <h2>Belajar menggunakan JSX pada React</h2>
        <Header />

      </main>
    )
  }
}

//mendefinisikan komponen class header (tanpa export, jadi hanya dipakai di file ini)
class Header extends React.Component {
  render() { //method render() menentukan tampilan komponen Header
    return ( //mengembalikan JSX untuk komponen Header
      <div>
        <h1>Tutorial Reactjs untuk Pemula</h1>
        <h2>Panduan step-by-step belajar Reactjs</h2>
        <p>Membuat komponen dengan class</p>
        <Message sender="dian" content="Hi, Apa kabar?" />
      </div>
    );
  }
}

//mendefinisikan komponen class Massage yang menampilkan sebuah pesan
class Message extends React.Component {
  render() { //method render() menentukan tampilan komponen Massage
    return ( //mengembalikan JSX untuk komponen Massage
      <div>
         {/* menampilkan nama pengirim dengan teks keci. this.props.sender mengambil nilai props "sender" dari komponen induk, lalu diikuti tanda titik dua */}
        <small>{this.props.sender}:</small>
        {/* menampiskan isi pesan dari props "content" dalam sebuah paragraf */}
        <p>{this.props.content}</p> 
        <hr />
      </div>
    );
  }
}
