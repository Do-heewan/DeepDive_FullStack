import {Outlet, Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav'
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/requests';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage/index';
import MainPage from './pages/MainPage/index';
import SearchPage from './pages/SearchPage/index';

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
