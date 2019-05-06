import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Output from "../Output";
import Number from "../Number";
import Command from "../Command";

class Calculator extends Component {
  handleClick = (evt, data) => {
    console.log(evt, data);
  };

  render() {
    return (
      <Grid columns={5}>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Output />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Number text={7} />
          </Grid.Column>
          <Grid.Column>
            <Number text={8} />
          </Grid.Column>
          <Grid.Column>
            <Number text={9} />
          </Grid.Column>
          <Grid.Column>
            <Command text={"+"} type={"command"} />
          </Grid.Column>
          <Grid.Column>
            <Command text={"-"} type={"command"} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Number text={4} />
          </Grid.Column>
          <Grid.Column>
            <Number text={5} />
          </Grid.Column>
          <Grid.Column>
            <Number text={6} />
          </Grid.Column>
          <Grid.Column>
            <Command text={"*"} type={"command"} />
          </Grid.Column>
          <Grid.Column>
            <Command text={"/"} type={"command"} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Number text={1} />
          </Grid.Column>
          <Grid.Column>
            <Number text={2} />
          </Grid.Column>
          <Grid.Column>
            <Number text={3} />
          </Grid.Column>
          <Grid.Column>
            <Command text={"C"} type={"clear"} />
          </Grid.Column>
          <Grid.Column>
            <span />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <span>.</span>
          </Grid.Column>
          <Grid.Column>
            <Number text={0} />
          </Grid.Column>
          <Grid.Column>
            <span />
          </Grid.Column>
          <Grid.Column>
            <span />
          </Grid.Column>
          <Grid.Column>
            <Command text={"="} type={"equal"} />
          </Grid.Column>
          <Grid.Column>
            <Command text={"UNDO"} type={"undo"} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Calculator;
