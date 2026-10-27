import Accordion from '../components/Accordion';

const FAQ = [
  { title: 'Qual o prazo de entrega?', content: 'De 2 a 10 dias úteis, dependendo da região.' },
  { title: 'Quais formas de pagamento?', content: 'Cartão em até 10x, Pix e boleto.' },
  { title: 'Posso devolver um produto?', content: 'Sim, em até 7 dias após o recebimento.' },
];

export default function Faq() {
  return (
    <section>
      <h1>Perguntas Frequentes</h1>
      <Accordion items={FAQ} />
    </section>
  );
}
