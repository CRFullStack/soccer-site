import React from "react";
import { Typography, Button } from "@material-ui/core";
import Zoom from "react-reveal/Zoom";
import "./info.scss";

function info3() {
  return (
    <section className="info3">
      <Zoom>
        <div className="info3-col">
          <Typography
            variant="h3"
            align="center"
            className="info3-heading"
            gutterBottom
          >
            We find the potential in all of our recruits!
          </Typography>
        </div>
        <div className="info3-col">
          <Typography
            variant="body1"
            align="center"
            className="info3-sub"
            gutterBottom
          >
            We work with all ages and skill levels. We're known for Quos
            blanditiis tenetur.
          </Typography>
        </div>
        <div className="info3-col">
          <Typography variant="body2" align="center" className="" gutterBottom>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              className="info3-butn"
            >
              Get Started
            </Button>
          </Typography>
        </div>
      </Zoom>
    </section>
  );
}

export default info3;
