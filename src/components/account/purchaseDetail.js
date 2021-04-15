import React, { Component } from "react";

import {connect} from 'react-redux'

function PurchaseDetailLabel({className, title, value}) {
    return (
        <div className={`${className} purchase-detail-label`}>
            <div className='purchase-detail-label_title'> {title} </div>
            <div className='purchase-detail-label_value'>{value}</div>
        </div>
    )
}

class PurchaseDetail extends Component {
  render() {
    const { className, orderNumber, orderDate, user, total, creditCard } = this.props;
    const {name, shippingAddress} = user;

    return (
      <div className={`${className} purchases-detail`}>
        <PurchaseDetailLabel 
        className='purchase-detail_order-number'
        title='Order Number'
        value = {orderNumber}/>
        <PurchaseDetailLabel 
        className='purchase-detail_order-date'
        title='Order Date'
        value = {orderDate}/>
        <PurchaseDetailLabel 
        className='purchase-detail_order-shipping'
        title='Shipping Address'
        value = { `${name}\n${shippingAddress}`}/>
        <PurchaseDetailLabel 
        className='purchase-detail_total'
        title='Total'
        value = {total}/>
        <PurchaseDetailLabel 
        className='purchase-detail_credit-card'
        title='Credit Card'
        value = {creditCard}/>
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
