import "./HeaderComponent.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HeaderComponent = () => {
  const navItems = [
    {
      id: 1,
      name: "Privacy",
      type: "link",
    },
    {
      id: 2,
      name: "FAQ",
      type: "link",
    },
    {
      id: 3,
      name: "Support",
      type: "link",
    },
    {
      id: 4,
      name: "English",
      type: "dropdown",
    },
    {
      id: 5,
      name: "My account",
      type: "dropdown",
    },
  ];

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
        {navItems.map((item) => (
          <div className="nav-item" key={item.id}>
            {item.name} {item.type === "dropdown" && <ArrowDropDownIcon />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;
