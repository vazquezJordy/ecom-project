import { SET_NAVBAR_LINKS, SET_SHOP_PRODUCTS, FILTER_PRODUCTS_WITH_CATEGORY_ID, SET_SHOP_CATEGORIES, FILTER_PRODUCTS_WITH_QUERY } from './types';

export function filterProductsWithQuery(fileds) {
    return({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fileds
    })
}


export function filterProductsWithCategoryId(_id) {
    console.log(_id)
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All',
                
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'uml'
            },
            {
                _id: 6,
                title: 'Ruby'
            },
        ]
    })
}

export function fetchShopProducts() {
    return({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'However, this makes your code hard to test and difficult to predict, because your return values depend on side-effects other than your arguments. In functional programming terms, ',
                price: 1.99,
                belongsTo: [0,1],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'However, this makes your code hard to test and difficult to predict, because your return values depend on side-effects other than your arguments. In functional programming terms, ',
                price: 1.99,
                belongsTo: [0,6],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'However, this makes your code hard to test and difficult to predict, because your return values depend on side-effects other than your arguments. In functional programming terms, ',
                price: 1.99,
                belongsTo: [0,1, 4],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'However, this makes your code hard to test and difficult to predict, because your return values depend on side-effects other than your arguments. In functional programming terms, ',
                price: 1.99,
                belongsTo: [0,2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 4,
                title: 'JavaScrip Development',
                description: 'However, this makes your code hard to test and difficult to predict, because your return values depend on side-effects other than your arguments. In functional programming terms, ',
                price: 1.99,
                belongsTo: [0,1],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 5,
                title: 'User experience Design',
                description: 'However, this makes your code hard to test and difficult to predict, because your return values depend on side-effects other than your arguments. In functional programming terms, ',
                price: 1.99,
                belongsTo: [0,2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 6,
                title: 'Advanced OPP',
                description: 'However, this makes your code hard to test and difficult to predict, because your return values depend on side-effects other than your arguments. In functional programming terms, ',
                price: 1.99,
                belongsTo: [0,6],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
        ]
    })
}