import React from "react";
import "./Button.css";
export default class MyBatton extends React.Component{
    render(){
        return(
            <button className="button" onClick={this.props.onClick}>
                {this.props.caption}
            </button>
        );
    }
}