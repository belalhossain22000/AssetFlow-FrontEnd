import TotalSaleCard from "../components/Salse/TotalSaleCard";
import TopCustomer from "../components/TopCustomer/TopCustomer";
import { useSaleHistoryQuery } from "../redux/api/saleApi/saleApi";

const Dashboard = () => {

  const { data, isLoading } = useSaleHistoryQuery(undefined);

  const { todaySale, lastWeekSale, lastMonthSale, lastYearSale } =
    data?.data || {};

  // calculate today total sale
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const todayTotalSale = todaySale?.reduce(
    (
      total: number,
      saleItem: { quantity: number; productId?: { price?: number } }
    ) => {
      const {
        quantity,
        productId
      } = saleItem;
  
      // Check if productId exists and has a price
      if (productId && productId.price !== undefined) {
        return total + (quantity * productId.price);
      } else {
        // Handle the case where productId or price is null or undefined
        return total;
      }
    },
    0
  );
  // calculate today total sale
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const weeklyTotalSale = lastWeekSale?.reduce(
    (
      total: number,
      saleItem: { quantity: number; productId?: { price?: number } }
    ) => {
      const {
        quantity,
        productId
      } = saleItem;
  
      // Check if productId exists and has a price
      if (productId && productId.price !== undefined) {
        return total + (quantity * productId.price);
      } else {
        // Handle the case where productId or price is null or undefined
        return total;
      }
    },
    0
  );
  // calculate today total sale
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const monthlyTotalSale = lastMonthSale?.reduce(
    (
      total: number,
      saleItem: { quantity: number; productId?: { price?: number } }
    ) => {
      const {
        quantity,
        productId
      } = saleItem;
  
      // Check if productId exists and has a price
      if (productId && productId.price !== undefined) {
        return total + (quantity * productId.price);
      } else {
        // Handle the case where productId or price is null or undefined
        return total;
      }
    },
    0
  );
  // calculate today total sale
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const yearlyTotalSale = lastYearSale?.reduce(
    (
      total: number,
      saleItem: { quantity: number; productId?: { price?: number } }
    ) => {
      const {
        quantity,
        productId
      } = saleItem;
  
      // Check if productId exists and has a price
      if (productId && productId.price !== undefined) {
        return total + (quantity * productId.price);
      } else {
        // Handle the case where productId or price is null or undefined
        return total;
      }
    },
    0
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div>
        <div className="w-full  ">
          <TotalSaleCard time={"Today"} totalSale={todayTotalSale} />
        </div>
        <div className="border-2 border-green-600 rounded-md px-2 py-4 my-5">
          <TopCustomer sale={todaySale} />
        </div>
      </div>
      <div>
        <div className="w-full ">
          <TotalSaleCard time={"Last Week"} totalSale={weeklyTotalSale} />
        </div>
        <div className="border-2 border-green-600 rounded-md px-2 py-4 my-5">
          <TopCustomer sale={lastWeekSale} />
        </div>
      </div>
      <div>
        <div className="w-full ">
          <TotalSaleCard time={"Last Month"} totalSale={monthlyTotalSale} />
        </div>
        <div className="border-2 border-green-600 rounded-md px-2 py-4 my-5">
          <TopCustomer sale={lastMonthSale} />
        </div>
      </div>
      <div>
        <div className="w-full ">
          <TotalSaleCard time={"Last year"} totalSale={yearlyTotalSale} />
        </div>
        <div className="border-2 border-green-600 rounded-md px-2 py-4 my-5">
          <TopCustomer sale={lastYearSale} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
