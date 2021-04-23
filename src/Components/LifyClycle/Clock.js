// @flow
import * as React from "react";
import { Container } from "react-bootstrap";
import Layout from "../Layout/index";
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      local: null,
    };
  }

  //work as like useEffect hook
  componentDidMount() {
    this.realTime = setInterval(() => this.time(), 1000);
  }
  //get props and state and setState data
  static getDerivedStateFromProps(props, state) {
    return { local: props.local };
  }

  time() {
    this.setState({
      date: new Date(),
    });
  }

  // 2 ta value ney true and false. shouldComponentupdate diye bujai je components update hobe ki na seta true false diye bole dite hoy
  shouldComponentUpdate() {
    return true;
  }

  //unmount components
  componentWillUnmount() {
    clearInterval(this.realTime);
  }
  //present state and props er jonno use kora hoy
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("info").innerHTML =
      "present time: " + prevState.date.toLocaleTimeString(prevProps);
  }

  //components jokhon update hoy tokhon render hoy
  componentDidUpdate() {
    document.getElementById("update").innerHTML =
      "state update " + this.state.date.toLocaleTimeString(this.state.local);
  }

  render() {
    const { date, local } = this.state;
    // const { local } = this.props;
    return (
      <Layout>
        <div
          style={{
            background: "#0092ff2e",
          }}
        >
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
              height: "600px",
            }}
          >
            <div>
              <h2>React lifecycle methods</h2>
              <p id="info"></p>
              <p> future time : {date.toLocaleTimeString(local)}</p>
              <p id="update"> </p>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}
