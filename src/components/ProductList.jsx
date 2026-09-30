import { useState } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../utils/mockData';

const ProductList = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((first, second) => {
    if (sortBy === 'price-low') return first.price - second.price;
    if (sortBy === 'price-high') return second.price - first.price;
    if (sortBy === 'rating') return second.rating - first.rating;
    return first.name.localeCompare(second.name);
  });

  return (
    <section className="product-list-container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The collection</p>
          <h2>Find your next essential.</h2>
        </div>
        <p className="products-info">{sortedProducts.length} products</p>
      </div>
      <div className="product-controls">
        <label>
          <span>Category</span>
          <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
            {CATEGORIES.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </label>
        <label>
          <span>Sort by</span>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (low to high)</option>
            <option value="price-high">Price (high to low)</option>
            <option value="rating">Rating (high to low)</option>
          </select>
        </label>
      </div>
      {sortedProducts.length === 0 ? (
        <div className="empty-state">No products found in this category.</div>
      ) : (
        <div className="products-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
