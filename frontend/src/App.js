// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import About from './components/About';
import Home from './components/Home/Home';
import Login from './components/Login';
import Form1 from './components/Forms/form1';
import Form2 from './components/Forms/form2'; // Ensure this matches the filename
import Form3 from './components/Forms/form3';
import './App.css';
import 'survey-core/defaultV2.min.css';

function App() {
  const aboutText = 'This is the about text.';

  return (
    <Router>
      <Navbar title="Healthcare" aboutText={aboutText}/>
     
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Updated to use "/" for the home page */}
        <Route path="/login" element={<Login />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
      </Routes>
    </Router>
  );
}

export default App;
