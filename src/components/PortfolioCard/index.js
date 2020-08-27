/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

function PortfolioCard(props) {
    return (
        <div>
            <div className="uk-card uk-card-default portfolio-card">
                <div className="uk-card-body portfolio-card-body">
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: scale">
                        <ul className="uk-slideshow-items">
                            <li>
                                <h3 className="uk-card-title project-title">{props.title}</h3>
                                <p className="project-description">{props.about}</p>
                            </li>
                            <li>
                                <img src={props.imgURL} alt="" uk-cover="true" />
                            </li>
                        </ul>
                        <a className="uk-position-top-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
                    </div>
                </div>
                <div className="uk-card-footer portfolio-card-footer">
                    <div className="uk-text-center">
                        <a href={props.appURL} target="_blank" className="btn-link">
                            <button className="uk-button uk-button-default portfolio-btn">Application</button>
                        </a>
                        <a href={props.repoURL} target="_blank" className="btn-link">
                            <button className="uk-button uk-button-default portfolio-btn">Repository</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PortfolioCard;