import React, { Component } from 'react';
import './index.scss';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
			alive: this.props.alive,
    };
  }

  componentWillReceiveProps(nextProps) {
  	if (this.state.alive !== nextProps.alive) {
	  	this.setState(() => {
	      return {
	      	alive: nextProps.alive,
	      };
	    });
  	}
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.alive === nextProps.alive &&
    	this.state.alive === nextState.alive
    ) {
			return false;
    } else {
    	return true;
    }
  }

  switchCellState() {
		this.setState((prevState) => {
  		return {
  			alive: !prevState.alive,
  		};
		});
		this.props.changeCellState(
		  !this.state.alive,
      this.props.row,
      this.props.col
    );
  }

  render() {
  	let alive = this.state.alive;
    return (
      <div
        className={"cell " + (alive ? "alive" : "")}
        onClick={() => {this.switchCellState()}}
        ref={(input) => {this.textInput = input;}}
      />
    );
  }
}

export default Cell;
