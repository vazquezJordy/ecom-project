import {
    SET_USER_PURCHASES
}from './types'

export function fetchUserPurchases() {
    return({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'A000847223',
                orderDate: new Date(),
                creitCard: '-0000',
                user: {
                    name : 'Jordy Vazquez',
                    shippingAddress: '123 West State Street'
                }
            },
            {
                _id: 1,
                total: 18.02,
                orderNumber: 'A00asdf0847223',
                orderDate: new Date(),
                creitCard: '-0232',
                user: {
                    name : 'Jordy Lazaro',
                    shippingAddress: '2929 West State Street'
                }
            },
            {
                _id: 2,
                total: 4.02,
                orderNumber: 'A000847223BAD',
                orderDate: new Date(),
                creitCard: '-0100',
                user: {
                    name : 'Jayden Vazquez',
                    shippingAddress: '55 West Street'
                }
            },
            {
                _id: 3,
                total: 82.02,
                orderNumber: 'ADFSA000847223',
                orderDate: new Date(),
                creitCard: '-2200',
                user: {
                    name : 'Ian Vazquez',
                    shippingAddress: '1St State Street'
                }
            },
            {
                _id: 4,
                total: 823.02,
                orderNumber: 'asdfasdfA000847223',
                orderDate: new Date(),
                creitCard: '-0044',
                user: {
                    name : 'Ivan Vazquez',
                    shippingAddress: ' West Street'
                }
            },
            {
                _id: 5,
                total: 19.20,
                orderNumber: 'A000847223EESD',
                orderDate: new Date(),
                creitCard: '-0000',
                user: {
                    name : 'Dan Vilzarian',
                    shippingAddress: '1223 West Street'
                }
            },
            {
                _id: 6,
                total: 98.02,
                orderNumber: 'A000847223ESCS',
                orderDate: new Date(),
                creitCard: '-0000',
                user: {
                    name : 'John Vazquez',
                    shippingAddress: '893 West State Street'
                }
            },
            {
                _id: 7,
                total: 438.02,
                orderNumber: 'A000847223ADGA',
                orderDate: new Date(),
                creitCard: '-0000',
                user: {
                    name : 'Son Goku',
                    shippingAddress: '123 Street 5th West'
                }
            },
        ]
    })
}