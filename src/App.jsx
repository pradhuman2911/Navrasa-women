import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Loader from "./components/LogoPulseLoader";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from "./pages/ContactUs";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> :  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactUs />} />
  </Routes>
</BrowserRouter>;

}

export default App;