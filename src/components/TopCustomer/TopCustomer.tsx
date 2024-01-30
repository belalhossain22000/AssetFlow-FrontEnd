import Customer from "./Customer";

export type TSale = {
  productId: string;
  quantity: number;
  buyerName: string;
  saleDate: string;
};

const TopCustomer = ({ sale }: { sale: TSale[] }) => {

  return (
    <div className="max-w-screen-lg mx-auto -4 mt-5 ">
      <h2 className="text-xl font-bold mb-4 text-gray-700 text-center">Top Customers</h2>
      <div className=" rounded-md ">

        {
            sale?.map((e,i)=> <Customer key={i} item={e} />)
        } 
      </div>
    </div>
  );
};

export default TopCustomer;
