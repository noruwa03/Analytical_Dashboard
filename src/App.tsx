import { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import SalesTrends from "./components/Analytics/SalesTrends";
import TableAndTopPlatform from "./components/Analytics/TableAndTopPlatform";

function App() {
  const sideBarRef = useRef<HTMLDivElement>(null);

  const sideNavHandler = () => {
    sideBarRef.current?.classList.toggle("hidden");
  };

  return (
    <>
      <main className="font-Plus_Jakarta_Sans flex flex-row items-start justify-start relative">
        <NavBar ref={sideBarRef} />

        <div onClick={sideNavHandler} className={`lg:hidden block`}>
          <div className="w-10 h-14 rounded-tl-md rounded-bl-md bg-green-100 fixed top-[50%] right-0 -translate-y-[50%] grid place-content-center z-40">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer [&>path]:hover:stroke-black"
            >
              <path
                d="M6.56 14.5599L4 11.9999L6.56 9.43994"
                stroke="#B2ABAB"
                strokeWidth="1.5"
                strokeMiterlimit={"10"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.23982 12H4.06982"
                stroke="#B2ABAB"
                strokeWidth="1.5"
                strokeMiterlimit={"10"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.2398 12H12.2798"
                stroke="#B2ABAB"
                strokeWidth="1.5"
                strokeMiterlimit={"10"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20"
                stroke="#B2ABAB"
                strokeWidth="1.5"
                strokeMiterlimit={"10"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4C13.05 4 14.05 4.17 14.97 4.49"
                stroke="#B2ABAB"
                strokeWidth="1.5"
                strokeMiterlimit={"10"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="lg:w-[95%] w-full bg-[#FAFAFA] dark:bg-black">
          <Header />
          <SalesTrends />
          <TableAndTopPlatform />
        </div>
      </main>
    </>
  );
}

export default App;
