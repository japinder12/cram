import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import UserPage from "./components/UserPage/UserPage";
import Login from "./components/Login/Login";
import Chatbot from "./components/Chatbot/Chatbot";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/chat/:userId/:sessionId" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
