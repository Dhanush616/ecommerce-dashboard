const DebugPanel = ({ currentPage, cartItemCount }) => {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <aside className="debug-panel" aria-label="Development status">
      <strong>DEV</strong>
      <span>page: {currentPage}</span>
      <span>cart: {cartItemCount}</span>
    </aside>
  );
};

export default DebugPanel;
