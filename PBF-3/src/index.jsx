import React from 'react' //mengimpor library React agar bisa memakai react.StrictMode di bawah
import ReactDOM from 'react-dom/client' //mengimpor ReactDOM versi client, yang berfungsi menampilkan komponen React ke browser
import App from './App' //mengimpor komponen App dari file App.jsx
import AppFunc from './AppFunc' //mengimpor komponen Appfunc
import AppClass from './AppClass' //mengimpor komponen AppClass


//mencari element HTML ber-id "root" sebagai tempat aplikasi ditampilkan
//membuat root React pada element tersebut lalu memanggil render() untuk menampilkan 
ReactDOM.createRoot(document.getElementById('root')).render(
//pembungkus untuk mode pengembangan untuk membantu menemukan masalah/peringatan di kode, dan tidak menampilkan apa pun di halaman
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>
)
