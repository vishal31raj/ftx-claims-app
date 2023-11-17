import { useEffect, useState } from "react";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import { Tooltip } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import {
  CustomIconBtn,
  CustomTablePagination,
} from "../../../../utils/StyledComponents";import { FTXAppEarnData } from "../../../../data/Data";
;

const FTXAppEarn = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isPageLoading === true ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="sub-component">
          <div className="sub-component-header">
            <div>
              <p className="sub-component-heading">FTX App Earn</p>
            </div>
            <div className="sub-component-header-icons">
              <Tooltip title="Download CSV">
                <CustomIconBtn>
                  <CloudDownloadIcon />
                </CustomIconBtn>
              </Tooltip>
            </div>
          </div>
          <TableContainer style={{ boxShadow: "none", borderRadius: "0" }}>
            <Table
              aria-label="simple table"
              style={{ backgroundColor: "#191919" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "gray", fontWeight: 600 }}>
                    Time
                  </TableCell>
                  <TableCell style={{ color: "gray", fontWeight: 600 }}>
                    Currency
                  </TableCell>
                  <TableCell style={{ color: "gray", fontWeight: 600 }}>
                    Size
                  </TableCell>
                  <TableCell style={{ color: "gray", fontWeight: 600 }}>
                    Size (USD)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {FTXAppEarnData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell style={{ color: "white" }}>{row.time}</TableCell>
                    <TableCell style={{ color: "white" }}>
                      {row.currency}
                    </TableCell>
                    <TableCell style={{ color: "white" }}>{row.size}</TableCell>
                    <TableCell style={{ color: "white" }}>
                      {row.sizeUSD}
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
            count={FTXAppEarnData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      )}
    </>
  );
};

export default FTXAppEarn;
