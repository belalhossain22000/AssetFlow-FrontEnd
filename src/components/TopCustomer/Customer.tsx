import { TSale } from "./TopCustomer";

const Customer = ({ item }: { item: TSale }) => {
  const { quantity, buyerName, productId } = item || {};

  return (
    <div className="bg-white px-4 py-1 shadow-md rounded-md flex flex-col justify-between">
      <div className="border-b-2 border-green-600 ">
        <h3 className="text-xl font-bold text-gray-600 mb-2">{buyerName}</h3>
        <p className="text-gray-600 mb-2 font-semibold">Quantity: {quantity}</p>
        <p className="text-gray-600 mb-2 font-semibold">
          Total Price:$ {(quantity * productId?.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Customer;
