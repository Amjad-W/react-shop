import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
 
import CartItem from '../cart-item/cart-item.component';
import { DropdownContainer, CartItemsContainer, CheckoutButton, EmptyMessage} from './cart-dropdown.styles';

const CartDropdown  = ({cartItems, history, dispatch}) => (
    <DropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? 
                cartItems.map(cartItem =>
                   ( <CartItem key={cartItem.id} item={cartItem} /> )
                )
                :
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }
        </CartItemsContainer>
        <CheckoutButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}
        >GO TO CHECKOUT</CheckoutButton>
    </DropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter( connect(mapStateToProps)(CartDropdown) );