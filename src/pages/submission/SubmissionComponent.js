import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";

import "./SubmissionComponent.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import CheckIcon from "@mui/icons-material/Check";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const KYCStatusExplanations = [
  {
    id: 1,
    name: "Not Started",
    description: "Please click the link to begin the claims process.",
    status: "not-started",
  },
  {
    id: 2,
    name: "Claims(s) Submitted",
    description:
      "Customers who have submitted a proof of claim via the Kroll portal. Customer who filed proofs of claim without logging in through the FTX portal will not see the status reflected herein.",
    status: "pending",
  },
  {
    id: 3,
    name: "Agreed Scheduled Claim(s)",
    description:
      "Customers who have agreed with the amounts or quantities set forth on the Debtor's Schedules as amended on June 27, 2023 via the Kroll portal and the schedule is not noted as contingent, disputed, and/or unliquidated.",
    status: "verified",
  },

  {
    id: 4,
    name: "Needs Attention",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "error",
  },
];

const SubmissionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const beginKycProcessBtnHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.open("https://www.google.com", "_blank");
    }, 2000);
  };

  const onToggleAccordion = (event, expanded) => {
    setIsAccordionOpen(expanded);
  };

  return (
    <>
      <p className="heading">File Proof of Claims</p>
      <p className="sub-heading">FTX Trading Ltd. Claim Status: Agreed Scheduled Claims (2)</p>

      <Accordion
        style={{ boxShadow: "none" }}
        defaultExpanded="true"
        onChange={onToggleAccordion}
      >
        <AccordionSummary
          sx={{ p: 0, m: 0 }}
          style={{ backgroundColor: "#191919", color: "white" }}
        >
          <p className="sub-heading acc-header">
            Claim Status Explanation
            {isAccordionOpen === true ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
          </p>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0, m: 0 }}>
          <TableContainer
            style={{ boxShadow: "none", borderRadius: "0" }}
          >
            <Table
              aria-label="simple table"
              style={{ backgroundColor: "#191919" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "white", fontWeight: 600 }}>
                    Claim Status
                  </TableCell>
                  <TableCell style={{ color: "white", fontWeight: 600 }}>
                    Explanation of Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {KYCStatusExplanations.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell style={{ color: "white" }}>
                      <div className="kyc-status">
                        <div>
                          <div
                            className={`menu-item-icon size-small ${
                              row.status === "verified"
                                ? "completed"
                                : "pending"
                            }`}
                          >
                            {row.status === "verified" && (
                              <CheckIcon fontSize="small" />
                            )}
                            {row.status === "not-started" && (
                              <FiberManualRecordIcon fontSize="small" />
                            )}
                            {row.status === "pending" && (
                              <AutorenewIcon fontSize="small" />
                            )}
                            {row.status === "error" && (
                              <ReportProblemRoundedIcon fontSize="small" />
                            )}
                          </div>
                        </div>
                        <div className="status-text">{row.name}</div>
                      </div>
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      {row.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      <div className="explaination-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>

      {isLoading === false ? (
        <Button
          sx={{ my: 3, py: 1 }}
          variant="contained"
          fullWidth="true"
          onClick={beginKycProcessBtnHandler}
        >
          <span>File Proof of Claim</span>
        </Button>
      ) : (
        <Button
          sx={{ my: 3, py: 1 }}
          loading
          disabled
          variant="outlined"
          fullWidth="true"
        >
          <CircularProgress size="1.5rem" />
        </Button>
      )}
    </>
  );
};

export default SubmissionComponent;
