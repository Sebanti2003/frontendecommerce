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
const Customers = () => {
  function createData(
    Avatar: string,
    Name: string,
    Gender: string,
    Email: string,
    Role: string
  ) {
    return {
      Avatar,
      Name,
      Gender,
      Email,
      Role,
    };
  }
  const [open, setopen] = useState<boolean>(false);

  const rows = [
    createData(
      "data:image/jpeg;base64,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",
      "John Doe",
      "Male",
      "5wvzJ@example.com",
      "admin"
    ),
    createData(
      "data:image/jpeg;base64,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",
      "John Doe",
      "Male",
      "5wvzJ@example.com",
      "admin"
    ),
  ];

  return (
    <div className="font-bold relative flex flex-col gap-5 m-5 bg-slate-300 rounded-md p-4 min-h-[100vh] overflow-x-hidden">
      <SidebarDash open={open} />
      <div className="text-3xl  font-semibold flex items-center justify-between">
        <div>Customers</div>
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
                Avatar
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
                Gender
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" ,textAlign:"center"}}
              >
                Email
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="center"
              >
                Role
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
                  <img className="w-14 h-14 rounded-full" src={row.Avatar} alt="photo" />
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  {row.Name}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  {row.Gender}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" ,textAlign:"center"}} align="center">
                  {row.Email}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  {row.Role}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  <button className="p-1 bg-blue-50 border-2 border-black text-red-800">
                    Delete
                  </button>
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

export default Customers;
