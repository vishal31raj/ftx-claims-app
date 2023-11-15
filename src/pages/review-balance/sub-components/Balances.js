import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Box } from "@mui/material";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import "./SubComponent.css";
import { CustomCheckbox, CustomIconBtn, CustomTablePagination, CustomTextField } from "../../../utils/StyledComponents";
import { balancesData } from "../../../data/Data";

const Balance = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isSearchSelected, setIsSearchSelected] = useState(false);

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
          {isSearchSelected === false ? (
            <p className="sub-component-heading">Balances</p>
          ) : (
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SearchIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
              <CustomTextField
                id="input-with-sx"
                variant="standard"
                InputProps={{
                  style: { color: "gray" },
                }}
              />
              <CustomIconBtn onClick={() => setIsSearchSelected(false)}>
                <CloseIcon color="error" />
              </CustomIconBtn>
            </Box>
          )}
        </div>
        <div className="sub-component-header-icons">
          <Tooltip title="Search">
            <CustomIconBtn onClick={() => setIsSearchSelected(true)}>
              <SearchIcon />
            </CustomIconBtn>
          </Tooltip>
          <Tooltip title="Download CSV">
            <CustomIconBtn>
              <CloudDownloadIcon />
            </CustomIconBtn>
          </Tooltip>
          <FormGroup sx={{ ml: 2 }}>
            <FormControlLabel
              control={<CustomCheckbox color="primary" sx={{ p: 1 }} />}
              label="Hide zero balances"
            />
          </FormGroup>
        </div>
      </div>
      <TableContainer style={{ boxShadow: "none", borderRadius: "0" }}>
        <Table aria-label="simple table" style={{ backgroundColor: "#191919" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "gray", fontWeight: 600 }}>
                Coin
              </TableCell>
              <TableCell style={{ color: "gray", fontWeight: 600 }}>
                All Subaccounts Balance
              </TableCell>
              <TableCell style={{ color: "gray", fontWeight: 600 }}>
                Subaccount Balance
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {balancesData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ color: "white" }}>
                  <div className="kyc-status">
                    <div></div>
                    <div className="status-text">{row.name}</div>
                  </div>
                </TableCell>
                <TableCell style={{ color: "white" }}>
                  {row.allSubaccountsBalance}
                </TableCell>
                <TableCell style={{ color: "white" }}>
                  {row.subaccountBalance}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomTablePagination
        sx={{ mt: 2 }}
        rowsPerPageOptions={[10, 15, 100]}
        component="div"
        count={balancesData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Balance;
