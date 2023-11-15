import { useState } from "react";

import "./ReviewBalanceComponent.css";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

import Button from "@mui/material/Button";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";

import Box from "@mui/material/Box";
import Balance from "./sub-components/Balances";
import Deposits from "./sub-components/Deposits";
import EmptyTableComponent from "./sub-components/Empty-table";
import OtherPage from "./sub-components/other-page/OtherPage";
import { CustomTab, CustomTabs } from "../../utils/StyledComponents";

const ReviewBalanceComponent = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="header-div">
        <div>
          <p className="heading">
            Portfolio &nbsp; <LockRoundedIcon />
          </p>
        </div>
        <div className="account-dropdown-div">
          <Button
            sx={{ py: 1 }}
            variant="contained"
            fullWidth="true"
            color="secondary"
          >
            Main Account
          </Button>
        </div>
      </div>
      <Button
        sx={{ py: 1, mt: 6 }}
        variant="contained"
        fullWidth="true"
        color="secondary"
      >
        Download All Core Transactions
      </Button>
      <p>
        Transactions will be downloaded for the user's main account or the
        currently selected subaccount. May not include additional balance
        adjustments. Please download these using the adjustments too.
      </p>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <CustomTabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <CustomTab label="Balances" value="1" />
              <CustomTab label="Deposits" value="2" />
              <CustomTab label="Withdrawals" value="3" />
              <CustomTab label="Positions" value="4" />
              <CustomTab label="Fills" value="5" />
              <CustomTab label="P2P Transfers" value="6" />
              <CustomTab label="Airdrops" value="7" />
              <CustomTab label="Referral Rebates" value="9" />
              <CustomTab label="Balance Adjustments" value="10" />
              <CustomTab label="Other" value="11" />
            </CustomTabs>
          </Box>
          <TabPanel value="1">
            <Balance />
          </TabPanel>
          <TabPanel value="2">
            <Deposits />
          </TabPanel>
          <TabPanel value="3">
            <EmptyTableComponent
              headingName="Withdrawals"
              tableHeaders={["Time", "Coin", "Amount", "Destination", "Status"]}
            />
          </TabPanel>
          <TabPanel value="4"></TabPanel>
          <TabPanel value="5">
            <EmptyTableComponent
              headingName="Fills"
              tableHeaders={[
                "Time",
                "Market",
                "Side",
                "Order Type",
                "Size",
                "Price",
                "Total",
              ]}
            />
          </TabPanel>
          <TabPanel value="6">
            <EmptyTableComponent
              headingName="P2P Transfers"
              tableHeaders={["Time", "Name", "Amount", "Message", "Status"]}
            />
          </TabPanel>
          <TabPanel value="7">
            <EmptyTableComponent
              headingName="Airdrops"
              tableHeaders={["Time", "Coin", "Size", "Notes", "Status"]}
            />
          </TabPanel>
          <TabPanel value="9">
            <EmptyTableComponent
              headingName="Referral Rebates"
              tableHeaders={["Time", "Amount"]}
            />
          </TabPanel>
          <TabPanel value="10">
            <EmptyTableComponent
              headingName="Balance Adjustments"
              tableHeaders={["Time", "Currency", "Size", "Description"]}
            />
          </TabPanel>
          <TabPanel value="11">
            <OtherPage />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default ReviewBalanceComponent;
