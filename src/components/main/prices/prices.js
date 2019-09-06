import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import tiers from "./tiers";
import "./prices.scss";

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {},
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  }
}));

export default function Prices() {
  const classes = useStyles();
  return (
    <section className="prices">
      {/* Hero unit */}
      <Container
        maxWidth="sm"
        component="main"
        className={`classes.heroContent `}
      >
        <Typography
          className="prices-heading"
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          className="prices-sub"
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          We have a range of services and training packages to offer for your
          convience. We offer a set number of training days for the amount your
          pay
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className="prices-cardHeader"
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography
                      className="prices-price"
                      component="h2"
                      variant="h3"
                      color="textPrimary"
                    >
                      ${tier.price}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        className="prices-listitem"
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="secondary"
                    className="prices-butn"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
