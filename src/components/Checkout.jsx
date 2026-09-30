import { calculateTotal, formatPrice } from '../utils/helpers';
import CheckoutForm from './CheckoutForm';

const Checkout = ({ items, onComplete, onBack }) => {
  const total = calculateTotal(items);

  return (
    <section className="checkout-page">
      <div className="section-heading"><div><p className="eyebrow">Almost there</p><h2>Complete your order</h2></div><button className="text-button" onClick={onBack}>Back to cart</button></div>
      {items.length === 0 ? <div className="empty-state"><h3>Your cart is empty.</h3><button className="add-button compact" onClick={onBack}>Browse products</button></div> : <div className="checkout-layout"><CheckoutForm onComplete={onComplete} /><aside className="order-summary"><p className="eyebrow">Order total</p><div className="summary-total"><span>Due today</span><strong>{formatPrice(total)}</strong></div><p className="secure-note">Secure checkout · Free standard shipping</p></aside></div>}
    </section>
  );
};

export default Checkout;
