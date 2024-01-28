import { useShoesQuery } from "../redux/api/shoesApi/shoesApi";

const Shoes = () => {
  const { data } = useShoesQuery(undefined);
  console.log(data);

  return <div>Shoes</div>;
};

export default Shoes;
