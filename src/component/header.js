import { Button, Grid } from "@mui/material";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid container sx={{ backgroundColor: "#f4f5d7", alignItems:"center", justifyContent:"space-between"}}>
      <Grid item xs={10} onClick={() => navigate("/")}>
        <img src={logo} alt="" width="150px" style={{ paddingLeft: "10px" }} />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={() => navigate("/ilan-ver")}
          sx={{
            textTransform: "none",
            fontWeight: "600",
            padding: "10px",
            marginLeft:"20%  ",
            boxShadow: 0,
          }}
        >
          Ücretsiz İlan Ver
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
