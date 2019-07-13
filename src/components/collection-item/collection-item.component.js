import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { AddButton, BackgroundImage, CollectionItemContainer, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer className='collection-item'>
			<BackgroundImage 
				className='image' 
				style={{
					backgroundImage: `url(${imageUrl})`
				}}/>
			<CollectionFooterContainer className='collection-footer'>
				<NameContainer className='name'>{name}</NameContainer>
				<PriceContainer className='price'>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton inverted onClick={() => addItem(item)}>Add to cart</AddButton>
		</CollectionItemContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);