import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = ({cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(
        (acc, cartItems) => acc + cartItems.quantity, 0
    )
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);