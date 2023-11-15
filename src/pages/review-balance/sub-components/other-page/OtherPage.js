import { useState } from "react";

import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";

import EmptyTableComponent from "../Empty-table";
import FTXAppEarn from "./FTXAppEarn";
import { CustomTab, CustomTabs } from "../../../../utils/StyledComponents";

const OtherPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <CustomTabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <CustomTab label="FTX App Earn" value="1" />
              <CustomTab label="Spot Margin Lends" value="2" />
              <CustomTab label="Spot Margin Borrows" value="3" />
              <CustomTab label="Funding Payments" value="4" />
            </CustomTabs>
          </Box>
          <TabPanel value="1">
            <FTXAppEarn />
          </TabPanel>
          <TabPanel value="2">
            <EmptyTableComponent
              headingName="Spot Margin Lends"
              tableHeaders={[
                "Time",
                "Currency",
                "Size",
                "Proceeds",
                "Proceeds in USD",
              ]}
            />
          </TabPanel>
          <TabPanel value="3">
            <EmptyTableComponent
              headingName="Spot Margin Borrows"
              tableHeaders={[
                "Time",
                "Currency",
                "Borrow Size",
                "Borrow Cost",
                "Cost in USD",
              ]}
            />
          </TabPanel>
          <TabPanel value="4">
            <EmptyTableComponent
              headingName="Funding Payments"
              tableHeaders={["Time", "Price"]}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default OtherPage;
