import React, { Component } from "react";
import { Button as SemanticButton } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleClick, handleCommandClick } from "./actions";

class Button extends Component {
  onClick = () => {
    if (this.props.command) {
      this.props.handleCommandClick(this.props.text);

      return;
    }
    this.props.handleClick(this.props.text);
  };

  render() {
    const { text } = this.props;
    return <SemanticButton onClick={this.onClick}>{text}</SemanticButton>;
  }
}

const mapStateToProps = state => ({
  actions: state.buttons.actions
});

const mapDispatchToProps = dispatch => ({
  handleClick: data => dispatch(handleClick(data)),
  handleCommandClick: data => dispatch(handleCommandClick(data))
});

/* HOC */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
