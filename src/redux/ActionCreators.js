import * as ActionTypes from './ActionTypes';
import { auth, firestore, firebasestore } from '../firebase/firebase';

export const requestLogin = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}
  
export const receiveLogin = (user) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        user
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return auth.signInWithEmailAndPassword(creds.username, creds.password)
    .then(() => {
        console.log("current user is:");
        console.log(auth.currentUser)
        console.log(auth.currentUser.email)
        var user = auth.currentUser;
        localStorage.setItem('user', JSON.stringify(user));
        // Dispatch the success action
        dispatch(fetchOrders());
        dispatch(fetchJobs());
        dispatch(receiveLogin(user));
    })
    
    .catch(error => { dispatch(loginError(error.message)); alert('Invalid Credentials'); });
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}


// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    auth.signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    localStorage.removeItem('user');
    //dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}



export const postJob = (job) => (dispatch) => {
    console.log(job)
     return firestore.collection('job').add(job)
    .then(response => { console.log('Job', response); 
                        alert('Job request created!');
                        dispatch(fetchJobs()) })
    .catch(error =>  { console.log('Job', error.message); alert('Your job could not be posted\nError: '+error.message); });
    
};


export const fetchJobs = () => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;
    console.log("currentuser", user);

    console.log("Entering fetch jobs");
    dispatch(jobsLoading(true));

    console.log("assigned user");

    //return firestore.collection('job').get()
    return firestore.collection('job').where('assignto', '==', user.email).get()
    .then(snapshot => {
        let jobs = [];
        snapshot.forEach(doc => {
            const data = doc.data()
            const _id = doc.id
            jobs.push({_id, ...data });
        });
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>printing list jobs after db call")
        console.log(jobs)

        return jobs;
    })
    .then(jobs => dispatch(addJobs(jobs)))
    .catch(error => dispatch(jobsFailed(error.message)));
}

export const jobsLoading = () => ({
    type: ActionTypes.JOBS_LOADING
});

export const jobsFailed = (errmess) => ({
    type: ActionTypes.JOBS_FAILED,
    payload: errmess
});

export const addJobs = (jobs) => ({
    type: ActionTypes.ADD_JOBS,
    payload: jobs
});




export const postJobupdate= (docrefId, jobId, status, assignto, jobupdate) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    console.log("************ <action creators postJobupdate> docrefId, jobId, status, assignto, jobupdate")
    console.log(docrefId)
    console.log(jobId)
    console.log(status)
    console.log(assignto)

    /*=========================*/
    console.log("Calling job document update");
        firestore.collection("job").doc(docrefId).update({
            "status": status,
            "assignto": assignto
        })
        .then(() => {
            console.log("Document successfully updated!");
        });
    /*========================= */

    return firestore.collection('jobupdates').add({
        author: {
            '_id': auth.currentUser.uid,
            'firstname' : auth.currentUser.displayName ? auth.currentUser.displayName : auth.currentUser.email
        },
        docrefId: docrefId,
        jobId: jobId,
        status: status,
        assignto: assignto,
        jobupdate: jobupdate,
        createdAt: firebasestore.FieldValue.serverTimestamp(),
        updatedAt: firebasestore.FieldValue.serverTimestamp()
    })
    .then(docRef => {
        console.log("docRef of new jobupdate")
        console.log(docRef)
        firestore.collection('jobupdates').doc(docRef.id).get()
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    const _id = doc.id;
                    let jobupdate = {_id, ...data};
                    console.log("Calling dispatch addJobupdate")
                    console.log(jobupdate)
                    dispatch(addJobupdate(jobupdate))
                    dispatch(fetchJobs())
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            });
    })
    .catch(error => { console.log('Post job updates ', error.message);
        alert('Your job updates could not be posted\nError: '+ error.message); })



}







export const fetchJobupdates = () => (dispatch) => {
    console.log("Entering fetch jobupdates");
    return firestore.collection('jobupdates').get()
        .then(snapshot => {
            let jobupdates = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                jobupdates.push({_id, ...data });
            });
            return jobupdates;
        })
        .then(jobupdates => dispatch(addJobupdates(jobupdates)))
        .catch(error => dispatch(jobupdatesFailed(error.message)));
}

export const jobupdatesFailed = (errmess) => ({
    type: ActionTypes.JOBUPDATES_FAILED,
    payload: errmess
});

export const addJobupdates = (jobupdates) => ({
    type: ActionTypes.ADD_JOBUPDATES,
    payload: jobupdates
});

export const addJobupdate = (jobupdate) => ({
    type: ActionTypes.ADD_JOBUPDATE,
    payload: jobupdate
});




export const fetchUserMaster = () => (dispatch) => {
    console.log("Entering fetch reference user data");
    dispatch(userMasterLoading(true));

    return firestore.collection('userMaster').get()
        .then(snapshot => {
            let userMaster = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                userMaster.push({_id, ...data });
            });
            return userMaster;
        })
        .then(userMaster => dispatch(addUserMaster(userMaster)))
        .catch(error => dispatch(userMasterFailed(error.message)));
}

export const userMasterLoading = () => ({
    type: ActionTypes.USERMASTER_LOADING
});

export const userMasterFailed = (errmess) => ({
    type: ActionTypes.USERMASTER_FAILED,
    payload: errmess
});

export const addUserMaster = (userMaster) => ({
    type: ActionTypes.ADD_USERMASTER,
    payload: userMaster
});




export const fetchCustomerMaster = () => (dispatch) => {
    console.log("Entering fetch reference customer data");
    dispatch(customerMasterLoading(true));

    return firestore.collection('customerMaster').get()
        .then(snapshot => {
            let customerMaster = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                customerMaster.push({_id, ...data });
            });
            return customerMaster;
        })
        .then(customerMaster => dispatch(addCustomerMaster(customerMaster)))
        .catch(error => dispatch(customerMasterFailed(error.message)));
}

export const customerMasterLoading = () => ({
    type: ActionTypes.CUSTOMERMASTER_LOADING
});

export const customerMasterFailed = (errmess) => ({
    type: ActionTypes.CUSTOMERMASTER_FAILED,
    payload: errmess
});

export const addCustomerMaster = (customerMaster) => ({
    type: ActionTypes.ADD_CUSTOMERMASTER,
    payload: customerMaster
});




export const fetchServicesMaster = () => (dispatch) => {
    console.log("Entering fetch reference service data");
    dispatch(servicesMasterLoading(true));

    return firestore.collection('servicesMaster').get()
        .then(snapshot => {
            let servicesMaster = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                servicesMaster.push({_id, ...data });
            });
            return servicesMaster;
        })
        .then(servicesMaster => dispatch(addServicesMaster(servicesMaster)))
        .catch(error => dispatch(servicesMasterFailed(error.message)));
}

export const servicesMasterLoading = () => ({
    type: ActionTypes.SERVICESMASTER_LOADING
});

export const servicesMasterFailed = (errmess) => ({
    type: ActionTypes.SERVICESMASTER_FAILED,
    payload: errmess
});

export const addServicesMaster = (servicesMaster) => ({
    type: ActionTypes.ADD_SERVICESMASTER,
    payload: servicesMaster
});




export const fetchOrders = () => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;
    console.log("currentuser", user);

    console.log("Entering fetch jobs");
    dispatch(ordersLoading(true));

    console.log("assigned user");
 //return firestore.collection('order').get()
    return firestore.collection('orders').where('assignto', '==', user.email).get()
    .then(snapshot => {
        let orders = [];
        snapshot.forEach(doc => {
            const data = doc.data()
            const _id = doc.id
            orders.push({_id, ...data });
        });
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>printing list orders after db call")
        console.log(orders)

        return orders;
    })
  
.then(orders => dispatch(addOrders(orders)))
    .catch(error => dispatch(ordersFailed(error.message)));
}

export const ordersLoading = () => ({
    type: ActionTypes.ORDERS_LOADING
});

export const ordersFailed = (errmess) => ({
    type: ActionTypes.ORDERS_FAILED,
    payload: errmess
});

export const addOrders = (orders) => ({
    type: ActionTypes.ADD_ORDERS,
    payload: orders
});




export const postOrder = (order) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    console.log(order)

    console.log("************ <action creators postOrder>")
    console.log(order.customer)
    console.log(order.service)
    console.log("service length")
    console.log(order.service.length)
    var batch = firestore.batch()
    firestore.collection('orders').add(order)

    .then(docRef => {
        console.log("Order docRefId")
        console.log(docRef)

        order.service.forEach((servItem) => {
            console.log("printing doc in order.service")
            console.log(servItem)
            var jobDoc = {
                serviceId: servItem
            }    
            var jobDocRef = firestore.collection('orders').doc(docRef.id).collection('jobs').doc()
            batch.set(jobDocRef, jobDoc)
        });
            batch.commit()
     })
        .then(() => {
            console.log("job order successfully created!");
            console.log("Order");
            alert('Order creation successful with orderId:'+ order.orderid);
            dispatch(fetchOrders())
        })
           
    .catch(error =>  { console.log('Order', error.message); alert('Your order could not be posted\nError: '+error.message); 
    });
    };