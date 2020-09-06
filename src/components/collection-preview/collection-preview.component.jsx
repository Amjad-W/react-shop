import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, PreviewTitle, PreviewItemsContainer} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <PreviewTitle>{title.toUpperCase()}</PreviewTitle>
        <PreviewItemsContainer>
            {
                items
                .filter( (item,idx) => idx < 4)
                .map( ( item ) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewItemsContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;