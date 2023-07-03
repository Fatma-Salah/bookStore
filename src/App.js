
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import SideBar from './components/sideBar';
import Navbar from './components/navbar';
import BookDetails from './components/bookDetails';
import Footer from './components/footer';
import BestSelling from './components/bestSellingBooks';
import SpecialOffer from './components/specialOffer';
import AddBook from './components/addBook';
import AllBooks from './components/allBooks';
import Contact from './pages/contact';
import About from './pages/about';
import Login from './pages/login';

function App() {
  return (
    
    < >
  <main>
  <Navbar/>
      <div className='d-flex flex-wrap'>
          <div className='col-12 col-md-2'>
              <SideBar/>
          </div>
          <div className='col-12 col-md-10'>
              <Routes >
                  
                  <Route path='/' element={<Home/>} ></Route>
                  <Route path='contact' element={<Contact/>} ></Route>
                  <Route path='about' element={<About/>} ></Route>
                  <Route path='login' element={<Login/>} ></Route>
                  <Route path='/books/:bookId' element={<BookDetails/>} ></Route>
                  <Route path='/bestSelling' element={ <BestSelling/>} ></Route>
                  <Route path='/allBook' element={ <AllBooks/>} ></Route>
                  <Route path='/special offer' element={ <SpecialOffer/>} ></Route>
                  <Route path='/books/edit' element={ <AddBook/>} ></Route>
                  <Route path='/addBook' element={<AddBook/>} />
                </Routes>
          </div>
      </div>
     
      <Footer/>
  </main>
    </>
  )
}

export default App;
