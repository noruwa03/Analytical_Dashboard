import LastOrders from "../Tables/LastOrders";
import TopPlatform from "../TopPlatform/TopPlatform";

const TableAndTopPlatform = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:items-start justify-between lg:px-6 lg:pt-0 pb-6 sm:p-8 p-6 gap-6">
        <LastOrders />
        <TopPlatform />
      </div>
    </>
  );
};

export default TableAndTopPlatform;
