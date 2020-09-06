import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { CollectionItemContainer, AddButton, Image, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;
    return (
        <CollectionItemContainer>
            <Image
                style={
                    { backgroundImage: `url(${imageUrl})` }
                }
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}$</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)} >
                Add to Cart
            </AddButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);