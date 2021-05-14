import React, { Component } from 'react';
import GreenPriceTag from '../greenPriceTag'

class ReviewProduct extends Component {
    render() {
        const { product, quantity} = this.props;
        const {imageUrl, title, price} = product;
        return (
            <div className = 'review-product'>
                <img className = 'review-prodcut__imgae' src={imageUrl} />
                <div className= 'review-product__title'>{title}</div>
                <div className= 'review-produc__quantity'>{quantity}</div>
                <div className= 'review-produc__price'>${price * quantity}</div>
                <GreenPriceTag className='review-produc__price' title={price * quantity} />
            </div>
        );
    }
}

export default ReviewProduct