import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import umbrellaImg from "../assets/umbrella.jpg";
import waterproofBagImg from "../assets/waterproofBag.jpg";
import OutdoorSportsJacketImg from "../assets/OutdoorSportsJacket.jpg";
import ElectronicsImg from "../assets/Electronics.jpg";
import DarkBHoodieImg from "../assets/DarkBHoodie.jpg";
import BlackTshirtVismaImg from "../assets/BlackTshirtVisma.jpg";
import BlackBlueBuffImg from "../assets/BlackBlueBuff.jpg";
import ShoppingBagImg from "../assets/ShoppingBag.jpg";
import ThreeDPrintingImg from "../assets/ThreeDPrinting.jpg";
import TshirtEatSleepImg from "../assets/TshirtEatSleep.jpg";
import Button from "@material-ui/core/Button";
import DropdownSize from "../Components/DropdownSize";
import DropdownColor from "../Components/DropdownColor";
import InputFieldForPrint from "../Components/InputFieldForPrint";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    margin: "auto",
    // minWidth: 615,
    minHeight: 600,
    maxWidth: 750,
    maxHeight: 600,
  },
  image: {
    align: "center",
    //   maxWidth: '80%',
    //   maxHeight: "80%"
    // width: 450,
    // height: 180,
  },
  img: {
    align: "center",
    margin: "auto",
    display: "block",
    maxWidth: "80%",
    maxHeight: "80%",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  DropdownSize: {
    left: 0,
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      {/* --------------1st item */}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  T-shirt
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="TshirtEatSleepImg"
                    src={TshirtEatSleepImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      T-shirt with print (Eat, Sleep, Code, Repeat)
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      12 KUDOS
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <DropdownSize />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* ----------2nd item */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  T-shirt
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="BlackTshirtVismaImg"
                    src={BlackTshirtVismaImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      Black color T-shirt with Visma logo
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      12 KUDOS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <DropdownSize />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* ----------3rd item */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  Shopping Bag
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="ShoppingBagImg"
                    src={ShoppingBagImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      Black color shopping bag with Visma logo
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      5 KUDOS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* ----------4th item */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  Buff
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="BlackBlueBuffImg"
                    src={BlackBlueBuffImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      Black or Blue color buff with Visma logo
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      6 KUDOS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <DropdownColor />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* ----------5th item */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  Outdoor sports jacket
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="OutdoorSportsJacketImg"
                    src={OutdoorSportsJacketImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      Blue color outdoor sports jacket with Visma logo
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      Price info will follow
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <DropdownSize />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* -------------6 item */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  Hoodie
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="DarkBHoodieImg"
                    src={DarkBHoodieImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      Dark blue color hoodie
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      25 KUDOS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <DropdownSize />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* --------------7 item */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  Waterproof Bag
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="waterproofBagImg"
                    src={waterproofBagImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      Universal size waterproof bag
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      6 KUDOS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* -----------------------8 item */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  Umbrella
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="umbrellaImg"
                    src={umbrellaImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      Blue color umbrella
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      25 KUDOS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* --------------------------9 item */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  Electronics
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="ElectronicsImg"
                    src={ElectronicsImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    {/* <Typography  variant="body2" gutterBottom> */}
                    <Typography style={{ whiteSpace: "pre-line" }}>
                      You can buy electronics(headphones, smartwatch, phone
                      etc.), but please note that if the cost is higher than 20
                      Eur - a tax will be applied and the amount of kudos points
                      will be approx 80% higher then the original price.
                    </Typography>

                    <Typography variant="subtitle2" color="textPrimary">
                      Individual orders
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* ----------10th item */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h5">
                  3D printing
                </Typography>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="ThreeDPrintingImg"
                    src={ThreeDPrintingImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="body2" gutterBottom>
                      Catalogue to choose -
                      <Button
                        href="https://thingiverse.com/"
                        variant="text"
                        color="primary"
                      >
                        Thingiverse.com
                      </Button>
                      <p>
                        <b>
                          For printing - please contact Igor Samokysh and Inga
                          Grieze
                        </b>
                      </p>
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                      1g = 1 KUDOS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      disableElevation
                    >
                      Make a purchase
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <InputFieldForPrint />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
