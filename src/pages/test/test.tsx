import { useState } from "react";
import ShoeCard from "../components/ShoeCard/ShoeCard";
import { useShoesQuery } from "../redux/api/shoesApi/shoesApi";
import { TShoes } from "../type/shoe.type";

const Shoes = () => {
  const { data, isLoading } = useShoesQuery(undefined);
  const [filters, setFilters] = useState({
    brand: "",
    priceMin: "",
    priceMax: "",
    size: "",
    color: "",
  });
  const [filteredShoes, setFilteredShoes] = useState<TShoes[]>([]);

  const applyFilters = () => {
    let filteredData = data?.data || [];

    // Filter by brand
    if (filters.brand) {
      filteredData = filteredData.filter(
        (shoe) => shoe.brand.toLowerCase() === filters.brand.toLowerCase()
      );
    }

    // Filter by price range
    if (filters.priceMin && filters.priceMax) {
      filteredData = filteredData.filter(
        (shoe) =>
          shoe.price >= parseFloat(filters.priceMin) &&
          shoe.price <= parseFloat(filters.priceMax)
      );
    }

    // Filter by size
    if (filters.size) {
      filteredData = filteredData.filter(
        (shoe) => shoe.size.toLowerCase() === filters.size.toLowerCase()
      );
    }

    // Filter by color
    if (filters.color) {
      filteredData = filteredData.filter(
        (shoe) => shoe.color.toLowerCase() === filters.color.toLowerCase()
      );
    }

    setFilteredShoes(filteredData);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    applyFilters();
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2 className="text-center font-semibold text-3xl mb-3 text-gray-600">
        Search Shoes
      </h2>
      <div className="flex items-center justify-center gap-5">
        <input
          className="w-1/3 px-4 py-2 text-lg rounded-md border-2 border-green-600 text-gray-600 outline-green-500"
          placeholder="Brand"
          type="text"
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
        />
        <input
          className="w-1/3 px-4 py-2 text-lg rounded-md border-2 border-green-600 text-gray-600 outline-green-500"
          placeholder="Min Price"
          type="number"
          name="priceMin"
          value={filters.priceMin}
          onChange={handleFilterChange}
        />
        <input
          className="w-1/3 px-4 py-2 text-lg rounded-md border-2 border-green-600 text-gray-600 outline-green-500"
          placeholder="Max Price"
          type="number"
          name="priceMax"
          value={filters.priceMax}
          onChange={handleFilterChange}
        />
        <input
          className="w-1/3 px-4 py-2 text-lg rounded-md border-2 border-green-600 text-gray-600 outline-green-500"
          placeholder="Size"
          type="text"
          name="size"
          value={filters.size}
          onChange={handleFilterChange}
        />
        <input
          className="w-1/3 px-4 py-2 text-lg rounded-md border-2 border-green-600 text-gray-600 outline-green-500"
          placeholder="Color"
          type="text"
          name="color"
          value={filters.color}
          onChange={handleFilterChange}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md text-lg"
          onClick={handleSearch}
        >
          Apply Filters
        </button>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredShoes.map((shoe: TShoes) => (
          <ShoeCard shoe={shoe} key={shoe._id} />
        ))}
      </div>
    </div>
  );
};

export default Shoes;
