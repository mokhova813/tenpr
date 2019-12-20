  import React from "react";
import "./Coctail.css";

export default class Coctail extends React.Component {
  render() {
    return (
      <div className="coctail-container">
        <img className="coctail-image" src={this.props.image} alt="Example" />
        <div className="coctail-name">{this.props.name}</div>
      </div>
    );
  }
}