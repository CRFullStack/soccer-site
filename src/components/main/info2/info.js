import React from "react";
import { Typography, Button } from "@material-ui/core";
import "./info.scss";

function Info2() {
  return (
    <section className="info2">
      <div className="info2-col">
        <Typography
          variant="h3"
          align="center"
          className="info2-heading"
          gutterBottom
        >
          We find the potential in all of our recruits!
        </Typography>
      </div>
      <div className="info2-col">
        <Typography
          variant="body1"
          align="center"
          className="info2-sub"
          gutterBottom
        >
          We work with all ages and skill levels. We're known for Quos
          blanditiis tenetur.
        </Typography>
      </div>
      <div className="info2-col">
        <Typography variant="body2" align="center" className="" gutterBottom>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            className="info2-butn"
          >
            Sign Up
          </Button>
        </Typography>
      </div>
    </section>
  );
}

export default Info2;
