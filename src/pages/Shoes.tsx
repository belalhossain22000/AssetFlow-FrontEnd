/* eslint-disable prefer-const */
import { useState } from "react";
import ShoeCard from "../components/ShoeCard/ShoeCard";
import { IoClose } from "react-icons/io5";
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
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [bulkDeleteShoe, { isLoading: isBulkDeleting }] =
    useBulkDeleteShoeMutation();

  const [filters, setFilters] = useState({
    name: "",
    price: "",
    releaseDate: "",
    brand: "",
    model: "",
    style: "",
    size: "",
    color: "",
    description: "",
    material: "",
    weight: "",
  });

  const SearchShoes = data?.data?.filter((shoe: TShoes) =>
    Object.values(shoe).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const filteredShoes = data?.data?.filter((shoe: TShoes) => {
    for (let key in filters) {
      if (
        filters[key as keyof typeof filters] !== "" &&
        shoe[key as keyof TShoes]?.toString().toLowerCase().indexOf(filters[key as keyof typeof filters].toLowerCase()) === -1
      ) {
        return false;
      }
    }
    return true;
  });
  
  // handle filtering
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    console.log(filters);
  };

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
    <div className="overflow-hidden">
      <h2 className="text-center font-semibold text-3xl mb-3 text-gray-600 relative">
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
      <div className="flex justify-end">
        <button
          onClick={() => setIsSideBarOpen(!isSidebarOpen)}
          className="bg-green-600 text-white px-5 py-2 text-lg font-semibold rounded-md"
        >
          filter
        </button>
      </div>
      <div
        className={`w-full md:w-1/4 bg-green-200 p-4 transition duration-400 rounded-lg absolute overflow-y-scroll z-20  ${
          isSidebarOpen
            ? "  right-0 top-16 "
            : "translate-x-[3000px] right-0 top-16"
        }`}
      >
        <h2 className="text-lg font-semibold mb-2 text-center">Filter Shoes</h2>
        <div className="flex flex-col gap-4 relative">
          <button
            onClick={() => setIsSideBarOpen(!isSidebarOpen)}
            className="text-left absolute -top-12 -left-3 text-xl font-bold"
          >
            <IoClose size={30} />
          </button>
          <div className="flex flex-col">
            <label className="mb-1">Brand:</label>
            <select
              className="px-2 py-1 border rounded"
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
              <option value="Reebok">Reebok</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Color:</label>
            <select
              className="px-2 py-1 border rounded"
              name="color"
              value={filters.color}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Size:</label>
            <select
              className="px-2 py-1 border rounded"
              name="size"
              value={filters.size}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Style:</label>
            <select
              className="px-2 py-1 border rounded"
              name="style"
              value={filters.style}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Running">Running</option>
              <option value="Basketball">Basketball</option>
              <option value="Sneakers">Sneakers</option>
              <option value="Casual">Casual</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Material:</label>
            <select
              className="px-2 py-1 border rounded"
              name="material"
              value={filters.material}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Leather">Leather</option>
              <option value="Synthetic">Synthetic</option>
              <option value="Mesh">Mesh</option>
              <option value="Canvas">Canvas</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Name:</label>
            <select
              className="px-2 py-1 border rounded"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Running Shoes">Running Shoes</option>
              <option value="Basketball Shoes">Basketball Shoes</option>
              <option value="Sneakers">Sneakers</option>
              <option value="Casual Shoes">Casual Shoes</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Price:</label>
            <select
              className="px-2 py-1 border rounded"
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="0-50">$0 - $50</option>
              <option value="51-100">$51 - $100</option>
              <option value="101-150">$101 - $150</option>
              <option value="151-200">$151 - $200</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Release Date:</label>
            <select
              className="px-2 py-1 border rounded"
              name="releaseDate"
              value={filters.releaseDate}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="2023-01-01">2023-01-01</option>
              <option value="2023-04-01">2023-04-01</option>
              <option value="2023-07-01">2023-07-01</option>
              <option value="2023-10-01">2023-10-01</option>
            </select>
          </div>
        </div>
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

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-">
        {searchText !== "" ? (
          // Render search results if searchText is not empty
          SearchShoes?.length > 0 ? (
            SearchShoes.map((shoe: TShoes) => (
              <ShoeCard
                shoe={shoe}
                key={shoe._id}
                handleCardClick={handleCardClick}
                clickedCards={clickedCards}
              />
            ))
          ) : (
            <p>No matching shoes found.</p>
          )
        ) : // Render filtered shoes if searchText is empty
        filteredShoes?.length > 0 ? (
          filteredShoes.map((shoe: TShoes) => (
            <ShoeCard
              shoe={shoe}
              key={shoe._id}
              handleCardClick={handleCardClick}
              clickedCards={clickedCards}
            />
          ))
        ) : (
          <p>No matching shoes found.</p>
        )}
      </div>
    </div>
  );
};

export default Shoes;
