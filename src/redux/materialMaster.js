import * as ActionTypes from './ActionTypes';

export const MaterialMaster = (state = {
        isLoading: true,
        errMess: null,
        materialMaster: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_MATERIALMASTER:
                console.log("In redux materialMaster.js ActionTypes: ADD_MATERIALMASTER")
                return {...state, isLoading: false, errMess: null, materialMaster: action.payload};

            case ActionTypes.MATERIALMASTER_LOADING:
                return {...state, isLoading: true, errMess: null, materialMaster: []};

            case ActionTypes.MATERIALMASTER_FAILED:
                return {...state, isLoading: false, errMess: action.payload, materialMaster: []};

            default:
                console.log("materialMaster state is default")
                return state;
        }
}