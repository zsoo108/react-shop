import { createContext, useState } from 'react'
import './App.css'
import data from './db/data'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import About from './components/About';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';

export const Context1 = createContext();

function App() {
  // const user = useSelector(state => state.user);
  // console.log(user);
  const [shoes, setShoes] = useState(data);
  const [remain, setRemain] = useState([10,11,12]);
  // console.log(shoes[0].imgUrl);

  const navigate = useNavigate();

  
  return (
    <div className="App">
      <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a onClick={()=>{navigate('/')}} className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors">
            ShoesShop
          </a>
          <div className="flex space-x-6 ml-6 mr-auto">
            <a onClick={()=>{navigate('/')}} className="text-gray-300 hover:text-white transition-colors font-medium">
              Home
            </a>
            <a onClick={()=>{navigate('/detail/0')}} className="text-gray-300 hover:text-white transition-colors font-medium">
              Detail
            </a>
            <a onClick={()=>{navigate('/cart')}} className="text-gray-300 hover:text-white transition-colors font-medium">
              Cart
            </a>
            <a onClick={()=>{navigate('/about')}} className="text-gray-300 hover:text-white transition-colors font-medium">
              About
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home shoes={shoes} setShoes={setShoes} />}></Route>
        <Route path='/detail/:id' element={
          <Context1.Provider value={{remain, shoes}}>
            <Detail shoes={shoes} />
          </Context1.Provider>
          } />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>Member 입니다.</div>} />
          <Route path='location' element={<div>Location 입니다.</div>} />
        </Route>        
        <Route path='*' element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes> 

      <Footer />    

    </div>
  )
}

export default App
