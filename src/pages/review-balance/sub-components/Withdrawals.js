import { useState } from "react";

import DateRangeIcon from "@mui/icons-material/DateRange";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import { CustomIconBtn, CustomTablePagination } from "./Balances";
import { Tooltip } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const WithdrawalData = [];

const Withdrawal = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="sub-component">
      <div className="sub-component-header">
        <div>
          <p className="sub-component-heading">Withdrawals</p>
        </div>
        <div className="sub-component-header-icons">
          <Tooltip title="Download CSV">
            <CustomIconBtn>
              <CloudDownloadIcon />
            </CustomIconBtn>
          </Tooltip>
          <Tooltip title="Date Range">
            <CustomIconBtn>
              <DateRangeIcon />
            </CustomIconBtn>
          </Tooltip>
        </div>
      </div>
      <TableContainer style={{ boxShadow: "none", borderRadius: "0" }}>
        <Table aria-label="simple table" style={{ backgroundColor: "#191919" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "gray", fontWeight: 600 }}>
                Time
              </TableCell>
              <TableCell style={{ color: "gray", fontWeight: 600 }}>
                Coin
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "gray", fontWeight: 600 }}
              >
                Amount
              </TableCell>
              <TableCell style={{ color: "gray", fontWeight: 600 }}>
                Destination
              </TableCell>
              <TableCell style={{ color: "gray", fontWeight: 600 }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell style={{ color: "white" }}>
                No matching records found
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CustomTablePagination
        sx={{ mt: 2 }}
        rowsPerPageOptions={[10, 15, 100]}
        component="div"
        count={WithdrawalData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Withdrawal;
