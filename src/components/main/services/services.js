import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { styles } from "./servicesStyle";
import "./services.scss";

export default function Services() {
  const classes = styles();

  return (
    <section className="services">
      <div className="services-col">
        <Paper component="div" className={`services-paper`}>
          <Typography
            variant="h4"
            component="span"
            display="block"
            align="center"
            color="secondary"
            gutterBottom
          >
            <i class="fas fa-futbol" />
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            display="block"
            align="center"
            className={`services-font`}
            gutterBottom
          >
            Learn from seasoned Coaches
          </Typography>
          <Typography
            variant="body2"
            component="p"
            display="block"
            align="justify"
            color="textSecondary"
            className={`services-font`}
            gutterBottom
          >
            We only choose coaches who have put in the hours of practice. Our
            coaches have the best soccer IQ in the game. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit ad, optio ut deleniti quos,
            fugit ipsam recusandae eum architecto quibusdam, voluptate vero?
            Asperiores voluptatem consequatur, nobis labore aliquam omnis eum.
          </Typography>
        </Paper>
      </div>
      <div className="services-col">
        <Paper component="div" className={`services-paper`}>
          <Typography
            variant="h4"
            component="span"
            display="block"
            align="center"
            color="secondary"
            gutterBottom
          >
            <i class="fas fa-futbol" />
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            display="block"
            align="center"
            className={`services-font`}
            gutterBottom
          >
            Learn from seasoned Coaches
          </Typography>
          <Typography
            variant="body2"
            component="p"
            display="block"
            align="justify"
            color="textSecondary"
            className={`services-font`}
            gutterBottom
          >
            We only choose coaches who have put in the hours of practice. Our
            coaches have the best soccer IQ in the game. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit ad, optio ut deleniti quos,
            fugit ipsam recusandae eum architecto quibusdam, voluptate vero?
            Asperiores voluptatem consequatur, nobis labore aliquam omnis eum.
          </Typography>
        </Paper>
      </div>
      <div className="services-col">
        <Paper component="div" className={`services-paper`}>
          <Typography
            variant="h4"
            component="span"
            display="block"
            align="center"
            color="secondary"
            gutterBottom
          >
            <i class="fas fa-futbol" />
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            display="block"
            align="center"
            className={`services-font`}
            gutterBottom
          >
            Learn from seasoned Coaches
          </Typography>
          <Typography
            variant="body2"
            component="p"
            display="block"
            align="justify"
            color="textSecondary"
            className={`services-font`}
            gutterBottom
          >
            We only choose coaches who have put in the hours of practice. Our
            coaches have the best soccer IQ in the game. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit ad, optio ut deleniti quos,
            fugit ipsam recusandae eum architecto quibusdam, voluptate vero?
            Asperiores voluptatem consequatur, nobis labore aliquam omnis eum.
          </Typography>
        </Paper>
      </div>
    </section>
  );
}
