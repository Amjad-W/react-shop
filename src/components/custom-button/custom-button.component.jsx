import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, isGoogleButton, ...otherProps}) => {
    return (
        <button className={`${isGoogleButton ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}            
        </button>
    )
}

export default CustomButton;
