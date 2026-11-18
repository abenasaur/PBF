import './App.css' // Mengimpor file CSS untuk styling komponen
import UserForm from './components/UserForm' // Mengimpor komponen UserForm yang sudah kamu buat sebelumnya

export default function AppCustomHook() { // Komponen fungsi AppCustomHook, diekspor sebagai default

  return (
    <main>
      <h1>Belajar React Custom Hook</h1>

      <UserForm />
    </main>
  )


}
