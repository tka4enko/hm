import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import Output from "../Output";
import Button from "../Button";

class Calculator extends Component {
  handleClick = (evt, data) => {
    console.log(evt, data);
  };

  render() {
    return (
      <Grid columns={5}>
        <Grid.Row columns={1}>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button text={7} />
          </Grid.Column>
          <Grid.Column>
            <Button text={8} />
          </Grid.Column>
          <Grid.Column>
            <span>9</span>
          </Grid.Column>
          <Grid.Column>
            <Button text={"+"} command />
          </Grid.Column>
          <Grid.Column>
            <span>-</span>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <span>4</span>
          </Grid.Column>
          <Grid.Column>
            <span>5</span>
          </Grid.Column>
          <Grid.Column>
            <span>6</span>
          </Grid.Column>
          <Grid.Column>
            <span>*</span>
          </Grid.Column>
          <Grid.Column>
            <span>/</span>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <span>1</span>
          </Grid.Column>
          <Grid.Column>
            <span>2</span>
          </Grid.Column>
          <Grid.Column>
            <span>3</span>
          </Grid.Column>
          <Grid.Column>
            <span>C</span>
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
            <span>0</span>
          </Grid.Column>
          <Grid.Column>
            <span />
          </Grid.Column>
          <Grid.Column>
            <span />
          </Grid.Column>
          <Grid.Column>
            <span>=</span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Calculator;
