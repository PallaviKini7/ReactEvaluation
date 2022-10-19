import React from 'react';
import './App.css';
import Signin from './views/signin/signin';
import Signup from './views/signup/signup';
import { Routes, Route } from "react-router-dom"
import Toast from './components/toast/toast';
import Home from './views/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Home/' element={<Home />} />
        

      </Routes>
      {/* <Toast value="Congrats!!!Success, Signin to access the value"/> */}
      


    </div>
  );
}

export default App;
