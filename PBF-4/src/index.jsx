import React from 'react' // Mengimpor library React agar bisa memakai React.StrictMode di bawah
import ReactDOM from 'react-dom/client' // Mengimpor ReactDOM versi client, yang berfungsi menampilkan (merender) komponen React ke browser
import App from './App' // Mengimpor komponen utama App dari file App.jsx (ekstensi .jsx tidak perlu ditulis)


// Mencari elemen HTML ber-id "root" (ada di index.html) sebagai tempat aplikasi ditampilkan,
// membuat root React pada elemen tersebut, lalu memanggil render() untuk menampilkan isinya
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
