import { useParams } from "react-router-dom";
import { useShoeQuery } from "../redux/api/shoesApi/shoesApi";

const ShoeDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useShoeQuery(id);
  const shoe = data.data || {};
  console.log(shoe);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto my-8">
    <div className="flex justify-center">
      <img
        className="w-full h-auto object-cover rounded-lg shadow-lg"
        src="data:image/jpeg;base64,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"
        alt={shoe?.name}
      />
    </div>
    <div className="mt-8">
      <h2 className="text-3xl font-semibold text-center">{shoe?.name}</h2>
      <p className="text-gray-600 text-center mt-2">{shoe?.description}</p>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Price:</p>
            <p>${shoe?.price}</p>
          </div>
          <div>
            <p className="font-semibold">Quantity:</p>
            <p>{shoe?.quantity}</p>
          </div>
          <div>
            <p className="font-semibold">Brand:</p>
            <p>{shoe?.brand}</p>
          </div>
          <div>
            <p className="font-semibold">Model:</p>
            <p>{shoe?.model}</p>
          </div>
          <div>
            <p className="font-semibold">Style:</p>
            <p>{shoe?.style}</p>
          </div>
          <div>
            <p className="font-semibold">Size:</p>
            <p>{shoe?.size}</p>
          </div>
          <div>
            <p className="font-semibold">Color:</p>
            <p>{shoe?.color}</p>
          </div>
          <div>
            <p className="font-semibold">Release Date:</p>
            <p>{shoe?.releaseDate}</p>
          </div>
          <div>
            <p className="font-semibold">Material:</p>
            <p>{shoe?.material}</p>
          </div>
          <div>
            <p className="font-semibold">Weight:</p>
            <p>{shoe?.weight}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ShoeDetails;
