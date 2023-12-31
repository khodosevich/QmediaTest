import React from 'react';

import classes from "../style/productItem.module.css"
import heart from "../../public/images/Frame.svg"

const ProductItem = ({props}) => {
    return (
        <div className={classes.product_container}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={props.image} alt="" />
                <img className={classes.heartIcon} src={heart} alt=""/>
            </div>
            <div>
                <h4 className={classes.title}>
                    {props.title}
                </h4>
                <div className={classes.prices}>
                    {
                        props.oldPrice ? <>
                                <span className={classes.oldPrice}>
                                    <strike>{props.oldPrice}</strike>
                                </span>
                                <span className={classes.price}>
                                    {props.price}
                                </span>
                                <span className={classes.money_type}>руб.</span>
                        </> : <>
                            <span className={classes.price}>
                                {props.price} <span className={classes.money_type} >руб.</span>
                            </span>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductItem;