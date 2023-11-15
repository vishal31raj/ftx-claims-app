import { useEffect, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LockIcon from "@mui/icons-material/Lock";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "./SidemenuComponent.css";
import { sidebarMenuItems } from "../../data/Data";

const SidemenuComponent = ({ navigateToPath }) => {
  const [menuItemsState, setMenuItemsState] = useState(sidebarMenuItems);

  const menuItemClickHandler = (itemId) => {
    for (let item of menuItemsState) {
      if (item.id === itemId) {
        item.isSelected = true;
        navigateToPath(item.path);
      } else {
        item.isSelected = false;
      }
    }
    setMenuItemsState([...menuItemsState]);
  };

  useEffect(() => {
    menuItemClickHandler(1);
  }, []);

  return (
    <div className="container-card">
      {menuItemsState.map((item) => (
        <div
          className={`menu-item ${item.status === "locked" && "locked"} ${
            item.isSelected === true && "selected"
          }`}
          key={item.id}
          onClick={() => menuItemClickHandler(item.id)}
        >
          <div className={`menu-item-link`}>
            <div>
              <div
                className={`menu-item-icon ${
                  (item.status === "completed" && "completed") ||
                  (item.status === "pending" && "pending") ||
                  (item.status === "locked" && "locked")
                }`}
              >
                {item.status === "completed" && <CheckIcon />}
                {item.status === "pending" && <FiberManualRecordIcon />}
                {item.status === "locked" && <LockIcon />}
              </div>
            </div>
            <div>
              <p
                className={`step-count ${item.status === "locked" && "locked"}`}
              >
                STEP {item.id}
              </p>
              <p className="item-name">{item.name}</p>
            </div>
            {item.isLink === true && (
              <div className="link-icon">
                <NavigateNextIcon />
              </div>
            )}
          </div>
          {item.isSelected === true && (
            <div className="description-div">
              <p className="item-description">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidemenuComponent;
