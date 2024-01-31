import { useState } from "react";
import ShoeCard from "../components/ShoeCard/ShoeCard";
import {
  useBulkDeleteShoeMutation,
  useShoesQuery,
} from "../redux/api/shoesApi/shoesApi";
import { TShoes } from "../type/shoe.type";

const ids: string[] = [];

const Shoes = () => {
  const [clickedCards, setClickedCards] = useState(false);
  const { data, isLoading } = useShoesQuery(undefined);
  const [searchText, setSearchText] = useState("");
  const [bulkDeleteShoe, { isLoading: isBulkDeleting }] =
    useBulkDeleteShoeMutation();

  const filteredShoes = data?.data?.filter((shoe: TShoes) =>
    Object.values(shoe).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // bulk delete handler
  const handleCardClick = (id: string) => {
    setClickedCards(!clickedCards);
    const isExist = ids.includes(id);
    if (!isExist) {
      ids.push(id);
    } else {
      const index = ids.indexOf(id);
      if (index !== -1) {
        ids.splice(index, 1);
      }
    }
    console.log(ids);
  };

  const handleBulkDelete = async () => {
    const isAllDelete = confirm("Are you Want to sure delete all");
    try {
      if (isAllDelete) {
        await bulkDeleteShoe(ids);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <h2 className="text-center font-semibold text-3xl mb-3 text-gray-600">
        Search Shoes
      </h2>
      <div className="flex items-center justify-center gap-5">
        <input
          className="w-1/3 px-4 py-2 text-lg rounded-md border-2 border-green-600 text-gray-600 outline-green-500"
          placeholder="Search your Shoes"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-lg">
          Search
        </button>
      </div>
      <div>
        {clickedCards && (
          <button
            onClick={handleBulkDelete}
            className="bg-red-500 px-6 py-3 rounded-md font-semibold text-lg text-white"
          >
            {isBulkDeleting ? "Deleting" : "Delete "}{" "}
          </button>
        )}
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredShoes?.length > 0
          ? filteredShoes.map((shoe: TShoes) => (
              <ShoeCard
                shoe={shoe}
                key={shoe._id}
                handleCardClick={handleCardClick}
                clickedCards={clickedCards}
              />
            ))
          : data?.data?.map((shoe: TShoes) => (
              <ShoeCard
                shoe={shoe}
                key={shoe._id}
                handleCardClick={handleCardClick}
                clickedCards={clickedCards}
              />
            ))}
      </div>
    </div>
  );
};

export default Shoes;
