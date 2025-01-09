
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import AuthPage from './pages/AuthPage';
// import './App.css'

function App() {
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      if (lat && lon) {
        console.log(lat, lon);
      }
      else {
        console.log("Location not found")
      }
    })
  }

  getLocation() ;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Map />} />
        <Route path="/authlogin" element={<AuthPage />} />

      </Routes>
    </>
  )
}

export default App
