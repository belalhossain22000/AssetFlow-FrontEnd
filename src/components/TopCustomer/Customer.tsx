import { TSale } from "./TopCustomer";

const Customer = ({ item }: { item: TSale }) => {
  const { quantity, buyerName, price,productName } = item || {};

  return (
    <div className="bg-white px-4 py-1 shadow-md rounded-md flex flex-col justify-between hover:bg-gray-200">
      <div className=" ">
        <h3 className="text-xl font-bold text-gray-600 mb-2">{buyerName}</h3>
        <h3 className="text-lg font-semibold text-gray-600 " >
          product:  {productName}</h3>
        <div  className="flex justify-between items-center">
          <p className="text-gray-600 mb-2 font-semibold">
            Quantity: {quantity}
          </p>
          <p className="text-gray-600 mb-2 font-semibold">
            Total Price:$ {(quantity * price).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
