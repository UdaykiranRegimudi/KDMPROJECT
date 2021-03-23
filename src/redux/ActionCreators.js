import * as ActionTypes from './ActionTypes';
import { auth, firestore, firebasestore } from '../firebase/firebase';

/************************************ Login **************************************/

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
        dispatch(fetchOrderJobs());
        dispatch(fetchJobs());
        dispatch(fetchJobupdates());
        dispatch(receiveLogin(user));
    })
    
    .catch(error => { dispatch(loginError(error.message)); alert('Invalid Credentials'); });
}

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

/************************************ Login End **************************************/
/************************************ Logout **************************************/

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

/************************************ Logout End **************************************/
/************************************ Master Data **************************************/

/* UserMaster */
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


/* CustomerMaster */
export const fetchCustomerMaster = () => (dispatch) => {
    console.log("Entering fetch reference customer data");
    dispatch(customerMasterLoading(true));

    return firestore.collection('customerMaster').orderBy("customerName", "asc").get()
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


/* ServicesMaster */
export const fetchServicesMaster = () => (dispatch) => {
    console.log("Entering fetch reference service data");
    dispatch(servicesMasterLoading(true));

    return firestore.collection('servicesMaster').orderBy("serviceType", "asc").get()
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

/************************************ Master Data End **************************************/
/************************************ Order Reducers **************************************/

/* CRUD Create Order */
export const postOrder = (order) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }
    console.log(order)

    /* Get orderId counter */

    var orderNum;

    firestore.collection('counters').doc('orderCounter').get()
    .then((doc) => {
        console.log("orderCounter")
        console.log(doc.data().orderNum)
        orderNum = doc.data().orderNum
        return orderNum
    })
    .catch(error => {console.log(error.message)});

    console.log("orderCounter before batch")
    console.log(orderNum)

    var batch = firestore.batch()
    firestore.collection('orders').add({

        orderid: order.orderid,
        customer: order.customer,
        service: order.service,
        lablocation: order.lablocation,
        status: order.status,
        description: order.description,
        createdby: auth.currentUser.email,
        createdAt: firebasestore.FieldValue.serverTimestamp()   

    })
    .then(docRef => {
        console.log("Order docRefId")
        console.log(docRef)

        var servCount = 1;

            order.service.forEach((servItem) => {
            var jobDoc = {
                serviceId: servItem,
                orderDocRefId: docRef,
                orderId: order.orderid,
                jobId: order.orderid + "-" + servCount,
                createdAt: firebasestore.FieldValue.serverTimestamp()
            }  
            
            servCount++
            var jobDocRef = firestore.collection('jobs').doc()
            batch.set(jobDocRef, jobDoc)
        });
            batch.commit()
     })

     .then(() => {
            console.log("Order successfully created!");
            console.log("Order");
            alert('Order creation successful \nOrderId : ' + order.orderid);
            dispatch(fetchOrders())
            dispatch(fetchOrderJobs())
            dispatch(fetchJobs())
        })
           
    .catch(error =>  { console.log('Order', error.message); alert('Your order could not be posted\nError: '+error.message); 
    });
    };

/* CRUD Get Order */
/* CRUD Update Order */
/* CRUD Delete Order */

/* Get Orders */
export const fetchOrders = () => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;
    console.log("currentuser", user);

    console.log("Entering fetch orders");
    dispatch(ordersLoading(true));

    console.log("assigned user");
    //return firestore.collection('order').get()

   
    if (user.email === "subhashini.kunchala@kdmengineers.com")
    { 
       /* Query for last 7 days (604800000 in millisec) 
        1 hr = 3600000 millisec
        10 hrs = 36000000
        24 hrs or 1 day = 86400000
        7 days = 604800000
       */
            var fromDateObj = new Date(Date.now() - 604800000)
            console.log("fromDateObj")
            console.log(fromDateObj)
            return firestore.collection('orders').where('createdAt', '>' , fromDateObj).orderBy("createdAt", "desc").get()

       /* Query for last 7 days
            const fromDateObj = firebase.firestore.Timestamp.fromDate(Date.now - 604800000)
            console.log("fromDateObj")
            console.log(fromDateObj)
            return firestore.collection('orders').where('createdAt', '>' , fromDateObj).get()
        */
        //  return firestore.collection('orders').where('createdAt', '>' , fromDateObj).orderBy("createdAt", "desc").limit(20).get()
       
        
        // return firestore.collection('orders').orderBy("createdAt", "desc").limit(20).get()

        // return firestore.collection('orders').orderBy("orderid", "desc").limit(20).get()

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
    else
    {
        return firestore.collection('orders').where('createdby', '==', user.email).get()
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
        .then(orders => {
            dispatch(addOrders(orders))
            //testing sendEmail()
            sendEmail("sireelaks@gmail.com")})
        .catch(error => dispatch(ordersFailed(error.message)));
    }
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

/************************************ Order Reducers End **************************************/
/************************************ OrderJob Reducers **************************************/

/* CRUD Create OrderJob */

/* CRUD Read/Get OrderJob */
export const fetchOrderJobs = () => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;
    console.log("currentuser", user);

    console.log("Entering fetch order jobs");
    dispatch(orderJobsLoading(true));

    console.log("assigned user");

    
    return firestore.collection('jobs').get()
    .then(snapshot => {
        let orderJobs = [];
        snapshot.forEach(doc => {
            const data = doc.data()
            const _id = doc.id
            orderJobs.push({_id, ...data });
        });
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>printing list orderjobs after db call")
        console.log(orderJobs)

        return orderJobs;
    })
    .then(orderJobs => dispatch(addorderJobs(orderJobs)))
    .catch(error => dispatch(orderJobsFailed(error.message)));
}

export const orderJobsLoading = () => ({
    type: ActionTypes.ORDERJOBS_LOADING
});

export const orderJobsFailed = (errmess) => ({
    type: ActionTypes.ORDERJOBS_FAILED,
    payload: errmess
});

export const addorderJobs = (orderJobs) => ({
    type: ActionTypes.ADD_ORDERJOBS,
    payload: orderJobs
});


/* CRUD Update OrderJob */
export const postOrderJobUpdate= (orderJobDocRefId, jobId, status, assignto, jobupdate) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    console.log("************ <action creators postOrderJobUpdate> orderJobDocRefId, jobId, status, assignto, jobupdate")
    console.log(orderJobDocRefId)
    console.log(jobId)
    console.log(status)
    console.log(assignto)

    /*=========================*/
    console.log("Calling orderJobUpdate document update");
        firestore.collection("jobs").doc(orderJobDocRefId).update({
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
        orderJobDocRefId: orderJobDocRefId,
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
                    dispatch(fetchOrderJobs())
                    dispatch(fetchJobs())
                    dispatch(fetchJobupdates())
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            });
    })
       .catch(error => { console.log('Post job updates ', error.message);
        alert('Your job updates could not be posted\nError: '+ error.message); })

}

/************************************ OrderJob Reducers End **************************************/
/************************************ Job Reducers **************************************/

/* CRUD Create Job */
/* CRUD Update Job */
/* CRUD Delete Job */

/* CRUD Read/Get Job, Jobupdates */
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
    return firestore.collection('jobs').where('assignto', '==', user.email).get()
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

/************************************ Job Reducers End **************************************/
/************************************ Jobupdate Reducers **************************************/

/* CRUD Create Jobupdate */
/* CRUD Update Jobupdate */
/* CRUD Delete Jobupdate */

/* CRUD Read/Get Job, Jobupdates */
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


/* CRUD Update Job */
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
        firestore.collection("jobs").doc(docrefId).update({
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
                    dispatch(fetchOrderJobs())
                    dispatch(fetchJobupdates())
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            });
    })
        .catch(error => { console.log('Post job updates ', error.message);
        alert('Your job updates could not be posted\nError: '+ error.message); })
}

/************************************ Job Reducers End **************************************/
/************************************ PostJob - not used **************************************/
export const postJob = (job) => (dispatch) => {
    console.log(job)
     return firestore.collection('job').add(job)
    .then(response => { console.log('Job', response); 
                        alert('Job request created!');
                        dispatch(fetchJobs()) })
    .catch(error =>  { console.log('Job', error.message); alert('Your job could not be posted\nError: '+error.message); });
    
};
/************************************ PostJob **************************************/
/************************************ Test function **************************************/
export const sendEmail = (anyObj) => {
    console.log("In sendEmail")
    console.log(anyObj)
}



/************************************ Test function - End **************************************/