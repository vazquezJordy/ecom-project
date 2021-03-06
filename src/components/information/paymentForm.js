import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';
import {connect} from 'react-redux';

import history from '../../history'

import { FormInput, FormButton } from '../formFields';
import OrderSummary from './orderSummary'
import { UnderlinedTitle } from './infoHelp';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit, name, address } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}> 
             <Field className='payment-form__name'
                type='name'
                title='Name on Credit Cart'
                placeholder='Name'
                name='name'
                component={FormInput}/>

                <Field className='payment-form__card'
                type='card'
                title='Credit Card Number'
                placeholder='____-____-____-____'
                name='card'
                component={FormInput}/>

                 <Field className='payment-form__expiration'
                type='expiration'
                title='Expiration Date'
                placeholder='expiration'
                name='expiration'
                component={FormInput}/>
                <Field className='payment-form__ccv'
                type='ccv'
                title='CCV'
                placeholder='ccv'
                name='ccv'
                component={FormInput}/>

                <div className='payment-form__line'></div>
                <Field className='payment-form__pay-complete'
                onClick={() => history.push('/information/payment')}
                type='submit'
                title='Pay & Complete'
                name='pay-complete'
                component={FormButton}/>
                <Field className='payment-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>
               
               <OrderSummary className='payment-form__order-summary'/>

               <div className='payment-form__shipping-info shipping-info'>
                    <UnderlinedTitle className='shipping-info__title' title='Shipping to'/>
                    <div className='shipping-info__name small-text'> {this.props.name}</div>
                    <div className='shipping-info__address small-text'> {this.props.address}</div>
                </div>

            </form>
        )
    }
}


function mapStateToProps(state){
    const{address, name} = state.user.user;
    return ({address, name})
}

PaymentForm = connect(mapStateToProps)(PaymentForm);

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;