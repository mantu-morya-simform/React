function MenuItem({ name, price, onOrder }) {
  return (
    <div>
      <span>
        {name}-{price}
        <button onClick={() => onOrder(name, price)}>Order</button>
      </span>
    </div>
  );
}

export default MenuItem;
