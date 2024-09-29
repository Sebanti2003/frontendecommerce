import React from "react";
import SidebarDash from "../../components/SidebarDash";
import {
  Categoryproduct,
  PieChart2,
  RevenuemarketingCharges,
  StockAvailability,
  UserAgeGroup,
  UserandAdminCount,
} from "../../components/Barchart";
const Piecharts = () => {
  const [open, setopen] = React.useState<boolean>(false);
  return (
    <div className="font-bold  relative flex flex-col gap-5 m-5 bg-slate-100 rounded-md p-4 min-h-[100vh] overflow-x-hidden">
      <SidebarDash open={open} />
      <div
        onClick={() => setopen((e) => !e)}
        className="text-end font-bold cursor-pointer"
      >
        Menu
      </div>
      <div className="font-bold text-2xl">Pie and Doughnut Charts</div>
      <div className="flex justify-center flex-col items-center">
        <PieChart2 />
        <h1>Order Status Chart</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Categoryproduct />
        <h1>Product Categories Chart</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <StockAvailability />
        <h1>Stock Availability</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <RevenuemarketingCharges />
        <h1>Revenue and Marketing Charges</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <UserandAdminCount/>
        <h1>User and Admin</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <UserAgeGroup/>
        <h1>User Age Group</h1>
      </div>
    </div>
  );
};

export default Piecharts;
