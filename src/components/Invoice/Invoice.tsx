type InvoiceType = {
  close: () => void;
};

const Invoice = ({ close }: InvoiceType) => {
  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 h-full w-full oveflow-y-auto bg-green-900/25 z-[25]">
        <div className="lg:w-[35%] w-[90%] fixed lg:top-[55%] top-[52%] lg:left-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] mx-auto lg:p-5 p-4 bg-white dark:bg-[#0e1111] dark:border-[1px] dark:border-green-50 rounded-xl">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z"
                  fill="#34CAA5"
                />
              </svg>

              <h1 className="font-semibold text-black dark:text-white">Invoice</h1>
            </div>
            <div
              onClick={close}
              className="text-base font-semibold text-red-400 cursor-pointer"
            >
              Close
            </div>
          </div>

          <div className="lg:p-4 p-4 rounded-xl bg-gray-50 dark:bg-green-900/25 dark:text-white space-y-4 my-7">
            <div className="flex flex-row items-start justify-between">
              <h1 className="lg:text-base text-sm font-medium">Date</h1>
              <p className="text-sm font-medium">Nov 15, 2023</p>
            </div>
            <div className="flex flex-row items-start justify-between">
              <h1 className="lg:text-base text-sm font-medium">Status</h1>
              <p className="text-base font-medium text-[#34CAA5]">Paid</p>
            </div>
            <div className="flex flex-row items-start justify-between">
              <h1 className="lg:text-base text-sm font-medium">Amount</h1>
              <p className="text-sm font-medium">$150,000</p>
            </div>
          </div>
          <div className="grid place-content-end mt-4">
            <button className="text-[#34CAA5] uppercase font-semibold">
              Print
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
