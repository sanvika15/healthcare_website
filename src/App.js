// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Form1 from './components/form1';
import Form2 from './components/from2';
import Form3 from './components/form3';
import './App.css'
import 'survey-core/defaultV2.min.css';


function App() {
  return (
    <Router>
        <Navbar title="Healthcare"/>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/about"  element={<About />}/> 
        <Route exact path="/login"  element={<Login />}/> 
        <Route exact path="/form1"  element={<Form1 />}/>
        <Route exact path="/form2"  element={<Form2/>}/>
        <Route exact path="/form3"  element={<Form3/>}/>



      </Routes>
    </Router>
  );
}

export default App;