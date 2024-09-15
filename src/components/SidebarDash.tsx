import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { ImManWoman } from "react-icons/im";
import { CiMoneyBill } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { GiCoinflip } from "react-icons/gi";
const SidebarDash = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`h-[96.5%] baby w-[40%] ${
        open ? "translate-x-0" : "translate-x-[-350px]"
      } transition-all duration-300 absolute shadow-lg border-2 min-w-[250px] p-4 max-w-[300px] z-30 border-black bg-slate-100`}
    >
      <div className="flex flex-col gap-5 ">
        <div className="text-xl font-bold text-black">Logo</div>
        <div className="m-1 flex flex-col items-center justify-center gap-1">
          <div className="text-slate-500 uppercase font-mono  font-semibold mr-36">
            Dashboard
          </div>
          <div className="w-full">
            <NavLink
              to={`/admin/dashboard`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <MdSpaceDashboard />
              </div>
              <div>Dashboard</div>
            </NavLink>
            <NavLink
              to={`/admin/product`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <MdShoppingBag />
              </div>
              <div>Product</div>
            </NavLink>
            <NavLink
              to={`/admin/customers`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <ImManWoman />
              </div>
              <div>Customer</div>
            </NavLink>
            <NavLink
              to={`/admin/transactions`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <CiMoneyBill />
              </div>
              <div>Transaction</div>
            </NavLink>
          </div>
        </div>
        <div className="m-1 flex flex-col items-center justify-center gap-1">
          <div className="text-slate-500 uppercase font-mono  font-semibold mr-44">
            Charts
          </div>
          <div className="w-full">
            <NavLink
              to={`/admin/chart/bar`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <FaChartBar />
              </div>
              <div>Bar</div>
            </NavLink>
            <NavLink
              to={`/admin/chart/pie`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <FaChartPie />
              </div>
              <div>Pie</div>
            </NavLink>
            <NavLink
              to={`/admin/chart/line`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <FaChartLine />
              </div>
              <div>Line</div>
            </NavLink>
          </div>
        </div>
        <div className="m-1 flex flex-col items-center justify-center gap-1">
          <div className="text-slate-500 uppercase font-mono  font-semibold mr-44">
            Apps
          </div>
          <div className="w-full">
            <NavLink
              to={`/admin/app/stopwatch`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <FaStopwatch />
              </div>
              <div>Stopwatch</div>
            </NavLink>
            <NavLink
              to={`/admin/app/coupon`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <RiCoupon3Fill />
              </div>
              <div>Coupon</div>
            </NavLink>
            <NavLink
              to={`/admin/app/toss`}
              className={({ isActive }) =>
                `p-2 hover:bg-blue-100 m-1 flex items-center gap-4 font-semibold rounded-md ${
                  isActive ? `bg-blue-200` : ``
                }`
              }
            >
              <div className="mt-[3px]">
                <GiCoinflip />
              </div>
              <div>Toss</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDash;
