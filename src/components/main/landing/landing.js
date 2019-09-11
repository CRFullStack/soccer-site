import React from "react";
import Zoom from "react-reveal/Zoom";
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
        <Zoom>
          <div className={`landing-col`}>
            <div className={`landing-items`}>
              <div className={`landing-imgs`}>
                <img src={img1} alt="hmmmmm" className={`landing-img1`} />
                <img src={img2} alt="hmmmmm" className={`landing-img2`} />
              </div>
            </div>
          </div>
        </Zoom>
      </section>
    </React.Fragment>
  );
}
