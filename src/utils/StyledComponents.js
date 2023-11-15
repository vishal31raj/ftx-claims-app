import { styled } from "@mui/material/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TablePagination from "@mui/material/TablePagination";
import { IconButton, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

export const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

export const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    marginRight: theme.spacing(1),
    color: "gray",
    fontWeight: "600",
    fontSize: "18px",
    "&:hover": {
      color: "silver",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1890ff",
      fontWeight: "600",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

export const CustomTablePagination = styled(TablePagination)`
  color: silver;
  border-top: 1px solid #4c4c4c;
  border-bottom: 1px solid #4c4c4c;
`;

export const CustomTextField = styled(TextField)`
  border-bottom: 1px solid gray;
`;

export const CustomCheckbox = styled(Checkbox)`
  color: #fff;

  :hover {
    background-color: #4c4c4c;
  }
`;

export const CustomIconBtn = styled(IconButton)`
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