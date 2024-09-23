import PaginationComponent from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const Pagination1 = ({pages}:{
    pages:number
}) => {
    console.log(pages);
    
  return (
    <div className="flex justify-center items-center">
      <Stack spacing={2}>
        {/* <PaginationComponent count={10} /> */}
        <PaginationComponent count={pages} color="primary" />
        {/* <PaginationComponent count={10} color="secondary" />
        <PaginationComponent count={10} disabled /> */}
      </Stack>
    </div>
  );
};

export default Pagination1;
