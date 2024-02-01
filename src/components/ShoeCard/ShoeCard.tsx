import { TShoes } from "../../type/shoe.type";
import { useState } from "react";
import InfoModal from "../modal/InfoModal";
import { useDeleteShoeMutation } from "../../redux/api/shoesApi/shoesApi";
import UpdateShoe from "../../pages/UpdateShoe";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ShoeCard = ({
  shoe,
  handleCardClick,
}: {
  shoe: TShoes;
  handleCardClick: (id: string) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDuplicateModalOpen, setIsDuplicateModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [deleteShoe, { isLoading }] = useDeleteShoeMutation();

  //modal hancler
  const showModal = () => {
    setIsModalOpen(true);
  };

  // delete handler
  const handleDeleteShoe = async (id: string) => {
    try {
      const isAgree = confirm("Are you want to delete this shoes");
      if (isAgree) {
        await deleteShoe(id);
        alert("delete success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`max-w-xs overflow-hidden shadow-lg m-4 rounded-md relative ${
        isChecked ? "border border-red-500" : ""
      }`}
      onClick={() => handleCardClick(shoe._id)}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="absolute top-0 left-0 mt-2 ml-2 z-20 cursor-pointer"
      />

      <img
        className="w-full object-cover hover:scale-110 transition duration-500"
        src={shoe?.image}
        alt={shoe?.name}
      />

      <div className="hover:-translate-y-3 transition duration-300">
        <div className="px-6 py-4 hover:translate-y-3">
          <div className="font-bold text-xl mb-2">{shoe?.name}</div>
          <p className="text-gray-700 text-base">{shoe?.description}</p>
        </div>
        <div className="px-6">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {shoe?.brand}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {shoe?.style}
          </span>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            ${shoe?.price}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            quantity: {shoe?.quantity}
          </span>
        </div>
        <div className="px-6 py-4 grid grid-cols-2 gap-3">
          <button
            onClick={() => setIsUpdateModalOpen(!isUpdateModalOpen)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
          <button
            onClick={() => handleDeleteShoe(shoe?._id)}
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          >
            {isLoading ? " Deleting" : "Delete"}
          </button>

          <button
            onClick={() => setIsDuplicateModalOpen(!isDuplicateModalOpen)}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px- rounded focus:outline-none focus:shadow-outline"
          >
            Create Variant
          </button>

          <button
            onClick={showModal}
            className="bg-green-600  hover:bg-green-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          >
            Sell
          </button>
        </div>
      </div>
      <InfoModal
        id={shoe?._id}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <UpdateShoe
        isModalOpen={isUpdateModalOpen}
        setIsModalOpen={setIsUpdateModalOpen}
        shoe={shoe}
        mode={"update"}
      />
      <UpdateShoe
        isModalOpen={isDuplicateModalOpen}
        setIsModalOpen={setIsDuplicateModalOpen}
        shoe={shoe}
        mode={"duplicate"}
      />
    </div>
  );
};

export default ShoeCard;
