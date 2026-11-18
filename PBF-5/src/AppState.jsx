import './App.css' // Mengimpor file CSS untuk styling komponen
import React, { useState } from 'react'; // Mengimpor React dan hook useState
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'; // Mengimpor fungsi pembuat nama acak dan kamus kata dari library unique-names-generator


const customConfig = { // Objek konfigurasi untuk generator nama
  dictionaries: [adjectives, colors, animals], // Kata diambil berurutan dari kamus: kata sifat, warna, lalu hewan
  separator: ' ', // Kata diambil berurutan dari kamus: kata sifat, warna, lalu hewan
  length: 3, // Jumlah kata dalam nama (sesuai jumlah kamus)
};

export default function AppState() { // Komponen fungsi AppState, diekspor sebagai default

  const [randomName, setRandomName] = useState(); // randomName = nama saat ini, setRandomName = fungsi untuk mengubahnya


  function generateRandomName() { // Fungsi yang dijalankan saat tombol diklik
    const generatedName = uniqueNamesGenerator(customConfig); // Membuat nama acak berdasarkan customConfig
    setRandomName(generatedName) // Menyimpan nama baru ke state, sehingga komponen dirender ulang
  }

  return ( 
    <main>
      <h1>Belajar React Hook</h1>
      <p>Random Name Generator</p>
      {
        randomName && <h3>{randomName}</h3>
      }
      {/* Tombol untuk membuat nama acak baru */}
      <button 
        style={{ alignSelf: 'center' }}
        onClick={generateRandomName}
      >
        Generate Random Name
      </button>
    </main>
  )


}
