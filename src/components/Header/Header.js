import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <a href="#" className="nav__logo">
                            CLOTHING
                        </a>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Shop
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    About
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
