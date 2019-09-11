import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, Button, Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { useStyles } from "./aboutStyles";
import "./about.scss";
import img8 from "../../../imgs/img8.svg";

export default function Landing() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <section className={`about`}>
        <Fade right>
          <div className="about-col">
            <img src={img8} alt="Hmmmm" className={"about-img"} />
          </div>
        </Fade>
        <div className="about-col">
          <Typography
            className="about-heading"
            component="h3"
            variant="h3"
            align="justify"
            gutterBottom
          >
            We're a select group of coaches with a combined 10 years experience
          </Typography>
          <Typography
            className="about-sub"
            component="p"
            variant="body1"
            align="justify"
            color="textSecondary"
            gutterBottom
          >
            We use the latest and greatest techniques to make a better athelete.
          </Typography>
        </div>
      </section>
    </React.Fragment>
  );
}
