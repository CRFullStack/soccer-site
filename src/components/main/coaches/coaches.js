import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import img1 from "../../../imgs/img1.svg";
import "./coaches.scss";

function Coaches() {
  return (
    <section className="coaches">
      <div className="coaches-heading">
        <Typography
          variant="h3"
          align="center"
          className="coaches-heading-font"
          gutterBottom
        >
          Our Coaches
        </Typography>
      </div>
      <div className="coaches-cards">
        <Fade bottom>
          <div className="coaches-card">
            <Card className="coaches-card-item" raised="true">
              <CardMedia
                className="coaches-card-media"
                image={
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                }
              />
              <CardContent className="">
                <Typography
                  className={"coaches-card-heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Sean Spicer
                </Typography>
                <Typography
                  className={"coaches-card-sub"}
                  variant={"body2"}
                  color="textSecondary"
                >
                  Sean has played soccer on a professional level and has about
                  20 years exp.
                </Typography>
                <Divider className="coaches-divider" light />
                <Avatar className={"coaches-avatar"}>
                  <i class="fas fa-running" />
                </Avatar>
                <Avatar className={"coaches-avatar"}>
                  <i class="fas fa-futbol" />
                </Avatar>
                <Avatar className={"coaches-avatar"}>
                  <i class="fas fa-dumbbell" />
                </Avatar>
              </CardContent>
            </Card>
          </div>
        </Fade>
        <Fade bottom>
          <div className="coaches-card">
            <Card className="coaches-card-item" raised="true">
              <CardMedia
                className="coaches-card-media"
                image={
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                }
              />
              <CardContent className="">
                <Typography
                  className={"coaches-card-heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Sara Grover
                </Typography>
                <Typography
                  className={"coaches-card-sub"}
                  variant={"body2"}
                  color="textSecondary"
                >
                  Sara has been coaching for the last 10 years. She's been the
                  assistance coach for a prestine college.
                </Typography>
                <Divider className="coaches-divider" light />
                <Avatar className={"coaches-avatar"}>
                  <i class="fas fa-running" />
                </Avatar>
                <Avatar className={"coaches-avatar"}>
                  <i class="fas fa-futbol" />
                </Avatar>
                <Avatar className={"coaches-avatar"}>
                  <i class="fas fa-dumbbell" />
                </Avatar>
              </CardContent>
            </Card>
          </div>
        </Fade>
        <Fade bottom>
          <div className="coaches-card">
            <Card className="coaches-card-item" raised="true">
              <CardMedia
                className="coaches-card-media"
                image={
                  "https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                }
              />
              <CardContent className="">
                <Typography
                  className={"coaches-card-heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Corey Walker
                </Typography>
                <Typography
                  className={"coaches-card-sub"}
                  variant={"body2"}
                  color="textSecondary"
                >
                  Corey has played all over the world and now he's bringing his
                  experience to help the next generation.
                </Typography>
                <Divider className="coaches-divider" light />
                <Avatar className={"coaches-avatar"}>
                  <i class="fas fa-running" />
                </Avatar>
                <Avatar className={"coaches-avatar"}>
                  <i class="fas fa-futbol" />
                </Avatar>
                <Avatar className={"coaches-avatar"}>
                  <i class="fas fa-dumbbell" />
                </Avatar>
              </CardContent>
            </Card>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Coaches;
