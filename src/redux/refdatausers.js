import * as ActionTypes from './ActionTypes';

export const Refdatausers = (state = {
        isLoading: true,
        errMess: null,
        refdatausers: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_REFDATAUSERS:
                console.log("In redux refdatausers.js ActionTypes: ADD_REFDATAUSERS")
                return {...state, isLoading: false, errMess: null, refdatausers: action.payload};

            case ActionTypes.REFDATAUSERS_LOADING:
                return {...state, isLoading: true, errMess: null, refdatausers: []};

            case ActionTypes.REFDATAUSERS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, refdatausers: []};

            default:
                console.log("Refdatausers state is default")
                return state;
        }
}