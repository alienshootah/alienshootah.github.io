import React from 'react';
import './css/style.css';
import './css/media.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Search from './components/Search';
import Hot from './components/Hot';
import Prefer from './components/Prefer';
import Promo from './components/Promo';
import Catalog from './components/Catalog';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Brands from './components/Brands';
import Feedback from './components/Feedback';
import Links from './components/Links';
import Footer from './components/Footer';
import ModalWindow from './components/ModalWindow';

function App() {
  return (
    <div>
      <div className="container-fluid">
          <Nav />
          <Header />
          <Search />
          <Hot />
          <Prefer />
          <Promo />
          <Catalog />
          <Gallery />
          <Blog />
          <Brands />
          <Feedback />
          <Links />
          <Footer />
      </div>
      <ModalWindow />
    </div>
  );
}

export default App;
