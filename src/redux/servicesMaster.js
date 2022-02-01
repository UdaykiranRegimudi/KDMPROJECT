import * as ActionTypes from './ActionTypes';

export const ServicesMaster = (state = {
        isLoading: true,
        errMess: null,
        servicesMaster: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_SERVICESMASTER:
                console.log("In redux servicesMaster.js ActionTypes: ADD_SERVICESMASTER")
                return {...state, isLoading: false, errMess: null, servicesMaster: action.payload};

            case ActionTypes.SERVICESMASTER_LOADING:
                return {...state, isLoading: true, errMess: null, servicesMaster: []};

            case ActionTypes.SERVICESMASTER_FAILED:
                return {...state, isLoading: false, errMess: action.payload, servicesMaster: []};

            default:
                console.log("servicesMaster state is default")
                return state;
        }
}