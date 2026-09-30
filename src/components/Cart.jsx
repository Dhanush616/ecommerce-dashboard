import { calculateTotal, formatPrice } from '../utils/helpers';
import CartItem from './CartItem';

const Cart = ({ items, onQuantityChange, onRemove, onCheckout, onContinue }) => {
  const subtotal = calculateTotal(items);
  const discount = subtotal > 500 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <section className="cart-page">
      <div className="section-heading">
        <div><p className="eyebrow">Your selection</p><h2>Shopping cart</h2></div>
        <button className="text-button" onClick={onContinue}>Continue shopping</button>
      </div>
      {items.length === 0 ? (
        <div className="empty-state"><h3>Your cart is waiting.</h3><p>Add something useful to get started.</p><button className="add-button compact" onClick={onContinue}>Browse products</button></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => <CartItem key={item.id} item={item} onQuantityChange={onQuantityChange} onRemove={onRemove} />)}
          </div>
          <aside className="order-summary"><p className="eyebrow">Summary</p><div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>{discount > 0 && <div className="discount"><span>Summer discount</span><strong>-{formatPrice(discount)}</strong></div>}<div className="summary-total"><span>Total</span><strong>{formatPrice(total)}</strong></div><button className="checkout-button" onClick={onCheckout}>Go to checkout</button></aside>
        </div>
      )}
    </section>
  );
};

export default Cart;
