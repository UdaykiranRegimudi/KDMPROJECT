import * as ActionTypes from './ActionTypes';

export const Orders = (state = {
        isLoading: true,
        errMess: null,
        orders: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ORDERS:
            console.log("In redux orders.js ActionTypes: ADD_ORDERS")
            return {...state, isLoading: false, errMess: null, orders: action.payload};

        case ActionTypes.ORDERS_LOADING:
            return {...state, isLoading: true, errMess: null, orders: []};

        case ActionTypes.ORDERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, orders: []};

        default:
            console.log("Orders state is default")
            return state;
    }
}