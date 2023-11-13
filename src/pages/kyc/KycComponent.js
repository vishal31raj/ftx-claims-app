import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";

import "./KycComponent.css";

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
    description: "Please click the link to begin the KYC process.",
    status: "not-started",
  },
  {
    id: 2,
    name: "Verified",
    description:
      "Your documents have been prepared and completed. If any additional information is required, a memeber of the FTX KYC Support team will reach out.",
    status: "verified",
  },
  {
    id: 3,
    name: "Unverified",
    description:
      "Your application failed KYC/AML checks and your clain is currently Unverified.",
    status: "pending",
  },
  {
    id: 4,
    name: "Processing",
    description:
      "Your application is currently under review, please check back shortly.",
    status: "pending",
  },
  {
    id: 5,
    name: "On Hold",
    description:
      "Your documents have been processed and are currently on hold. If any additional information is required, a memeber of the FTX KYC Support team will reach out.",
    status: "pending",
  },
  {
    id: 6,
    name: "Documents Requested",
    description:
      "Please click the link to return to the KYC platform to upload additional requested documentation.",
    status: "error",
  },
];

const KycComponent = () => {
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
      <p className="heading">KYC Process</p>
      <p className="sub-heading">KYC Status: Verified</p>

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
            KYC Status Explanation
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
                    KYC Status
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
          remaining essentially unchanged.{" "}
        </p>

        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>

        <p className="note-text">
          Note there are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>

        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
      </div>

      {isLoading === false ? (
        <Button
          sx={{ my: 3, py: 1 }}
          variant="contained"
          fullWidth="true"
          onClick={beginKycProcessBtnHandler}
        >
          <span>Begin KYC Process</span>
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

export default KycComponent;
