import { Modal } from "antd";
import React from "react";
import Form from "../form/Form";
import FormInput from "../form/FormInput";
import { FieldValues } from "react-hook-form";
const InfoModal = ({
  setIsModalOpen,
  isModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Modal
      title="Sell info"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form onSubmit={onSubmit}>
        <FormInput type="text" name="name" label="Customer name" />
        <FormInput type="number" name="quantity" label="Quantity" />
        <FormInput type="date" name="saleDate" label="Sale Date" />

        <button
          className="w-full bg-green-600 p-3 rounded-md text-white text-lg font-semibold hover:bg-green-700 transition duration-300"
          type="submit"
        >
          Sell
        </button>
      </Form>
    </Modal>
  );
};

export default InfoModal;
