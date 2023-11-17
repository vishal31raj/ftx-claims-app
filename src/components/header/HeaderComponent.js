import { useState } from "react";
import { topNavigationItems } from "../../data/Data";

import "./HeaderComponent.css";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TranslateIcon from "@mui/icons-material/Translate";
import { Menu, MenuItem } from "@mui/material";

const HeaderComponent = () => {
  const [translationAnchorEl, setTranslationAnchorEl] = useState(null);
  const openTranslationDropdown = Boolean(translationAnchorEl);

  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const openAccountDropdown = Boolean(accountAnchorEl);

  const dropdownClickHandler = (event, item) => {
    if (item.type === "dropdown") {
      if (item.id === 4) {
        setTranslationAnchorEl(event.currentTarget);
      } else if (item.id === 5) {
        setAccountAnchorEl(event.currentTarget);
      }
    }
  };

  const handleClose = (item) => {
    if (item.id === 4) {
      setTranslationAnchorEl(null);
    } else if (item.id === 5) {
      setAccountAnchorEl(null);
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img
          alt=""
          src={process.env.PUBLIC_URL + "ftx-header-logo.png"}
          height="100%"
          width="100%"
        />
      </div>
      <div className="nav-items">
        {topNavigationItems.map((item) => (
          <div key={item.id}>
            <div
              className="nav-item"
              onClick={(event) => dropdownClickHandler(event, item)}
            >
              {item.id === 4 && <TranslateIcon sx={{ mr: 1 }} />}
              {item.name} {item.type === "dropdown" && <ArrowDropDownIcon />}
            </div>
            {item.id === 4 && (
              <Menu
                anchorEl={translationAnchorEl}
                open={openTranslationDropdown}
                onClose={() => handleClose(item)}
                PaperProps={{
                  style: {
                    backgroundColor: "#4c4c4c",
                    color: "#fff",
                  },
                }}
              >
                {item.options.map((option) => (
                  <MenuItem key={option.code} onClick={() => handleClose(item)}>
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
            )}

            {item.id === 5 && (
              <Menu
                anchorEl={accountAnchorEl}
                open={openAccountDropdown}
                onClose={() => handleClose(item)}
                PaperProps={{
                  style: {
                    backgroundColor: "#4c4c4c",
                    color: "#fff",
                    padding: "16px",
                  },
                }}
              >
                <div style={{ padding: "0 8px" }}>
                  {item.info.map((info) => (
                    <p sx={{ m: 0 }} key={info.key}>
                      <span className="my-account-info-key">{info.key}: </span>
                      <span className="my-account-info-value">
                        {info.value}
                      </span>
                    </p>
                  ))}
                  <hr />
                </div>

                <MenuItem sx={{ py: 1 }} onClick={() => handleClose(item)}>
                  Settings
                </MenuItem>
                <MenuItem
                  sx={{ py: 1 }}
                  onClick={() => handleClose(item)}
                  style={{ color: "salmon" }}
                >
                  Logout
                </MenuItem>
              </Menu>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;
