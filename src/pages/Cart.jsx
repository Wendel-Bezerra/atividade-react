import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function Cart() {
  const { items, removeFromCart } = useCart();
  const { showToast } = useToast();

  function handleRemove(item, index) {
    removeFromCart(index);
    showToast(`${item.name} removido com sucesso!`, 'success');
  }

  return (
    <section>
      <h1>Carrinho</h1>
      {items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul className="cart">
          {items.map((item, i) => (
            <li key={i} className="card">
              {item.name}
              <button onClick={() => handleRemove(item, i)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
