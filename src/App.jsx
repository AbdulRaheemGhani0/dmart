import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';

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
      <Header />
      
      <Card products={post} />
    </>
  );
}

export default App;
