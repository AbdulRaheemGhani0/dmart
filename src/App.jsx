
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header.jsx';
import LoginForm from './Pages/Login';
import ErrorPage from './Pages/Error';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import SignupForm from './Pages/Signup';



function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setPost(data.products));
  }, []);
 
  console.log("data ==", post);

  return (
    <>
<BrowserRouter>
<Header />

    <Routes>
      <Route  path='/' element={<Card products={post} />}/>
      <Route  path='/aboutus' element={<About/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='/services' element={<Services/>}/>
      <Route  path='/login' element={<LoginForm/>}/>
      <Route  path='/signup' element={<SignupForm/>}/>


      <Route  path='*' element={<ErrorPage/>}/>

      </Routes>

   
</BrowserRouter>


      
      
      
    </>
  );
}

export default App;
