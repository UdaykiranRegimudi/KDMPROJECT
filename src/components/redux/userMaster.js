import * as ActionTypes from './ActionTypes';

export const UserMaster = (state = {
        isLoading: true,
        errMess: null,
        userMaster: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_USERMASTER:
                console.log("In redux userMaster.js ActionTypes: ADD_USERMASTER")
                return {...state, isLoading: false, errMess: null, userMaster: action.payload};

            case ActionTypes.USERMASTER_LOADING:
                return {...state, isLoading: true, errMess: null, userMaster: []};

            case ActionTypes.USERMASTER_FAILED:
                return {...state, isLoading: false, errMess: action.payload, userMaster: []};

            default:
                console.log("userMaster state is default")
                return state;
        }
}