import { useState } from "react";
import SidebarDash from "../../components/SidebarDash";
import { Barchartnew ,Barchartnew2} from "../../components/Barchart";
const Barcharts = () => {
  const [open,setopen] = useState<boolean>(false);
  // const [range, setrange] = useState<number>(0);
  const label1="Products";
  const label2="Customers";
  const bgcolor1="rgba(237, 223, 224, 1)";
  const bgcolor2="rgba(48, 68, 99, 1)";
  const bgcolor3="rgb(21, 179, 146)";
  const data1=[10,30,11,3,4,22,17];
  const data2=[3,6,2,4,1,4,10];
  const data3=[200,443,343,556,778,455,990,444,122,334,890,909];

  return (
    <div className="font-bold  relative flex flex-col gap-5 m-5 bg-slate-300 rounded-md p-4 min-h-[100vh] overflow-x-hidden">
      <SidebarDash open={open} />
      <div onClick={()=>setopen(e=>!e)} className="text-end font-bold cursor-pointer">Menu</div>
      <div className="w-[100%] mx-auto bg-slate-100 uppercase flex flex-col justify-center items-center m-3  text-slate-800 shadow-md rounded-xl shadow-slate-600 p-5 pb-8">
        <div className="text-2xl text-center">Top selling products and top customers</div>
        <div className="w-full text-center">
          {window.innerWidth < 760 ? (
            <Barchartnew label1={label1} label2={label2} bgcolor1={bgcolor1} bgcolor2={bgcolor2} data1={data1} data2={data2} barthickness={10} yaxis={"x"} />
          ) : (
            <Barchartnew label1={label1} label2={label2} bgcolor1={bgcolor1} bgcolor2={bgcolor2} data1={data1} data2={data2} barthickness={25} yaxis={"x"} />
          )}
        </div>
      </div>
      <div className="w-[100%] mx-auto bg-slate-100 uppercase flex flex-col justify-center items-center m-3  text-slate-800 shadow-md rounded-xl shadow-slate-600 p-5 pb-8">
        <div className="text-2xl text-center">Orders throughout the year</div>
        <div className="w-full text-center">
          {window.innerWidth < 760 ? (
            <Barchartnew2 label={label1} bgcolor={bgcolor3} dataa={data3} barthickness={10} yaxis={"y"} />
          ) : (
            <Barchartnew2 label={label1} bgcolor={bgcolor3} dataa={data3} barthickness={25} yaxis={"y"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Barcharts;
