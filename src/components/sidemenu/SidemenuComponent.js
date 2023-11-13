import { useEffect, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LockIcon from "@mui/icons-material/Lock";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "./SidemenuComponent.css";

const menuItems = [
  {
    id: 1,
    name: "Initiate Account Owner Authentication",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isSelected: false,
    isLink: false,
    status: "completed",
    path: "owner-authentication",
  },
  {
    id: 2,
    name: "Verify Identity of the Original FTX Account Owner",
    description:
      "To ensure the accuracy of your email address on record, please initiate the verfication process by requesting a confirmation email. Upon receipt, kindly click on the enclosed link to complete the verification.",
    isSelected: false,
    isLink: true,
    status: "completed",
    path: "confirm-email",
  },
  {
    id: 3,
    name: "KYC",
    description:
      "Complete the Know Your Customer (KYC) process to verify the identity of the original FTX account owner. This step ensures that the account is compliant with regulations and helps to verify your identity.",
    isSelected: false,
    isLink: true,
    status: "completed",
    path: "redo-kyc",
  },
  {
    id: 4,
    name: "Review Account Balance",
    description:
      "View your FTX account -- you can view your balances as of the petition Date (unless otherwise needed), and historical activity.",
    isSelected: false,
    isLink: true,
    status: "pending",
    path: "wallet",
  },
  {
    id: 5,
    name: "Submission of Electronic Proof of Claim",
    description:
      "You will be directed to the Kroll Restructuting Administration platform to confirm your balances as of the Petition Date, and, if necessary, submit an electronic proof of claim.",
    isSelected: false,
    isLink: true,
    status: "completed",
    path: "kroll-portal",
  },
  {
    id: 6,
    name: "Standby for Next Steps",
    description: "",
    isSelected: false,
    isLink: false,
    status: "locked",
    path: "",
  },
];

const SidemenuComponent = (props) => {
  const [menuItemsState, setMenuItemsState] = useState(menuItems);

  const menuItemClickHandler = (itemId) => {
    for (let item of menuItemsState) {
      if (item.id === itemId) {
        item.isSelected = true;
        props.navigate(item.path);
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
