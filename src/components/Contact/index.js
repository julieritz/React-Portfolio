/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

function Contact() {
    return (
        <div id="contact-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <h3 id="contact-title">Contact Me</h3>
                <ul className="uk-list">
                    <li>
                        <a uk-icon="icon: mail" className="contact-icon contact-link-icon"
                            href="mailto:julie.ritz@gmail.com"></a>
                        <a className="contact-link contact-li uk-text-middle"
                            href="mailto:julie.ritz@gmail.com">julie.ritz@gmail.com</a>
                    </li>
                    <li>
                        <span className="contact-icon" uk-icon="icon: receiver"></span>
                        <span className="contact-li uk-text-middle">(503) 536-3910</span>
                    </li>
                    <li>
                        <span uk-icon="icon: home" className="contact-icon"></span>
                        <span className="contact-li uk-text-bottom">Seattle, WA 98199</span>
                    </li>
                    <li>
                        <a uk-icon="icon: github" href="https://github.com/jpreston-alt"
                            className="contact-icon contact-link-icon" target="_blank"></a>
                        <a className="contact-link contact-li uk-text-middle" href="https://github.com/jpreston-alt"
                            target="_blank">julieritz</a>
                    </li>
                    <li>
                        <a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/joanna-preston/"
                            className="contact-icon contact-link-icon" target="_blank"></a>
                        <a className="contact-link contact-li uk-text-bottom" href="https://www.linkedin.com/in/joanna-preston/"
                            target="_blank">Julie Ritz</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Contact;