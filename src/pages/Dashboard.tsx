import TotalSaleCard from "../components/Salse/TotalSaleCard";
import TopCustomer from "../components/TopCustomer/TopCustomer";
import { useSaleHistoryQuery } from "../redux/api/saleApi/saleApi";

const Dashboard = () => {
  const { data, isLoading } = useSaleHistoryQuery(undefined);

  const { todaySale, lastWeekSale, lastMonthSale, lastYearSale } =
    data?.data || {};

  console.log(data?.data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div>
        <div className="w-full  ">
          <TotalSaleCard time={"Today"} totalSale={56456} />
        </div>
        <div className="border-2 border-green-600 rounded-md px-2 py-4 my-5">
          <TopCustomer sale={todaySale} />
        </div>
      </div>
      <div>
        <div className="w-full ">
          <TotalSaleCard time={"Last Week"} totalSale={56456} />
        </div>
        <div className="border-2 border-green-600 rounded-md px-2 py-4 my-5">
          <TopCustomer sale={lastWeekSale} />
        </div>
      </div>
      <div>
        <div className="w-full ">
          <TotalSaleCard time={"Last Month"} totalSale={56456}/>
        </div>
        <div className="border-2 border-green-600 rounded-md px-2 py-4 my-5">
          <TopCustomer sale={lastMonthSale}/>
        </div>
      </div>
      <div>
        <div className="w-full ">
          <TotalSaleCard time={"Last year"} totalSale={56456} />
        </div>
        <div className="border-2 border-green-600 rounded-md px-2 py-4 my-5">
          <TopCustomer sale={lastYearSale}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
