// import Footer from "./components/Footer";
// import Header from "./components/Header";
import { useState } from 'react';
import './App.css'

function App() {
  const[color,setColor]=useState('White');
  console.log(color,"color")

  const handlechangecolor = () =>{
   setColor('Green')
  }
  const handlechangecoloryellow = () =>{
    setColor('yellow')
   }

  return (
  <>
  {/* <Header/>
  <Footer/> */}

  <div className="app-wrap" style={{backgroundColor:color}}>
    <button className="green" onClick={handlechangecolor}>Green</button>
    <button className="yellow" style={{backgroundColor:"yellow"}} onClick={handlechangecoloryellow}>yellow</button>
  </div>
  </>
  );
}

export default App;
