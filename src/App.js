import React from "react"
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddEdit from "./components/AddEdit";
import View from "./components/View";
import About from "./components/About";
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


function App() {
  return (
    
       <BrowserRouter>
       <div className="App">
       <ToastContainer position="top-center" />
       <Header />
       <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add" element={<AddEdit />}/>
      <Route path="/update/:id" element={<AddEdit />}/>
      <Route path="/view/:id" element={<View />}/>
      <Route path="/about" element={<About />}/>
      </Routes>
       </div>

       </BrowserRouter>
   
    
   );
}

export default App;
