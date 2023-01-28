import React, { Component } from "react";
import Header from "./components/layout/Header/Header";
import Products from "./components/Products/Products";
import { ToastContainer } from "react-toastify";

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Products />
                <ToastContainer />
            </>
        );
    }
}
