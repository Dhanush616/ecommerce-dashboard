import { formatPrice, getStarRating } from '../utils/helpers';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        {!product.inStock && <span className="stock-badge">Sold out</span>}
      </div>
      <div className="product-card-body">
        <div className="product-category">{product.category}</div>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          <span className="rating" aria-label={`${product.rating} out of 5 stars`}>
            {getStarRating(product.rating)} <b>{product.rating}</b>
          </span>
          <strong className="product-price">{formatPrice(product.price)}</strong>
        </div>
        <button
          className="add-button"
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to cart' : 'Unavailable'}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
