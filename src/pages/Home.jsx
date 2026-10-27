import Tabs from '../components/Tabs';
import { useToast } from '../context/ToastContext';

const TABS = [
  { title: 'Sobre', content: 'A TechStore é uma loja fictícia de eletrônicos.' },
  { title: 'Missão', content: 'Levar tecnologia com preço justo para todo o Brasil.' },
  { title: 'Contato', content: 'contato@techstore.com.br — Salvador/BA' },
];

export default function Home() {
  const { showToast } = useToast();

  return (
    <section>
      <h1>Bem-vindo à TechStore</h1>
      <Tabs tabs={TABS} />

      <h2>Notificações</h2>
      <div className="buttons">
        <button className="success" onClick={() => showToast('Salvo com sucesso!', 'success')}>Sucesso</button>
        <button className="error" onClick={() => showToast('Erro ao salvar.', 'error')}>Erro</button>
        <button className="info" onClick={() => showToast('Nova promoção amanhã.', 'info')}>Info</button>
      </div>
    </section>
  );
}
