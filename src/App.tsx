import {
  useEffect,
  useState,
  // useContext, 
  createContext
} from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Cart from './pages/Cart';

interface Product {
  id: string,
  title: string,
  description: string,
  price: number,
  image: string,
  category: string
}

export const ThemeContext = createContext<Product[] | null>(null)
function App() {
  const [allData, setallData] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setallData(json))
  }, [])
  return (
    <>
      <ThemeContext.Provider value={allData}>
        <Router>
          <Nav />
          {/* {allData.map((data, index) => (

        <div key={index}>{data}</div>
      ))} */}
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<Cart/>}/>
             
          </Routes>

        </Router>
      </ThemeContext.Provider>
    </>
  )
}

export default App
