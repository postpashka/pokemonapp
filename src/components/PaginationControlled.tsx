import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";

const firstIndex = 0;
const defaultPageSize = 12;

export default function PaginationControlled({itemsData, ItemsComponent}:any) {
  const [pageSize, setPageSize] = React.useState(defaultPageSize);
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState(itemsData.slice(firstIndex, pageSize));

  React.useEffect(() => {
    setData(itemsData.slice(0, pageSize));
  }, [pageSize]);

  const handleChange = (event:any, value:any) => {
    setPage(value);
    setData(itemsData.slice(firstIndex + pageSize * (value - 1), pageSize * value));
  };

  const changeWidth = (e:any) => {
    setPageSize(parseInt(e.target.value, 10));
    setPage(1);
  };

  return (
    <div className="root">
      <ItemsComponent
        currentItems={data}
      />
      <Box sx={{ py: 2}}>
        <Paper >
          <Toolbar>
            <Pagination
              count={Math.ceil(itemsData.length / pageSize)}
              page={page}
              onChange={handleChange}
            />

            <TextField
              select
              defaultValue={defaultPageSize}
              variant="standard"
              onChange={changeWidth} 
              value={pageSize}
            >
              {[12, 24, 36].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

          </Toolbar>
        </Paper>
      </Box>
    </div>
  );
}
