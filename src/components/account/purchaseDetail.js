import React, { Component } from "react";

import {connect} from 'react-redux'

function PurchaseDetailLabel({className, title, value}) {
    return (
        <div className={`${className} purchase-detail-label`}>
            <div className='purchase-detail-label__title'> {title} </div>
            <div className='purchase-detail-label__value'>{value}</div>
        </div>
    )
}

class PurchaseDetail extends Component {
  render() {
    const { className, orderNumber, orderDate, user, total, creditCard } = this.props;
    const {name, shippingAddress} = user;
    const nameAdress = `${name}            
    
    ${shippingAddress}`
    return (
      <div className={`${className} purchase-detail`}>
        <PurchaseDetailLabel 
        className='purchase-detail__order-number'
        title='Order Number'
        value = {orderNumber}/>
        <PurchaseDetailLabel 
        className='purchase-detail__order-date'
        title='Order Date'
        value = {orderDate}/>
        <PurchaseDetailLabel 
        className='purchase-detail__order-shipping-address'
        title='Shipping Address'
        value = {nameAdress}/>
        <PurchaseDetailLabel 
        className='purchase-detail__total'
        title='Total'
        value = {total}/>
        <PurchaseDetailLabel 
        className='purchase-detail__credit-card'
        title='Credit Card'
        value = {creditCard}/>
        <a className='purchase-detail__track-shipment'>Track Shipment</a>
        <a className='purchase-detail__print-receipt'>Print receipt</a>
      </div>
    );
  }
}

function mapSateToProps(state) {
    const {purchaseDetail} = state.user;
    return {
        ...purchaseDetail
    }
}

PurchaseDetail = connect(mapSateToProps)(PurchaseDetail);

export default PurchaseDetail;
