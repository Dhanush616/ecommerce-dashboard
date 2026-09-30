import { useState } from 'react';
import { generateOrderId, validateEmail } from '../utils/helpers';

const CheckoutForm = ({ onComplete }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const submitOrder = (event) => {
    event.preventDefault();
    if (!name.trim() || !validateEmail(email)) {
      setError('Enter your name and a valid email address to continue.');
      return;
    }
    onComplete(generateOrderId());
  };

  return (
    <form className="checkout-form" onSubmit={submitOrder}>
      <label>Full name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Jordan Lee" /></label>
      <label>Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="jordan@example.com" /></label>
      {error && <p className="form-error">{error}</p>}
      <button className="checkout-button" type="submit">Place order</button>
    </form>
  );
};

export default CheckoutForm;
