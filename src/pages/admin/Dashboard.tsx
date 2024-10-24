import { useCallback, useEffect, useState } from "react";
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
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Barchart, PieChart } from "../../components/Barchart";
import React from "react";
import { useAppSelector } from "../../store/hook.ts";
import axios from "axios";
const TableHOC = React.lazy(() => import("../../components/TableHOC.tsx"));
ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);
const Dashboard = () => {
  const [photo,setphoto]=useState<string>("");
  const [person,setperson]=useState({
    dob: "",
    email: "",
    gender: "",
    name: "",
    photo: "",
    role: "",
    _id: ""
  });
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
  const authen = useAppSelector((state) => state.authenticatedornot.auth);
  const id = useAppSelector((state) => state.authenticatedornot.value);
  const fetchinfo = useCallback(async () => {
    try {
      if (!authen) {
        return;
      }
      const info = await axios.get(
        `https://backendecommerce-megaproject.onrender.com/api/v1/users/${id}`
      );
      setperson(info.data.user);
      setphoto(info.data.user.photo);
    } catch (error) {
      console.log(error);
    }
  }, [id, authen]);
  useEffect(() => {
    fetchinfo();
  }, [fetchinfo]);
  console.log(photo===person.photo);
  
  return (
    <div className="flex flex-col relative min-h-[100vh] p-4 overflow-x-hidden">
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
              src={photo}
              alt=""
            />
          </div>
          <div
            onClick={() => setopen((t) => !t)}
            className="w-9 rounded-full  overflow-hidden h-9 p-2 cursor-pointer flex justify-center items-center m-1 border-[1px] border-black"
          >
            <div className="">{open ? <MdArrowBack /> : <MdMenu />}</div>
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
        <div className="w-[100%] md:w-[70%] bg-slate-100 flex flex-col justify-center items-center m-3  text-slate-800 shadow-md rounded-xl shadow-slate-600 p-5 pb-8">
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
            <div className="text-xl mt-14 text-slate-700">
              <ImManWoman />
            </div>
          </div>
        </div>
        <div className="flex-1 max-md:w-full  shadow-md rounded-xl shadow-slate-600 p-5 m-2">
          <div className="text-2xl text-slate-800 uppercase flex flex-col gap-5">
            <p>Table of the day</p>
            <TableHOC />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
