import * as ActionTypes from './ActionTypes';

export const OrderJobs = (state = {
        isLoading: true,
        errMess: null,
        orderJobs: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ORDERJOBS:
            console.log("In redux orders.js ActionTypes: ADD_ORDERJOBS")
            return {...state, isLoading: false, errMess: null, orderJobs: action.payload};

        case ActionTypes.ORDERJOBS_LOADING:
            return {...state, isLoading: true, errMess: null, orderJobs: []};

        case ActionTypes.ORDERJOBS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, orderJobs: []};

        default:
            console.log("OrderJobs state is default")
            return state;
    }
}