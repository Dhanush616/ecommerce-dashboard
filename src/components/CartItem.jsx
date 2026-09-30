import { formatPrice } from '../utils/helpers';

const CartItem = ({ item, onQuantityChange, onRemove }) => (
  <div className="cart-item">
    <img src={item.image} alt="" />
    <div className="cart-item-info">
      <span className="product-category">{item.category}</span>
      <h3>{item.name}</h3>
      <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>
    </div>
    <div className="quantity-control">
      <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name}`}>−</button>
      <span>{item.quantity}</span>
      <button onClick={() => onQuantityChange(item.id, item.quantity + 1)} aria-label={`Increase ${item.name}`}>+</button>
    </div>
    <strong>{formatPrice(item.price * item.quantity)}</strong>
  </div>
);

export default CartItem;
