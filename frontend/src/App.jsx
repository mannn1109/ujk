import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DataSiswa from './components/DataSiswa'
import TambahSiswa from './components/TambahSiswa'
import EditSiswa from './components/EditSiswa'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataSiswa/>}/>
        <Route path='/add' element={<TambahSiswa/>}/>
        <Route path='/edit/:id' element={<EditSiswa/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
