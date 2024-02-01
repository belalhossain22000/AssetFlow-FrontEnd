import { FieldValues } from "react-hook-form";
import Form from "../components/form/Form";
import FormInput from "../components/form/FormInput";
import {
  useAddShoeMutation,
  useUpdateShoeMutation,
} from "../redux/api/shoesApi/shoesApi";
import { Modal } from "antd";
import React from "react";
import { TShoes } from "../type/shoe.type";

const UpdateShoe = ({
  setIsModalOpen,
  isModalOpen,
  shoe,
  mode,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shoe: TShoes;
  mode: "update" | "duplicate";
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [addShoe,{isLoading:isAdding}] = useAddShoeMutation();
  const [updateShoe, { isLoading:isUpdating }] = useUpdateShoeMutation();

  const defaultValues = {
    name: shoe?.name,
    image: shoe?.image,
    price: shoe?.price,
    quantity: shoe?.quantity,
    releaseDate: shoe?.releaseDate,
    brand: shoe?.brand,
    model: shoe?.model,
    style: shoe?.style,
    size: shoe?.size,
    color: shoe?.color,
    material: shoe?.material,
    weight: shoe?.weight,
    description: shoe?.description,
  };

  // // handle add shoes
  const onSubmit = async (data: FieldValues) => {
    data.price = parseInt(data.price);
    data.quantity = parseInt(data.quantity);
    try {
      if (mode === "update") {
        await updateShoe({ shoeInfo: data, id: shoe?._id });
        handleCancel();
        alert('Shoe updated success')
      } else if (mode === "duplicate") {
        await addShoe(data);
        handleCancel();
        alert('Shoe Duplicated success')
      }
    } catch (error) {
      console.log(error);
      alert('something went wrong')
    }
  };

  return (
    <div className="w-full">
      <Modal
        className="w-full"
        style={{ maxWidth: "100%" }}
        wrapClassName="modal-full-width"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onSubmit={onSubmit} defaultValues={defaultValues}>
          <h2 className="font-semibold text-3xl mb-7 text-center text-gray-600">
            Update shoes
          </h2>
          <div className="grid grid-cols-2 gap-5 w-full">
            <FormInput type="text" name="name" label="Shoe Name" />
            <FormInput type="text" name="image" label="Image Url" />
            <FormInput type="text" name="price" label="Price" />
            <FormInput type="text" name="quantity" label="Quantity" />
            <FormInput type="text" name="releaseDate" label="ReleaseDate" />
            <FormInput type="text" name="brand" label="Brand" />
            <FormInput type="text" name="model" label="Model" />
            <FormInput type="text" name="style" label="Style" />
            <FormInput type="text" name="size" label="Size" />
            <FormInput type="text" name="color" label="Color" />
            <FormInput type="text" name="material" label="Material" />
            <FormInput type="text" name="material" label="Material" />
            <FormInput type="text" name="weight" label="Weight" />
            <FormInput
              type="text-area"
              name="description"
              label="Description"
            />
          </div>
          <button
            className="w-full bg-green-600 p-3 mt-5 rounded-md text-white text-lg font-semibold hover:bg-green-700 transition duration-300"
            type="submit"
          >
           {mode === 'update' ? (isUpdating ? 'Updating' : 'Update') : (isAdding ? 'Creating' : 'Create')}
          </button>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateShoe;
