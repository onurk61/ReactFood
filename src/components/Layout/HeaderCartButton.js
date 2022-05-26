import React, { useContext } from "react";

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.scss';


const HeaderCardButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0);

    return (
        <button className={classes.button} onClick={props.onClick} type={props.type || 'button'}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
}

export default HeaderCardButton;