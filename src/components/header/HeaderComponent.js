import { topNavigationItems } from "../../data/Data";
import "./HeaderComponent.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HeaderComponent = () => {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

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
          <div className="nav-item" key={item.id}>
            {item.name} {item.type === "dropdown" && <ArrowDropDownIcon />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;
