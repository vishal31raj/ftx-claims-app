import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Box, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

import "./SubComponent.css";

const CustomTablePagination = styled(TablePagination)`
  color: silver;
  border-top: 1px solid #4c4c4c;
  border-bottom: 1px solid #4c4c4c;
`;

const CustomTextField = styled(TextField)`
  border-bottom: 1px solid gray;
`;

const CustomCheckbox = styled(Checkbox)`
  color: #fff;

  :hover {
    background-color: #4c4c4c;
  }
`;

const CustomIconBtn = styled(IconButton)`
  color: #fff;
  margin: 0 2px;

  :hover {
    background-color: #4c4c4c;
    color: #1976d2;
  }

  :active {
    color: #1976d2;
  }
`;

const BalancesData = [
  {
    id: 1,
    name: "USD Tether (USDT)",
    allSubaccountsBalance: "0.00",
    subaccountBalance: "0.00",
  },
  {
    id: 2,
    name: "Bitcoin (BTC)",
    allSubaccountsBalance: "0.43647915",
    subaccountBalance: "0.43647915",
  },
  {
    id: 3,
    name: "Binance Coin (BNB)",
    allSubaccountsBalance: "1.08820898",
    subaccountBalance: "1.08820898",
  },
  {
    id: 4,
    name: "TRON (TRX)",
    allSubaccountsBalance: "1",
    subaccountBalance: "1",
  },
];

const Balance = () => {
  const [isSearchSelected, setIsSearchSelected] = useState(false);

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
            {BalancesData.map((row) => (
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
        count={BalancesData.length}
        rowsPerPage="10"
        page={0}
        //   onPageChange={handleChangePage}
        //   onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Balance;
