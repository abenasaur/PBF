import React from "react";
import { // Mengimpor komponen routing dari react-router-dom
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function AppRouter() { // Komponen utama aplikasi dengan routing, diekspor sebagai default
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/berita">Berita</Link>
            </li>
            <li>
              <Link to="/tentang">Tentang</Link>
            </li>
            {<li>
              <Link to="/profile">Profile</Link>
            </li>}
          </ul>
        </nav>
        <Routes>
          <Route path="/berita" element={<Berita />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/" element={<Beranda />} />
          {<Route path="/profile/*" element={<Profile />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


function Beranda() { // Halaman Beranda
  return <h2>Beranda</h2>;
}

function Berita() { // Halaman Berita
  return <h2>Berita</h2>;
}

function Tentang() { // Halaman Tentang
  return (
    <div>
      <h2>Tentang</h2>
      <h3>NIM: isi NIM Anda</h3>
      <h3>Nama: isi Nama Anda</h3>
    </div>
  );
}

function Profile() { // Halaman Profile dengan navigasi dan route turunan sendiri
  return (
    <div>
      <nav>
        <Link to="cv">CV</Link>
        <br />
        <Link to="contact">Contacts</Link>
      </nav>

      <Routes>
        <Route path="cv" element={<CV />} />
        <Route path="cantact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function CV() { // Sub-halaman CV
  return (
    <div>
      <h3>Nama Lengkap: isi Nama Anda</h3>
      <h3>Tanggal Lahir: Tanggal Lahir Anda</h3>
      <h3>Pendidikan Terakhir: Pendidikan Terakhir Anda</h3>
    </div>
  )
}

function Contact() { // Sub-halaman Contact
  return (
    <div>
      <h3>Email: email anda</h3>
      <h3>Twitter: Twitter Anda</h3>
      <h3>Instagram: Instagram Anda</h3>
    </div>
  )
}
