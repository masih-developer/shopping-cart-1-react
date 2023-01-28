import React, { Component } from "react";
import "./Products.css";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import ProductItem from "./ProductItem/ProductItem";
import CartItem from "./CartItem/CartItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: "Laravel Course", price: 10, src: "./images/products/01.png" },
                { id: 2, name: "Angular Course", price: 15, src: "./images/products/02.png" },
                { id: 3, name: "GoLang Course", price: 5, src: "./images/products/03.png" },
                { id: 4, name: "JavaScript Course", price: 6, src: "./images/products/04.png" },
                { id: 5, name: "Python Course", price: 17, src: "./images/products/05.png" },
                { id: 6, name: "VueJs Course", price: 14.5, src: "./images/products/06.png" },
                { id: 7, name: "ReactJs Course", price: 12, src: "./images/products/07.png" },
                { id: 8, name: "TypeScript Course", price: 20, src: "./images/products/08.png" },
                { id: 9, name: "Php Course", price: 18.4, src: "./images/products/09.png" },
                { id: 10, name: "Flutter Course", price: 15, src: "./images/products/10.png" },
            ],
            shoppingCart: [],
        };
        this.addProductToCartHandler = this.addProductToCartHandler.bind(this);
        this.removeCartItemHandler = this.removeCartItemHandler.bind(this);
    }

    addProductToCartHandler(productId) {
        let findProduct = this.state.products.find((item) => {
            return item.id === productId;
        });

        this.setState({
            shoppingCart: [...this.state.shoppingCart, findProduct],
        });

        toast.success(`${findProduct.name} Added To Cart! `, {
            position: "top-right",
            autoClose: 2000,
        });
    }

    removeCartItemHandler(productId) {
        let findIndexProduct = this.state.shoppingCart.filter((item) => {
            return item.id !== productId;
        });

        let findProduct = this.state.products.find((item) => {
            return item.id === productId;
        });

        this.setState({
            shoppingCart: findIndexProduct,
        });

        toast.error(`${findProduct.name} Removed Cart! `, {
            position: "top-right",
            autoClose: 1000,
        });
    }

    render() {
        return (
            <div className="products">
                <div className="container">
                    <SectionTitle title="Products" />
                    <div className="products-wrapper">
                        {this.state.products.map((product) => (
                            <ProductItem
                                {...product}
                                key={product.id}
                                addProduct={this.addProductToCartHandler}
                            />
                        ))}
                    </div>
                    <div className="cart">
                        <SectionTitle title="Cart" />
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Remove</th>
                                    <th>Product ID</th>
                                    <th>Image</th>
                                    <th>Product Info</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.shoppingCart.map((product) => (
                                    <CartItem
                                        {...product}
                                        key={product.id}
                                        cartItemRemove={this.removeCartItemHandler}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
