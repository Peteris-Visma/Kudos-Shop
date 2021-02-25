import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button
} from "react-bootstrap";
import logo from "./visma-logo.png";
import KP from "./KP.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Transactions from "../Pages/Transactions";
import Account from "../Pages/Account";
import Policy from "../Pages/Policy";
import Login from "./Login/Login";
import AccountInfo from "../Pages/AccountInfo";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
        //   fixed="top"
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
        >
          <Container>
            <Navbar.Brand href="/home">
              
              <h4>
              <img src={logo} height="28" width="120" className="d-inline-block align-top"alt="Logo"/>{" "}
              Kudos Shop {" "}
              <img src={KP} height="30" width="30" className="d-inline-block align-top"alt="KP"/> 
                </h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link href="/home"> Home </Nav.Link> */}
                <Nav.Link href="/shop"> Shop </Nav.Link>
                <Nav.Link href="/transactions"> Transactions </Nav.Link>
                <Nav.Link href="/account"> Account </Nav.Link>
                <Nav.Link href="/policy"> Policy </Nav.Link>
                <Nav.Link href="/accountInfo"> Info </Nav.Link>

              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/transactions" component={Transactions} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/accountInfo" component={AccountInfo} />
            <Route exact path="/policy" component={Policy} />
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </>
    );
  }
}
