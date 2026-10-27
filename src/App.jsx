import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Upload from './pages/Upload';
import Faq from './pages/Faq';
import Cart from './pages/Cart';

// Componente principal: Header fixo + página escolhida pela URL
export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}
