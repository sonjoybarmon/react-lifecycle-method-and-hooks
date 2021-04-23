// @flow
import * as React from "react";

export class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "anik",
    };
    console.log("lifecycle constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecycle getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log(" componentDidMount ");
  }

  render() {
    console.log("lifecycle render");
    return (
      <div>
        <h1>hello bangladesh</h1>
      </div>
    );
  }
}
