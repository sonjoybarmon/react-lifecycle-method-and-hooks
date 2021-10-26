import React from "react";
import { Nav, Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "../Components/Layout";
import Battery from "./hooks/useBattery";
import Geolocation from "./hooks/useGeolocation";
import HooksText from "./HooksText";

const Hooks = () => {
  return (
    <Layout>
      <Router>
        <Container className="py-5">
          <Row>
            <Col md={3}>
              <Nav
                className="flex flex-column py-1"
                style={{ background: "#F8F9FA" }}
              >
                {/* <NavLink exact to="/hooks" style={{ margin: "0 15px" }}> */}
                <Link
                  to="/hooks"
                  style={{
                    margin: "2px 0",
                    background: "#5A6268",
                    color: "#FFFFFF",
                    padding: "10px",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/hooks/useBattery"
                  style={{
                    margin: "2px 0",
                    background: "#5A6268",
                    color: "#FFFFFF",
                    padding: "10px",
                  }}
                >
                  useBattery
                </Link>
                <Link
                  to="/hooks/useGeolocation"
                  style={{
                    margin: "2px 0",
                    background: "#5A6268",
                    color: "#FFFFFF",
                    padding: "10px",
                  }}
                >
                  useGeolocation
                </Link>
              </Nav>
            </Col>
            <Col md={9}>
              <Switch>
                <Route exact path="/hooks">
                  <HooksText />
                </Route>
                <Route exact path="/hooks/useBattery">
                  <Battery />
                </Route>
                <Route exact path="/hooks/useGeolocation">
                  <Geolocation />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </Layout>
  );
};

export default Hooks;
