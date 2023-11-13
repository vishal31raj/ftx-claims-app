import { Grid } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import SidemenuComponent from "../components/sidemenu/SidemenuComponent";

const RootComponent = () => {
  const navigate = useNavigate();

  const navigationHandler = (pathName) => {
    navigate('/' + pathName);
  };

  return (
    <Grid container sx={{ my: 4 }}>
      <Grid item xs={4} sx={{ p: 1 }}>
        <SidemenuComponent
          navigate={(pathName) => navigationHandler(pathName)}
        />
      </Grid>
      <Grid item xs={8} sx={{ p: 1 }}>
        <div className="container-card container-padding">
          <Outlet />
        </div>
      </Grid>
    </Grid>
  );
};

export default RootComponent;
