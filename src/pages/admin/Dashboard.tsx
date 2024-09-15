import { useState } from "react";
import SidebarDash from "../../components/SidebarDash";
import { MdArrowBack, MdMenu, MdSearch } from "react-icons/md";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { ImManWoman } from "react-icons/im";
import CircularProgress from "../../components/CircularProgress";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Barchart, PieChart } from "../../components/Barchart";
ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  const [open, setopen] = useState<boolean>(false);
  // const [percentage, setpercentage] = useState<number>(49);
  // const [range, setrange] = useState<number>(0);
  const upperdata: {
    name: string;
    value?: number;
    increase: string;
    amount?: string;
  }[] = [
    {
      name: "Revenue",
      amount: "$340000",
      increase: "+40%",
    },
    {
      name: "users",
      value: 400,
      increase: "-19%",
    },
    {
      name: "transactions",
      amount: "$230000",
      increase: "+80%",
    },
    {
      name: "Products",
      value: 1000,
      increase: "+30%",
    },
  ];
  const categories: {
    name: string;
    value: number;
    percentage: string;
  }[] = [
    {
      name: "Laptop",
      value: 90,
      percentage: "19%",
    },
    {
      name: "Mobile",
      value: 60,
      percentage: "73%",
    },
    {
      name: "Tablet",
      value: 20,
      percentage: "26%",
    },
    {
      name: "Desktop",
      value: 90,
      percentage: "89%",
    },
  ];
  return (
    <div className="p-3 flex flex-col relative min-h-[100vh] ">
      <SidebarDash open={open} />
      <div className="w-full text-xl border-b-2 border-slate-500 min-h-10 max-h-14 flex items-center p-1 justify-around">
        <div className="flex w-[60%] md:w-[90%] items-center gap-3 mx-2 ">
          <div className="text-xl flex items-center justify-center cursor-pointer">
            <MdSearch />
          </div>
          <input
            type="text"
            className="p-2 w-[80%] rounded-xl outline-none"
            placeholder="Search for docs files and info"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xl cursor-pointer">
            <IoNotificationsCircleOutline />
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div
            onClick={() => setopen((t) => !t)}
            className="w-10 rounded-full h-10 p-2 cursor-pointer flex justify-center items-center m-1 border-[1px] border-black"
          >
            {open ? <MdArrowBack /> : <MdMenu />}
          </div>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-1 justify-items-center place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {upperdata.map((e) => {
          return (
            <div
              className=" shadow-lg border-2 border-slate-500 max-sm:h-[30vw]  text-lg min-h-32 m-2 p-2 w-[90%] font-semibold flex items-center justify-around gap-1"
              key={e.name}
            >
              <div className="flex flex-col text-xl justify-center items-start">
                <div className="capitalize text-sm text-slate-700">
                  {e.name}
                </div>
                <div className={`${e.amount ? `text-slate-900 italic` : ``}`}>
                  {e.amount ? e.amount : e.value}
                </div>
                <div
                  className={`${
                    e.increase.includes("-")
                      ? `text-red-500 `
                      : `text-green-500`
                  } flex items-center gap-1`}
                >
                  <div>
                    {e.increase.includes("-") ? (
                      <div>
                        <FaArrowTrendDown />
                      </div>
                    ) : (
                      <div>
                        <FaArrowTrendUp />
                      </div>
                    )}
                  </div>
                  <div>
                    {e.increase.includes("-")
                      ? e.increase.replace("-", "")
                      : e.increase.includes("+")
                      ? e.increase.replace("+", "")
                      : e.increase}
                  </div>
                </div>
              </div>
              {/* <div className="p-2 bg-red-400 rounded-full py-6">
                circle
              </div> */}
              <CircularProgress percentage={parseInt(e.increase)} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row md:items-start justify-center items-center">
        <div className="w-[100%] md:w-[80%] bg-slate-100 flex flex-col justify-center items-center m-3  text-slate-800 shadow-md rounded-xl shadow-slate-600 p-5 pb-8">
          <div className="text-2xl">REVENUE & TRANSACTION</div>
          <div className="w-full text-center">
            {window.innerWidth < 760 ? (
              <Barchart barthickness={10} yaxis={"x"} />
            ) : (
              <Barchart barthickness={25} yaxis={"x"} />
            )}
          </div>
        </div>
        <div className=" max-md:w-full bg-slate-100 flex-1  mt-3 text-slate-800 min-h-full shadow-md rounded-xl shadow-slate-600 p-5 flex flex-col  justify-center pb-8">
          <div className="text-2xl text-center">INVENTORY</div>
          {categories.map((e) => {
            return (
              <div
                key={e.name}
                className="flex m-3 items-center gap-4 justify-between"
              >
                <div className="font-semibold">{e.name}</div>
                <div className="w-full h-1 mt-1 overflow-hidden bg-slate-500 rounded-2xl">
                  <div
                    className={`h-full`}
                    style={{
                      backgroundColor: `hsl(${
                        parseInt(e.percentage.split("%")[0]) * 4
                      }, 100%, 50%)`,
                      width: `${e.percentage}`,
                    }}
                  ></div>
                </div>
                <div className="font-semibold">{e.value}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row  md:items-start justify-center items-center">
        <div className="w-[20%] relative max-md:w-[60%] flex flex-col justify-center items-center shadow-md rounded-xl shadow-slate-600 m-2">
          <div className="text-xl font-mono text-slate-800">GENDER RATIO</div>
          <PieChart />
          <div className="absolute z-[-1] top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <div className="text-xl mt-14 text-slate-700"><ImManWoman/></div>
          </div>
        </div>
        <div className="flex-1 max-md:w-full  shadow-md rounded-xl shadow-slate-600 p-5 m-2">
          <div className="text-2xl text-slate-800 uppercase text-center">Table format of the day</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
