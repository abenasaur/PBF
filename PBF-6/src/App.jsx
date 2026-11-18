import './App.css'
import axios from 'axios'
import React from 'react'

export default function App() { // Komponen utama App, diekspor sebagai default

  const [isLoading, setLoading] = React.useState(false); // isLoading = status sedang memuat data, awalnya false
  const [photos, setPhotos] = React.useState([]) // photos = daftar foto dari API, awalnya array kosong

  async function loadPhotos() { // Fungsi async untuk mengambil data foto dari API
    setLoading(true) // Menandai bahwa proses loading dimulai
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos') // Mengirim request GET ke API dan menunggu responsnya
    setPhotos(response.data); // Menyimpan data foto dari respons ke state
    setLoading(false) // Menandai bahwa proses loading selesai
  }

  React.useEffect(() => { // useEffect: menjalankan kode setelah komponen pertama kali tampil
    loadPhotos().then()
  }, [])

  if (isLoading) return <h3>Loading...</h3> // Jika sedang loading, tampilkan teks "Loading..." saja

  return (
    <main>
      <h2>Belajar React - API & Router</h2>
      <PhotoList photos={photos} />
    </main>
  )
}


function PhotoList({ photos }) { // Komponen PhotoList; menerima props photos lewat destructuring
  return (
    <div>
      <div className="row">

        {
          photos.map(photo => {
            return (
              <div className="column" key={photo.id}>
                <div className="card">
                  <h3>Photo {photo.id}</h3>
                  <img src={photo.thumbnailUrl} width="160px" />
                  <p>{photo.title.substring(0, 30)}</p>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}
