import { useState } from "react";
import ShoeCard from "../components/ShoeCard/ShoeCard";
import { useShoesQuery } from "../redux/api/shoesApi/shoesApi";
import { TShoes } from "../type/shoe.type";

const Shoes = () => {
  const { data,isLoading } = useShoesQuery(undefined);
  const [searchText, setSearchText] = useState("");

  const filteredShoes = data?.data?.filter((shoe: TShoes) =>
    Object.values(shoe).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );
if(isLoading){
  return <h1>loading...</h1>
}
  return (
    <div>
        <h2 className="text-center font-semibold text-3xl mb-3 text-gray-600">Search Shoes</h2>
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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredShoes?.length > 0 ? (
          filteredShoes.map((shoe: TShoes) => (
            <ShoeCard shoe={shoe} key={shoe._id} />
          ))
        ) : (
          data?.data?.map((shoe: TShoes) => (
            <ShoeCard shoe={shoe} key={shoe._id} />
          ))
        )}
      
      </div>
    </div>
  );
};

export default Shoes;
