import { useNavigate } from "react-router-dom";

const Order = () => {
  // Dummy order data
  const orders = [
    { id: 1, name: "Pizza", price: 250 },
    { id: 2, name: "Burger", price: 120 },
    { id: 3, name: "Pasta", price: 180 },
  ];

  const total = orders.reduce((sum, item) => sum + item.price, 0);

  const navigate = useNavigate();

  function handleClickOrderButton() {
    navigate("/order-summary"); //{ replace: true }
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

      {/* Order List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        {orders.length > 0 ? (
          <ul className="divide-y">
            {orders.map((item) => (
              <li key={item.id} className="flex justify-between py-3">
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-600">₹{item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No items in order</p>
        )}

        {/* Total */}
        <div className="flex justify-between mt-4 font-semibold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {/* Button */}
        <button
          onClick={handleClickOrderButton}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;
