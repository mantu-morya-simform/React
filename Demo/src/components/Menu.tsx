import MenuItem from "./MenuItem";

function Menu() {
  const handleClick = (name, price) => {
    alert(`Ordered ${name} for Prise ${price}`);
  };
  return (
    <div>
      <h2>Our Menu</h2>
      <MenuItem name="pizza" price="$50" onOrder={handleClick} />
      <MenuItem name="Burger" price="$20" onOrder={handleClick} />
      <MenuItem name="Samosa" price="$30" onOrder={handleClick} />
      <MenuItem name="Chole-Bhature" price="$80" onOrder={handleClick} />
      div
    </div>
  );
}

export default Menu;
