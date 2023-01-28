import React, { Component } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Products />
            </>
        );
    }
}
