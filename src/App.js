
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Log from './components/Log';
function App() {
  return (
    <>
      <NoteState>

        <BrowserRouter>
        
          
          <Navbar />
          <div className="container">
            <Routes>
              <Route >
                <Route path='/' element={<Home />} />
                <Route path="/Contact us" element={<About />} />
                <Route path='/Login' element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path='/Log' element={<Log/>}/>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>

      </NoteState>
    </>
  );
}
export default App;
