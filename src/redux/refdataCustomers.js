import * as ActionTypes from './ActionTypes';

export const RefdataCustomers = (state = {
        isLoading: true,
        errMess: null,
        refdataCustomers: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_REFDATACUSTOMERS:
                console.log("In redux refdataCustomers.js ActionTypes: ADD_REFDATACUSTOMERS")
                return {...state, isLoading: false, errMess: null, refdataCustomers: action.payload};

            case ActionTypes.REFDATACUSTOMERS_LOADING:
                return {...state, isLoading: true, errMess: null, refdataCustomers: []};

            case ActionTypes.REFDATACUSTOMERS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, refdataCustomers: []};

            default:
                console.log("RefdataCustomers state is default")
                return state;
        }
}