import React, { Fragment } from "react";

import HeaderCardButton from "./HeaderCartButton";
import classes from './Header.module.scss';
import mealsImage from '../../assets/meals.jpg';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h2>ReactMeals</h2>
                <HeaderCardButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table with delicious food !'/>
            </div>
        </Fragment>
    );
}

export default Header;