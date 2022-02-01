import * as ActionTypes from './ActionTypes';

export const CustomerMaster = (state = {
        isLoading: true,
        errMess: null,
        customerMaster: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_CUSTOMERMASTER:
                console.log("In redux customerMaster.js ActionTypes: ADD_CUSTOMERMASTER")
                return {...state, isLoading: false, errMess: null, customerMaster: action.payload};

            case ActionTypes.CUSTOMERMASTER_LOADING:
                return {...state, isLoading: true, errMess: null, customerMaster: []};

            case ActionTypes.CUSTOMERMASTER_FAILED:
                return {...state, isLoading: false, errMess: action.payload, customerMaster: []};

            default:
                console.log("customerMaster state is default")
                return state;
        }
}