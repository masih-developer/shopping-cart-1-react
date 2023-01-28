import React, { Component } from "react";
import "./CartItem.css";
import { HiXMark } from "react-icons/hi2";

export default class CartItem extends Component {
    removeHandler(id) {
        this.props.cartItemRemove(id);
    }

    render() {
        return (
            <tr>
                <td>
                    <button
                        className="cart__remove-btn"
                        onClick={() => this.removeHandler(this.props.id)}
                    >
                        <HiXMark /> Remove
                    </button>
                </td>
                <td>{this.props.id}</td>
                <td>
                    <img src={this.props.src} alt="" />
                </td>
                <td>{this.props.name}</td>
                <td>${this.props.price}</td>
            </tr>
        );
    }
}
