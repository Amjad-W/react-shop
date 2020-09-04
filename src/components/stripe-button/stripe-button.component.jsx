import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H4ZmyB6mt8imjlj7tESJinVvE9xg5eruasKtlKp9Lc4CLwkIvRrugXS5ekO218a2EPARcNVhdFmXJtT4pseAyWa00k3uTu4ET';

    const onToken = token => {
        console.log(token);
        alert('Payment succesfull');
    }
     
    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;