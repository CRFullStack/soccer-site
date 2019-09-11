import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, GridListTile, GridList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import tileData from "./tileData";
import Rotate from "react-reveal/Rotate";
import "./activities.scss";

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "visible",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: "auto"
  }
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <section className={`activities`}>
        <div className="activities-col">
          <Typography
            className="activities-heading"
            component="h3"
            variant="h3"
            align="justify"
            gutterBottom
          >
            We're a select group of coaches with a combined 10 years experience
          </Typography>
          <Typography
            className="activities-sub"
            component="p"
            variant="subtitle1"
            align="justify"
            color="textSecondary"
            gutterBottom
          >
            We use the latest and greatest techniques to make a better athelete.
          </Typography>
        </div>
        <div className="activities-col">
          <div className={classes.root}>
            <Rotate top right>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </Rotate>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
