import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import "../Pages/Shop";
import { withStyles } from "@material-ui/core/styles";
import $ from "jquery";
import axios from 'axios';
// -------------------Import Images
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

class ProductsList extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductData: []
    }
  }

  componentDidMount() {
    axios.get("https://localhost:44324/api/product/getproductlist").then(response => {
      //console.log(response.data);  
      this.setState({
        ProductData: response.data
      });
    });
  }

  render() {

    return (
      <section>
        <h1>Products List</h1>
        <div>
          <table>
            <thead><tr><th>Product Id</th><th>Product Name</th><th>Product Price</th><th>Product available</th><td>Product picture</td></tr></thead>
            <tbody>
              {
                this.state.ProductData.map((p, index) => {
                  return <div>
                     <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Paper >
                        <Grid container spacing={2}>
                          <Grid item>
                            <Typography gutterBottom variant="h5">
                              {p.nameP}
                            </Typography>
                            <ButtonBase>
                              <img


                                src={p.imageSrc}
                              />


                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                              <Grid item xs>
                                <Typography
                                  variant="body2"
                                  gutterBottom
                                  style={{ whiteSpace: "pre-line" }}
                                >
                                  {p.name}
                                </Typography>
                                <Typography variant="subtitle2" color="textPrimary" mb-6>
                                  {p.priceP}
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <button
                                  className="btn btn-danger btn-lg btn-lg"
                                  type={"submit"}
                                  onClick={this.handleClick}
                                >
                                  Buy
                      </button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                    </Grid>
                  </div>

                })
              }
            </tbody>
          </table>
        </div>


      </section>
    )
  }
}

const useStyles = (theme) => ({
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
    minWidth: 200,
    minHeight: 550,
    maxWidth: 750,
    maxHeight: 630,
  },
  image: {
    align: "center",
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
});

class PaperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      desc5: "",
      desc6: "",
      desc7: "",
      desc8: "",
      desc9: "",
      desc10: "",
      // name1: "T-shirt with print (Eat, Sleep, Code, Repeat)"
    };

    this.onInputchange = this.onInputchange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    this.handleClick7 = this.handleClick7.bind(this);
    this.handleClick8 = this.handleClick8.bind(this);
    this.handleClick9 = this.handleClick9.bind(this);
    this.handleClick10 = this.handleClick10.bind(this);
  }


  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log("Item Nr.1 T-shirt with print (Eat, Sleep, Code, Repeat)");
    console.log(this.state["desc1"], this.state.name1);
  }
  handleClick2(e) {
    e.preventDefault();
    console.log("Item Nr.2 Black color T-shirt with Visma logo");
    console.log(this.state["desc2"]);
  }
  handleClick3(e) {
    e.preventDefault();
    console.log("Item Nr.3 Black color shopping bag with Visma logo");
    console.log(this.state["desc3"]);
  }
  handleClick4(e) {
    e.preventDefault();
    console.log("Item Nr.4 buff with Visma logo");
    console.log(this.state["desc4"]);
  }
  handleClick5(e) {
    e.preventDefault();
    console.log("Item Nr.5 Blue color outdoor sports jacket with Visma logo");
    console.log(this.state["desc5"]);
  }
  handleClick6(e) {
    e.preventDefault();
    console.log("Item Nr.6 Dark blue color hoodie");
    console.log(this.state["desc6"]);
  }
  handleClick7(e) {
    e.preventDefault();
    console.log("Item Nr.7 Universal size waterproof bag");
    console.log(this.state["desc7"]);
  }
  handleClick8(e) {
    e.preventDefault();
    console.log("Item Nr.8 Blue color umbrella");
    console.log(this.state["desc8"]);
  }
  handleClick9(e) {
    e.preventDefault();
    console.log("Item Nr.10 3D printing");
    console.log(this.state["desc9"]);
  }
  handleClick10(e) {
    e.preventDefault();
    console.log("Item Nr.9 Electronics");
    console.log(this.state["desc10"]);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ProductsList />
        <h2 className="text-center m-4">Shop</h2>
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
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ whiteSpace: "pre-line" }}
                      >
                        T-shirt with print (Eat, Sleep, Code, Repeat)
                        {this.state.name1}
                      </Typography>
                      <Typography variant="subtitle2" color="textPrimary" mb-6>
                        12 KUDOS
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {/* <InputFieldDescription/> */}
                      <input
                        type="text"
                        name="desc1"
                        value={this.state.desc1}
                        onChange={this.onInputchange}
                        placeholder="Input gender and size"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick}
                      >
                        Buy
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* --------------2nd item */}
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
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Black color T-shirt with Visma logo
                      </Typography>
                      <Typography variant="subtitle2" color="textPrimary">
                        12 KUDOS
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {/* <InputFieldDescription/> */}
                      <input
                        type="text"
                        name="desc2"
                        value={this.state.desc2}
                        onChange={this.onInputchange}
                        placeholder="Input gender and size"
                      />
                    </Grid>
                    <Grid item>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick2}
                      >
                        Buy
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* --------------3rd item */}
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
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Black color shopping bag with Visma logo
                      </Typography>
                      <Typography variant="subtitle2" color="textPrimary">
                        5 KUDOS
                      </Typography>
                    </Grid>
                    <Grid item>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick3}
                      >
                        Buy
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* --------------4th item */}
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
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Black or Blue color buff with Visma logo
                      </Typography>
                      <Typography variant="subtitle2" color="textPrimary">
                        6 KUDOS
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="text"
                        name="desc4"
                        value={this.state.desc4}
                        onChange={this.onInputchange}
                        placeholder="Input color"
                      />
                    </Grid>
                    <Grid item>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick4}
                      >
                        Buy
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* --------------5th item */}
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
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Blue color outdoor sports jacket with Visma logo
                      </Typography>
                      <Typography variant="subtitle2" color="textPrimary">
                        Price info will follow
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="text"
                        name="desc5"
                        value={this.state.desc5}
                        onChange={this.onInputchange}
                        placeholder="Input gender and size"
                      />
                    </Grid>
                    <Grid item>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick5}
                      >
                        Buy
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* --------------6 item */}
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
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Dark blue color hoodie
                      </Typography>
                      <Typography variant="subtitle2" color="textPrimary">
                        25 KUDOS
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="text"
                        name="desc6"
                        value={this.state.desc6}
                        onChange={this.onInputchange}
                        placeholder="Input gender and size"
                      />
                    </Grid>
                    <Grid item>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick6}
                      >
                        Buy
                      </button>
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
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Universal size waterproof bag
                      </Typography>
                      <Typography variant="subtitle2" color="textPrimary">
                        6 KUDOS
                      </Typography>
                    </Grid>
                    <Grid item>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick7}
                      >
                        Buy
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* --------------8 item */}
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
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Blue color umbrella
                      </Typography>
                      <Typography variant="subtitle2" color="textPrimary">
                        25 KUDOS
                      </Typography>
                    </Grid>
                    <Grid item>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick8}
                      >
                        Buy
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* --------------9 item */}
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
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Catalogue to choose -{" "}
                        <Button
                          href="https://www.thingiverse.com/"
                          color="primary"
                          target={"_blank"}
                        >
                          Thingiverse
                        </Button>
                        <Typography
                          variant="subtitle2"
                          style={{ whiteSpace: "pre-line", color: "black" }}
                        >
                          For printing - please contact Igor Samokysh and Inga
                          Grieze
                        </Typography>
                      </Typography>
                    </Grid>
                    <input
                      type="text"
                      name="desc9"
                      value={this.state.desc9}
                      onChange={this.onInputchange}
                      placeholder="Input grams(1g = 1KUDOS)"
                    />
                    <Grid item>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick9}
                      >
                        Buy
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* --------------10th item */}
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
                      <Typography
                        variant="body2"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        You can buy electronics(headphones, smartwatch, phone
                        etc.), but please note that if the cost is higher than
                        20 Eur - a tax will be applied and the amount of kudos
                        points will be approx 80% higher then the original
                        price.
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ whiteSpace: "pre-line", color: "black" }}
                      >
                        For more details please contact Inga Grieze. !!! Please
                        do not buy anything yourself, we will gladly do it for
                        you (there are some formalities to be followed).
                      </Typography>
                    </Grid>
                    <input
                      type="text"
                      name="desc10"
                      value={this.state.desc10}
                      onChange={this.onInputchange}
                      placeholder="Input additional information"
                    />
                    <Grid item>
                      <button
                        className="btn btn-danger btn-lg btn-lg"
                        type={"submit"}
                        onClick={this.handleClick10}
                      >
                        Individual orders
                      </button>
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
}
export default withStyles(useStyles)(PaperComponent);
