const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function RenderList() {
  const listItems = products.map((item) => {
    return (
      <li key={item.title} style={{ color: item.isFruit ? "blue" : "green" }}>
        {item.title}
      </li>
    );
  });
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default RenderList;
