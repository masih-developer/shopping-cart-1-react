import React, { Component } from "react";
import "./ProductItem.css";
import { FiShoppingCart } from "react-icons/fi";

export default class ProductItem extends Component {
    addProductHandler(productId) {
        this.props.addProduct(productId);
    }

    render() {
        return (
            <div className="product-item">
                <img src={this.props.src} alt="" className="product-item__img" />
                <div className="product-item__content">
                    <div className="product-item__info-wrapper">
                        <h4 className="product-item__title">{this.props.name}</h4>
                        <p className="product-item__price">${this.props.price}</p>
                    </div>
                    <p className="product-item__desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, quaerat
                        mollitia? Explicabo, laudantium deleniti. Voluptates nesciunt rerum aliquam
                        error id!
                    </p>
                    <button
                        className="product-item__buy-btn"
                        onClick={() => this.addProductHandler(this.props.id)}
                    >
                        <FiShoppingCart /> Add To Cart
                    </button>
                </div>
            </div>
        );
    }
}
