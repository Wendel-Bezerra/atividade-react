import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Pagination from '../components/Pagination';
import { useToast } from '../context/ToastContext';
import { useCart } from '../context/CartContext';

const PRODUCTS = [
  { name: 'Notebook Ultra', category: 'Notebooks' },
  { name: 'Notebook Gamer', category: 'Notebooks' },
  { name: 'Notebook Pro', category: 'Notebooks' },
  { name: 'Smartphone X10', category: 'Smartphones' },
  { name: 'Smartphone Lite', category: 'Smartphones' },
  { name: 'Smartphone Max', category: 'Smartphones' },
  { name: 'Fone Bluetooth', category: 'Áudio' },
  { name: 'Caixa de Som', category: 'Áudio' },
  { name: 'Microfone USB', category: 'Áudio' },
  { name: 'Teclado Mecânico', category: 'Periféricos' },
  { name: 'Mouse Sem Fio', category: 'Periféricos' },
  { name: 'Monitor 27"', category: 'Periféricos' },
];
const PER_PAGE = 4;

export default function Products() {
  const [category, setCategory] = useState('Todas');
  const [page, setPage] = useState(1);
  const { showToast } = useToast();
  const { addToCart } = useCart();

  const filtered = PRODUCTS.filter((p) => category === 'Todas' || p.category === category);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleBuy(product) {
    addToCart(product);
    showToast(`${product.name} adicionado ao carrinho!`, 'success');
  }

  function handleCategory(option) {
    setCategory(option);
    setPage(1);
  }

  return (
    <section>
      <h1>Produtos</h1>
      <Dropdown
        label={`Categoria: ${category}`}
        options={['Todas', 'Notebooks', 'Smartphones', 'Áudio', 'Periféricos']}
        onSelect={handleCategory}
      />

      <div className="grid">
        {visible.map((p) => (
          <article key={p.name} className="card">
            <h3>{p.name}</h3>
            <p>{p.category}</p>
            <button onClick={() => handleBuy(p)}>Comprar</button>
          </article>
        ))}
      </div>

      <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
    </section>
  );
}
