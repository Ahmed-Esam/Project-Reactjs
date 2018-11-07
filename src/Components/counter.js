import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    Counters: [{ id: 1 }]
  };

  onClickPlus = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  onClickMinus = () => {
    let Minus =
      this.state.counter === 0
        ? alert("Not Num")
        : this.setState({ counter: this.state.counter - 1 });
  };

  onClickReset = () => {
    let Reset =
      this.state.counter === 0
        ? alert("Not Num")
        : this.setState({ counter: 0 });
  };

  render() {
    return (
      <Fragment>
          {/* <div>
            {this.state.Counters.map(counters => (
              <Counter key={Math.random()}/>
            ))}
          </div> */}
        <div>
          <h1>Counter</h1>
          <button
            className="m-2 btn btn-primary"
            onClick={this.onClickPlus}
          >
            Count +{" "}
          </button>
          <button
            className="m-2 btn btn-warning"
            onClick={this.onClickMinus}
          >
            Count -{" "}
          </button>
          <button
            className="m-2 btn btn-info"
            onClick={this.onClickReset}
          >
            Reset{" "}
          </button>
          {/* <button className='m-2 btn btn-danger' onClickDelete={this.props.onClickDelete}>Delete </button> */}
          <h3>Count: {this.state.counter}</h3>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
