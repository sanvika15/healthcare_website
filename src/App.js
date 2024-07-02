// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Form1 from './components/form1';
import Form2 from './components/from2';

import 'survey-core/defaultV2.min.css';


function App() {
  return (
    <Router>
        <Navbar title="Healthcare"/>

      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about"  element={<About />}/> 
        <Route exact path="/login"  element={<Login />}/> 
        <Route exact path="/form1"  element={<Form1 />}/>
        <Route exact path="/form2"  element={<Form2/>}/>



      </Routes>
    </Router>
  );
}

export default App;