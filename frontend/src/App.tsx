
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import AuthPage from './pages/AuthPage';
import Complaint from './pages/Complaint';
// import './App.css'

function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Map />} />
        <Route path="/authlogin" element={<AuthPage />} />
        <Route path="/complaint" element={<Complaint />} />

      </Routes>
    </>
  )
}

export default App
