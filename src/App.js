import React from 'react'
import Home from './pages/Home';
import EnQuiz1 from './pages/EnQuiz1'
import Quiz11 from './components/Quiz11';
import Quiz12 from './components/Quiz12';
import TopBar from './components/TopBar'
import ItFields from './pages/ItFields'
import Register from './pages/Register'
import Cours from './pages/Cours'
import ItQuizs from './pages/ItQuizs';
import ItQuiz from './components/ItQuiz'
import ItQuiz1 from './components/ItQuiz1'
import ILC from './Sections/ILC'
import Tutors from './pages/Tutors'
import MyResume from './pages/MyResume'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () =>{
  return(
    
    <Router>
    <TopBar />
   
   
      <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route path="/EnQuiz1" element={<EnQuiz1 />}/>
        <Route path="/Quiz11" element={<Quiz11 />}/>
        <Route path="/Quiz12" element={<Quiz12 />}/>
        <Route path="/ItFields" element={<ItFields />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Cours" element={<Cours />}/>
        <Route path="/ItQuizs" element={<ItQuizs />}/>
        <Route path="/ItQuiz" element={<ItQuiz />}/>
        <Route path="/ItQuiz1" element={<ItQuiz1 />}/>
        <Route path="/Tutors" element={<Tutors/>}/>
        <Route path="/MyResume" element={<MyResume/>}/>
        <Route path="/Contact" element={<Contact/>}/>

     
      </Routes>
      <Footer />
     

  </Router>

   

  )
}

export default App