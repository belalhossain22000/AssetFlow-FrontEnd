const TotalSaleCard = ({
  time,
  totalSale,
}: {
  time: string;
  totalSale: number;
}) => {
 
  return (
    <>
      <div>
        <h1 className="font-bold text-xl mb-5 text-center text-gray-800 bg-white p-2 rounded-md">
         {time} Salse History
        </h1>
        <div className="flex justify-center items-center gap-2 p-5 bg-green-300 rounded-md">
          <h1 className="text-2xl text-white bg-green-600 w-fit p-3 rounded-md">
            $
          </h1>
          <div className="flex items-start flex-col gap-2">
            <p className="text-lg font-semibold">{time} Total Sale </p>
            <p>$ {totalSale}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalSaleCard;
