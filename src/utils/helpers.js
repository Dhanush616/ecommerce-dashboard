export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(price);
};

export const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const calculateDiscount = (total, discountPercent = 10) => {
  return total * (discountPercent / 100);
};

export const generateOrderId = () => {
  return `ORD-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
};

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhoneNumber = (phone) => {
  return /^[\d\s+()-]{10,}$/.test(phone);
};

export const getStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return '★'.repeat(fullStars) + (halfStar ? '✦' : '');
};
