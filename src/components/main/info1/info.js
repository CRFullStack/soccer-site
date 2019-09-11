import React from "react";
import Zoom from "react-reveal/Zoom";
import { Typography } from "@material-ui/core";
import "./info.scss";

function Info1() {
  return (
    <section className="info1">
      <Zoom>
        <div className="info1-col">
          <Typography
            variant="h3"
            align="center"
            className="info1-heading"
            gutterBottom
          >
            We find the potential in all of our recruits!
          </Typography>
        </div>
        <div className="info1-col">
          <Typography
            variant="body1"
            align="center"
            className="info1-sub"
            gutterBottom
          >
            We work with all ages and skill levels. We're known for Quos
            blanditiis tenetur.
          </Typography>
        </div>
      </Zoom>
    </section>
  );
}

export default Info1;
