import { useAddShoeMutation } from "../redux/api/shoesApi/shoesApi";

import Form from "../components/form/Form";
import { FieldValues } from "react-hook-form";
import FormInput from "../components/form/FormInput";

const AddShoes = () => {
  const [addShoe, { isLoading }] = useAddShoeMutation();

  // // handle add shoes
  const onSubmit = async (data: FieldValues) => {
    data.price = parseInt(data.price);
    data.quantity = parseInt(data.quantity);
    try {
      const res = await addShoe(data).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <h2 className="font-semibold text-3xl mb-12 text-center text-gray-600">
          Add a Product
        </h2>
        <div className="grid grid-cols-2 gap-5">
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
          <FormInput type="text-area" name="description" label="Description" />
        </div>
        <button
          className="w-full bg-green-600 p-3 rounded-md text-white text-lg font-semibold hover:bg-green-700 transition duration-300"
          type="submit"
        >
          {isLoading ? "Adding Shoes" : "Add Shoes"}
        </button>
      </Form>
    </div>
  );
};

export default AddShoes;
