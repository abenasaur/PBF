import React from 'react'
import ReactDOM from 'react-dom/client'
import AppState from './AppState'
import AppEffect from './AppEffect'
import AppCustomHook from './AppCustomHook'

// Mencari elemen <div id="root"> di index.html sebagai tempat aplikasi dipasang
ReactDOM.createRoot(document.getElementById('root')).render( 
  // StrictMode: mode pengembangan yang membantu mendeteksi masalah di komponen
  <React.StrictMode>
    <AppCustomHook /> {/* Komponen yang saat ini ditampilkan di browser */}
  </React.StrictMode>
)
