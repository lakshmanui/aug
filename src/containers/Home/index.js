import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#1c65ff",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    height: 'calc(100vh - 75px)'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className="home-title-wrapper">
            <div className="home-title-wrapper-inner">
              <div className="home-title">Follow the $mart Money</div>
              <div className="home-sub-title">
                Onchain data insights made easy!
              </div>
              <div className="goto-home-app">Go to App</div>
              <img src="/images/home-icon.svg" className="home-icons" />
            </div>{" "}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="home-right-wrapper">
            <div className="home-right-wrapper-inner">
              <img src="/images/home-image.svg" className="home-image" />
              <img src="/images/home.svg" className="home-image2" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
