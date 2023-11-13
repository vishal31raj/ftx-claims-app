import { Container, Grid } from "@mui/material";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import SidemenuComponent from "./components/sidemenu/SidemenuComponent";

function App() {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <Container maxWidth="lg">
        <Grid container sx={{ my: 4 }}>
          <Grid
            item
            xs={4}
            sx={{ p: 1 }}
          >
            <SidemenuComponent />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{ p: 1 }}
          >
            <div className="container-card">
              Routes
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
