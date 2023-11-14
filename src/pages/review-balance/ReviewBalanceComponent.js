import { useState } from "react";
import { styled } from '@mui/material/styles';

import "./ReviewBalanceComponent.css";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

import Button from "@mui/material/Button";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Balance from "./sub-components/Balances";
import Deposits from "./sub-components/Deposits";
import Withdrawal from "./sub-components/Withdrawals";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    marginRight: theme.spacing(1),
    color: "gray",
    fontWeight: '600',
    fontSize: '18px',
    "&:hover": {
      color: "silver",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1890ff",
      fontWeight: '600',
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

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
            <AntTabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <AntTab label="Balances" value="1" />
              <AntTab label="Deposits" value="2" />
              <AntTab label="Withdrawals" value="3" />
              <AntTab label="Positions" value="4" />
              <AntTab label="Fills" value="5" />
              <AntTab label="P2P Transfers" value="6" />
              <AntTab label="Airdrops" value="7" />
              <AntTab label="Withdrawals" value="8" />
              <AntTab label="Referral Rebates" value="9" />
              <AntTab label="Balance Adjustments" value="10" />
              <AntTab label="Other" value="11" />
            </AntTabs>
          </Box>
          <TabPanel sx={{ px:0 }} value="1">
            <Balance />
          </TabPanel>
          <TabPanel value="2">
            <Deposits />
          </TabPanel>
          <TabPanel value="3">
            <Withdrawal />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default ReviewBalanceComponent;
