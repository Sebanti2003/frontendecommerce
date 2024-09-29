import React from "react";
import { Linechartone } from "../../components/Barchart";
import SidebarDash from "../../components/SidebarDash";

const Linecharts = () => {
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
      <div className="text-3xl font-bold">Line Charts</div>
      <div>
        <Linechartone
          barthickness={2}
          yaxis="x"
          label="Users"
          borderColor={"rgb(53,162,255)"}
          bgcolor={"rgba(53,162,255,0.5)"}
          dataa={[
            200,444,444,556,778,455,990,1444,256,447,1000,1200
          ]}
        />
        <div className="text-center uppercase tracking-wider">Active Users</div>
      </div>
      <div>
        <Linechartone
          barthickness={2}
          yaxis="x"
          label="Products"
          borderColor={"hsl(269,80%,40%)"}
          bgcolor={"hsla(269,80%,40%,0.4)"}
          dataa={[
            40,60,244,100,143,120,41,47,50,56,32,36
          ]}
        />
        <h1 className="text-center uppercase tracking-wider">Total Products(SKU)</h1>
      </div>
      <div>
        <Linechartone
          barthickness={2}
          yaxis="x"
          label="Revenue"
          borderColor={"hsl(129,80%,40%)"}
          bgcolor={"hsla(129,80%,40%,0.4)"}
          dataa={[
            50000, 14400, 24100, 34300, 90000, 20000, 25600, 44700, 99000,
            144400, 100000, 120000,
          ]}
        />
        <h1 className="text-center uppercase tracking-wider">Total revenue</h1>
      </div>
      <div>
        <Linechartone
          barthickness={2}
          yaxis="x"
          label="Discounts"
          borderColor={"hsl(29,80%,40%)"}
          bgcolor={"hsla(29,80%,40%,0.4)"}
          dataa={[
            9000,12000,12000,9000,1000,5000,4000,1200,1100,1500,2000,5000
          ]}
        />
        <h1 className="text-center uppercase tracking-wider">Discounts Alloted</h1>
      </div>
    </div>
  );
};

export default Linecharts;
