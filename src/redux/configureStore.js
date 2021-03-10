import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialJob } from './forms';
import { Jobs } from './jobs';
import { Jobupdates } from './jobupdates';
import { Refdatausers } from './refdatausers';
import { RefdataCustomers } from './refdataCustomers';
import { RefdataServices } from './refdataServices';

export const ConfigureStore = () => {
    console.log("In Configure Store.js Create Store")
    
    const store = createStore(
        combineReducers({
            jobs: Jobs,
            jobupdates: Jobupdates,
            refdatausers: Refdatausers,
            refdataCustomers: RefdataCustomers,
            refdataServices: RefdataServices,
            auth: Auth,
            ...createForms({
                job: InitialJob
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}