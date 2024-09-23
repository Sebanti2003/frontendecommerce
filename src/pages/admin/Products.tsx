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
const Products = () => {
  function createData(
    id: string,
    photo: string,
    name: string,
    price: number,
    stock: number
  ) {
    return {
      id,
      photo,
      name,
      price,
      stock,
    };
  }
  const [open, setopen] = useState<boolean>(false);

  const rows = [
    createData(
      "bfr6864y5regte5645",
      "data:image/jpeg;base64,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",
      "Camera",
      300,
      4000
    ),
    createData(
      "54654tgresri876543",
      "data:image/jpeg;base64,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",
      "Phone",
      900,
      5100
    ),
  ];

  return (
    <div className="font-bold relative flex flex-col gap-5 m-5 bg-slate-300 rounded-md p-4 min-h-[100vh] overflow-x-hidden">
      <SidebarDash open={open} />
      <div className="text-3xl  font-semibold flex items-center justify-between">
        <div>Products</div>
        <div className="flex justify-center gap-1 items-center">
          <NavLink to={`/admin/product/new`} className="w-8 h-8 cursor-pointer rounded-full bg-red-500 text-slate-50 text-3xl flex justify-center items-center"><div className="mb-[5px]">+</div></NavLink>
          <div
            onClick={() => setopen((t) => !t)}
            className="w-9 rounded-full  overflow-hidden h-9 p-2 cursor-pointer flex justify-center items-center m-1 border-[1px] border-black"
          >
            <div className="">{open ? <MdArrowBack /> : <MdMenu />}</div>
          </div>
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
                Photo
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="center"
              >
                Name
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="center"
              >
                Price
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="center"
              >
                Stock
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
                  <img className="w-20 h-16" src={row.photo} alt="photo" />
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  {row.name}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  {row.price}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  {row.stock}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  <NavLink
                    to={`/admin/product/${row.id}`}
                    className="p-1 bg-blue-50 border-2 border-black text-blue-800"
                  >
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

export default Products;
