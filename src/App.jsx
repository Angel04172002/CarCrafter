import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import AddCar from './components/car-add/CarAdd';
import Header from './components/header/Header';

function App() {


  return (
    <>

      <Header />

      <main>

        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/add-car' element={<AddCar />}></Route>

        </Routes>

      </main>

    </>
  )
}

export default App
