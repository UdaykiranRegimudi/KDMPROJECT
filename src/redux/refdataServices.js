import * as ActionTypes from './ActionTypes';

export const RefdataServices = (state = {
        isLoading: true,
        errMess: null,
        refdataServices: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_REFDATASERVICES:
                console.log("In redux refdataServices.js ActionTypes: ADD_REFDATASERVICES")
                return {...state, isLoading: false, errMess: null, refdataServices: action.payload};

            case ActionTypes.REFDATASERVICES_LOADING:
                return {...state, isLoading: true, errMess: null, refdataServices: []};

            case ActionTypes.REFDATASERVICES_FAILED:
                return {...state, isLoading: false, errMess: action.payload, refdataServices: []};

            default:
                console.log("RefdataServices state is default")
                return state;
        }
}