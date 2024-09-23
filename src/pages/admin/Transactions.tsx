// const Transactions = () => {
//   return (
//     <div>
//       Transactions
//     </div>
//   )
// }

// export default Transactions
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import SidebarDash from "../../components/SidebarDash";
import { MdArrowBack, MdMenu } from "react-icons/md";
import Pagination1 from "../../components/Pagination.tsx";
import { NavLink } from "react-router-dom";
const Transactions = () => {
  function createData(
    id: string,
    User: string,
    Amount: number,
    Discount: number,
    Quantity: number,
    Status: string
  ) {
    return {
      id,
      User,
      Amount,
      Discount,
      Quantity,
      Status,
    };
  }
  const [open, setopen] = useState<boolean>(false);

  const rows = [
    createData("54treg4","Samantha", 200, 10, 1, "Processing"),
    createData("mj5fwsd","Rohan", 290, 78, 7, "Shipped"),
    createData("zafgkyu5807","Sohan", 300, 10, 3, "Delivered"),
  ];

  return (
    <div className="font-bold relative flex flex-col gap-5 m-5 bg-slate-300 rounded-md p-4 min-h-[100vh] overflow-x-hidden">
      <SidebarDash open={open} />
      <div className="text-3xl  font-semibold flex items-center justify-between">
        <div>Transactions</div>
        <div
          onClick={() => setopen((t) => !t)}
          className="w-9 rounded-full  overflow-hidden h-9 p-2 cursor-pointer flex justify-center items-center m-1 border-[1px] border-black"
        >
          <div className="">{open ? <MdArrowBack /> : <MdMenu />}</div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                textTransform: "capitalize",
              }}
            >
              <TableCell sx={{ fontWeight: "bold", color: "#374151" }}>
                User
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="center"
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="center"
              >
                Discount
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "#374151",
                  textAlign: "center",
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="center"
              >
                Status
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    textTransform: "lowercase",
                    fontWeight: "bold",
                  }}
                  component="th"
                  scope="row"
                >
                  {row.User}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  {row.Amount}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  {row.Discount}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                  align="center"
                >
                  {row.Quantity}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  <div className={`${row.Status === "Delivered" ? "text-violet-700" :row.Status==="Processing"?"text-red-500":"text-green-500"}`}>{row.Status}</div>
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  <NavLink to={`/admin/transaction/${row.id}`} className="p-1 bg-blue-50 border-2 border-black text-blue-800">
                    Manage
                  </NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination1 pages={2} />
    </div>
  );
};

export default Transactions;
