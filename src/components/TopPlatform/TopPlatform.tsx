const TopPlatform = () => {
  return (
    <>
      <div className="lg:w-[42%] w-[100%] bg-white dark:bg-[#0e1111] dark:text-white rounded-2xl shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] p-4">
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-semibold text-sm">Top Platform</h2>
          <p className="text-sm text-[#34CAA5] font-semibold">See All</p>
        </div>
        <div className="flex flex-col items-start justify-start space-y-4 my-4">
          <div className="w-full">
            <h3 className="font-semibold text-sm">Book Bazaar</h3>
            <div className="w-full rounded-full bg-[#F5F5F5] my-3">
              <div className="w-[50%] h-3 rounded-full bg-[#6160DC]"></div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-[#525252]  text-sm"> $2,500,000</h4>
              <p className="text-sm text-[#525252]">+15%</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-semibold text-sm">Artisan Aisle</h3>
            <div className="w-full rounded-full bg-[#F5F5F5] my-3">
              <div className="w-[40%] h-3 rounded-full bg-[#54C5EB]"></div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-[#525252]  text-sm"> $1,800,000</h4>
              <p className="text-sm text-[#525252]">+10%</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-semibold text-sm">Toy Troop</h3>
            <div className="w-full rounded-full bg-[#F5F5F5] my-3">
              <div className="w-[30%] h-3 rounded-full bg-[#FFB74A]"></div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-[#525252]  text-sm"> $1,200,000</h4>
              <p className="text-sm text-[#525252]">+8%</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-semibold text-sm">XStore</h3>
            <div className="w-full rounded-full bg-[#F5F5F5] my-3">
              <div className="w-[20%] h-3 rounded-full bg-[#FF4A55]"></div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-[#525252]  text-sm"> $200,000</h4>
              <p className="text-sm text-[#525252]">+14%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPlatform;
