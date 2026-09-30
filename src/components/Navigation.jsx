const Navigation = ({ currentPage, onNavigate, cartItemCount }) => {
  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'cart', label: `Cart${cartItemCount ? ` (${cartItemCount})` : ''}` },
    { id: 'checkout', label: 'Checkout' }
  ];

  return (
    <nav className="navigation-bar" aria-label="Primary navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
