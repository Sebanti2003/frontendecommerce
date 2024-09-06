import { useState } from "react";
import SidebarDash from "../../components/SidebarDash";

const Dashboard = () => {
  const [open] = useState<boolean>(true);
  // const [range, setrange] = useState<number>(0);
  return (
    <div className="p-3 flex relative min-h-[100vh] ">
     <SidebarDash open={open}/>
    </div>
  );
};

export default Dashboard;
