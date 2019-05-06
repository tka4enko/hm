import React, {Component} from "react";
import {connect} from "react-redux";

class Output extends Component {

  render() {
    console.log(this.props);
    return <div>{this.props.result ? this.props.result : this.props.count}</div>;
  }
}

export default connect(state => ({
  count: state.count,
  result: state.result
}))(Output);
