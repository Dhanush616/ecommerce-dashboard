const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <button className="brand" onClick={onCartClick} aria-label="Open cart">
            <span className="brand-mark" aria-hidden="true">ES</span>
            <span className="brand-copy">
              <strong>Ecommerce</strong>
            </span>
          </button>
          <div className="header-info">
            <span className="welcome">Welcome back, Guest</span>
            <button className="cart-button" onClick={onCartClick} title="Go to cart">
              Cart <span className="cart-count">{cartItemCount}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
