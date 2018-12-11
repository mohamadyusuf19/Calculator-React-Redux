import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { pressButton, pressEqual, pressReset } from "../actions";

class ButtonList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-9">
          <div className="row mb-2">
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(7)}
              >
                7
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(8)}
              >
                8
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(9)}
              >
                9
              </button>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(4)}
              >
                4
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(5)}
              >
                5
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(6)}
              >
                6
              </button>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(1)}
              >
                1
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(2)}
              >
                2
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(3)}
              >
                3
              </button>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(".")}
              >
                .
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressButton(0)}
              >
                0
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className="btn-block btn-lg btn-default"
                onClick={() => this.props.pressReset()}
              >
                C
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row mb-2">
            <div className="col-sm-6">
              <button
                className="btn-block btn-lg btn-primary"
                onClick={() => this.props.pressButton("+")}
              >
                +
              </button>
            </div>
            <div className="col-sm-6">
              <button
                className="btn-block btn-lg btn-primary"
                onClick={() => this.props.pressButton("-")}
              >
                -
              </button>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-6">
              <button
                className="btn-block btn-lg btn-primary"
                onClick={() => this.props.pressButton("*")}
              >
                *
              </button>
            </div>
            <div className="col-sm-6">
              <button
                className="btn-block btn-lg btn-primary"
                onClick={() => this.props.pressButton("/")}
              >
                /
              </button>
            </div>
            <button
              className="btn btn-block btn-success"
              onClick={() => this.props.pressEqual()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      pressButton,
      pressEqual,
      pressReset
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(ButtonList);
