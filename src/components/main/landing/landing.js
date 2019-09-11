import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, Button, Slide } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { useStyles } from "./landingStyles";
import "./landing.scss";
import img1 from "../../../imgs/img2.svg";
import img2 from "../../../imgs/img7.svg";

export default function Landing() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <section className={`landing landing-bg`}>
        <div className={`landing-col`}>
          <div className={`landing-items`}>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              gutterBottom
              className={`landing-heading`}
            >
              Learn Soccer like a Boss. Laugh live and love soccer.
            </Typography>

            <Typography
              variant="h5"
              component="h5"
              align="center"
              className={`landing-sub`}
              gutterBottom
            >
              We spot the potential in every student and we bring it out. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              className={`landing-button`}
            >
              <Typography
                variant="button"
                align="center"
                gutterBottom
                className={`landing-button-text`}
              >
                Sign Up
              </Typography>
              <CheckIcon className={`landing-rightIcon`} />
            </Button>
          </div>
        </div>

        <div className={`landing-col`}>
          <div className={`landing-items`}>
            <div className={`landing-imgs`}>
              <Zoom>
                <img src={img2} alt="hmmmmm" className={`landing-img2`} />
              </Zoom>
              <Fade left big delay={800} duration={3000}>
                <img src={img1} alt="hmmmmm" className={`landing-img1`} />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
