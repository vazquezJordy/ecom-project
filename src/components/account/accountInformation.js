import React, { Component } from 'react';
import AccountInformationForm from '../account/accountIformationForm';
import PageTitle from '../pageTitle';



 class AccountInformation  extends  Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='account-information'>
               <PageTitle className='account-informationg' title='Account Information'/>
               <AccountInformationForm onSubmit={this.onSubmit} className='account-information__form'/>
            </div>
        );
    }
}
export default AccountInformation