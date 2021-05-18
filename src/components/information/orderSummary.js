import React, { Component } from 'react';

import {UnderlinedTitle, InfoTitle} from './infoHelp'

class OrderSummary extends Component {

    render() {
        const {className} = this.props;
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle clasName='order-summary__title'/>
                <InfoTitle clasName='order-summary__subtotal' title='4 stickers' value='$7.96'/>
                <InfoTitle clasName='order-summary__tax-shipping' title='Taxes & Shipping' value='$0.00'/>
                <InfoTitle clasName='order-summary__total' title='Total' value='$8.02'/>
            </div>
        );
    }
}

export default  OrderSummary