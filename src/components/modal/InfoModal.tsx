import { Modal } from "antd";
import React from "react";
import Form from "../form/Form";
import FormInput from "../form/FormInput";
import { FieldValues } from "react-hook-form";
import { useSellShoeMutation } from "../../redux/api/sellApi/sellApi";
const InfoModal = ({
  setIsModalOpen,
  isModalOpen,
  id,
}: {
  id: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [sellShoe, { isLoading }] = useSellShoeMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      data.quantity = parseInt(data.quantity);
      const sellInfo = {
        ...data,
        productId: id,
      };
      await sellShoe(sellInfo);
      alert("sell created success");
      handleCancel();
    } catch (error) {
      console.log(error);
      alert("Shoe not found");
    }
  };

  return (
    <Modal
      title="Sell info"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form onSubmit={onSubmit}>
        <FormInput type="text" name="buyerName" label="Customer name" />
        <FormInput type="number" name="quantity" label="Quantity" />
        <FormInput type="date" name="saleDate" label="Sale Date" />

        <button
          className="w-full mt-5 bg-green-600 p-3 rounded-md text-white text-lg font-semibold hover:bg-green-700 transition duration-300"
          type="submit"
        >
          {isLoading ? "Loading..." : "sell"}
        </button>
      </Form>
    </Modal>
  );
};

export default InfoModal;
