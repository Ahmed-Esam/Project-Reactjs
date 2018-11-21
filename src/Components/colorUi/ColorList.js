import React, { Component, Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
class ColorLIst extends Component {
  state = {
    copied: false
  };

  render() {
    return (
      <Fragment>
        <CopyToClipboard
          text={this.props.colors.hex}
          onCopy={() => this.setState({ copied: true })}
        >
          <li
            className="list-group-item m-2 listColor"
            style={{ backgroundColor: this.props.colors.hex }}
          >
            {this.props.colors.color}
            <span className="float-right">Copy Hex Code {this.props.colors.hex}</span>
          </li>
        </CopyToClipboard>
      </Fragment>
    );
  }
}

export default ColorLIst;
