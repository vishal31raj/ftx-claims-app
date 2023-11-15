import { useState } from "react";

import DateRangeIcon from "@mui/icons-material/DateRange";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Tooltip } from "@mui/material";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {
  CustomIconBtn,
  CustomTablePagination,
} from "../../../utils/StyledComponents";

const EmptyTableComponent = ({ headingName, tableHeaders }) => {
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
          <p className="sub-component-heading">{headingName}</p>
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
              {tableHeaders.map((columnName) => (
                <TableCell
                  key={columnName}
                  style={{ color: "gray", fontWeight: 600 }}
                >
                  {columnName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <div className="no-matching-data-msg">No matching records found</div>
      <CustomTablePagination
        sx={{ mt: 2 }}
        rowsPerPageOptions={[10, 15, 100]}
        component="div"
        count={0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default EmptyTableComponent;
