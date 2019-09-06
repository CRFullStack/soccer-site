import React from "react";
import "./footer.scss";
import {
  Button,
  IconButton,
  Link,
  Typography,
  Divider
} from "@material-ui/core";
import { Link as Links } from "react-router-dom";

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <IconButton
            edge="end"
            className="footer-logo-butn"
            color="inherit"
            aria-label="menu"
          >
            Club Soccer
          </IconButton>
        </div>
        <div className="footer-links">
          <Typography component={"div"} className="">
            <Link
              component={Links}
              to={`/`}
              color="inherit"
              className="footer-link"
            >
              Home
            </Link>
            <Link
              component={Links}
              to={`/signup`}
              color="inherit"
              className="footer-link"
            >
              Sign Up
            </Link>
            <Link
              component={Links}
              to={`/contact`}
              color="inherit"
              className="footer-link"
            >
              Contact
            </Link>
          </Typography>
        </div>
        <div className="footer-social">
          <i class="fab fa-facebook" />
          <i class="fab fa-twitter" />
          <i class="fas fa-wifi" />
          <i class="fab fa-google-plus" />
        </div>
      </div>
      <Divider light="true" variant="middle" className="footer-divider" />
      <div className="footer-copy">
        <Typography
          variant="caption"
          align="center"
          display="block"
          gutterBottom
        >
          &copy;Copyright. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}
