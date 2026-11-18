import './App.css' // Mengimpor file CSS untuk styling komponen
import React, { useState, useEffect } from 'react'; // Mengimpor React beserta hook useState dan useEffect
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'; // Mengimpor fungsi pembuat nama acak dan kamus kata dari library unique-names-generator


const customConfig = { // Objek konfigurasi untuk generator nama
  dictionaries: [adjectives, colors, animals], // Kata diambil berurutan dari kamus: kata sifat, warna, lalu hewan
  separator: ' ',
  length: 3,
};

export default function AppEffect() { // Komponen fungsi AppEffect, diekspor sebagai default

  const [randomName, setRandomName] = useState(); // randomName = nama saat ini, awalnya undefined karena tanpa nilai awal
  const [generateCount, setGenerateCount] = useState(0); // generateCount = jumlah nama yang sudah digenerate, awalnya 0

  useEffect(() => { // useEffect: menjalankan kode sebagai "efek samping" setelah render
    if (randomName) {
      setGenerateCount(generateCount + 1) // Menambah hitungan sebanyak 1
    }
  }, [randomName]) // Dependency array: efek hanya dijalankan ulang saat randomName berubah


  function generateRandomName() {  // Fungsi yang dijalankan saat tombol diklik
    const generatedName = uniqueNamesGenerator(customConfig);
    setRandomName(generatedName) // Menyimpan nama baru ke state; ini memicu render ulang dan efek di atas
  }

  return (
    <main>
      <h1>Belajar React Hook</h1>
      <p>Random Name Generator</p>
      {
        randomName && <h3>{randomName}</h3>
      }
      <button
        style={{ alignSelf: 'center' }}
        onClick={generateRandomName}
      >
        Generate Random Name
      </button>
      <p>Digenerate sebanyak {generateCount} kali</p>
    </main>
  )


}
