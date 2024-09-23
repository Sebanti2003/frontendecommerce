// import {useTable,Column} from 'react-table'
// type TypeHoc<T extends object>={
//     colums:Column<T>[],
//     data:T[],
//     containerClassname:string,
//     heading:string
// }
// const TableHOC = function<T extends object>({
//   colums,
//   data,
//   containerClassname,
//   heading
// }:TypeHoc<T>){
//   return function HOC(){
//     return <div>hi</div>
//   }
// }

// export default TableHOC
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  id: string,
  quantity: number,
  discount: number,
  amount: number,
  status: string
) {
  return {
    id,
    quantity,
    discount,
    amount,
    status,
  };
}

const rows = [
  createData("bdskldebf3", 4, 300, 4000, "Processing"),
  createData("wmerklmwre", 2, 900, 5100, "Processing"),
  createData("wmreoi343i", 91, 0, 13000, "Shipped"),
  createData("mgtro943i4", 4, 2000, 2300, "Delivered"),
  createData("lowewjpcno", 7, 894, 4780, "Processing"),
];

export default function TableHOC() {
  return (
    <div className="font-bold">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                textTransform: "capitalize",
              }}
            >
              <TableCell sx={{ fontWeight: "bold", color: "#374151" }}>
                Id
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="right"
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="right"
              >
                Discount
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="right"
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#374151" }}
                align="right"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
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
                  {row.id}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  {row.quantity}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  {row.discount}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  {row.amount}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
