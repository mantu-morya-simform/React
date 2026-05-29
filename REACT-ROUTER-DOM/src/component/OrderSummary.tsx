import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>OrderSummary</h1>
      <button
        className="bg-gray-500 px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default OrderSummary;
