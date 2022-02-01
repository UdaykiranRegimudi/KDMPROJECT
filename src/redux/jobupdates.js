import * as ActionTypes from './ActionTypes';

export const Jobupdates = (state = {
        errMess: null,
        jobupdates: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_JOBUPDATES:
            return {...state, isLoading: false, errMess: null, jobupdates: action.payload};

        case ActionTypes.JOBUPDATES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, jobupdates: []};

        case ActionTypes.ADD_JOBUPDATE:
            var jobupdate = action.payload;
            return {...state, jobupdates: state.jobupdates.concat(jobupdate)};

        default:
            return state;
    }
}