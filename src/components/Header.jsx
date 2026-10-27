import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { items } = useCart(); // lê o carrinho do estado global, sem props

  return (
    <header className="header">
      <strong>⚡ TechStore</strong>
      <nav aria-label="Navegação principal">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/upload">Upload</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/carrinho">🛒 Carrinho ({items.length})</NavLink>
      </nav>
    </header>
  );
}
