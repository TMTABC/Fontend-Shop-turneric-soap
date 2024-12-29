import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
                <div className="item-image-container">
                    <img src={props.image} alt={props.name} />
                </div>
            </Link>
            <p className="item-name">{props.name}</p>
            <div className="item-prices">
                <div className="item-prices-new">${props.new_price}</div>
                {props.old_price && (
                    <div className="item-prices-old">${props.old_price}</div>
                )}
            </div>
        </div>
    );
};
