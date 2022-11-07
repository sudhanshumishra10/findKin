// import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import { useEffect } from 'react';
import Mreport from './pages/mreport/Mreport';
import FOUND from './pages/found/Found';


function App() {

  const navigate = useNavigate();

  useEffect(() => {
    console.log(window.location.pathname)
    if (window.location.pathname === '/') {
      navigate('/admin/dashboard')
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/missing_report" element={<Mreport />} />
        <Route path="/admin/found" element={<FOUND />} />
      </Routes>
    </div>
  );
}

export default App;
