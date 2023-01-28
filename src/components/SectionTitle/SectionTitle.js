import React, { Component } from "react";
import "./SectionTitle.css";

export default class SectionTitle extends Component {
    render() {
        return <h2 className="section-title">{this.props.title}</h2>;
    }
}
