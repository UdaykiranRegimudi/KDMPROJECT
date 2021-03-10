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




export const fetchRefdatausers = () => (dispatch) => {
    console.log("Entering fetch reference user data");
    dispatch(refdatausersLoading(true));

    return firestore.collection('refdatausers').get()
        .then(snapshot => {
            let refdatausers = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                refdatausers.push({_id, ...data });
            });
            return refdatausers;
        })
        .then(refdatausers => dispatch(addRefdatausers(refdatausers)))
        .catch(error => dispatch(refdatausersFailed(error.message)));
}

export const refdatausersLoading = () => ({
    type: ActionTypes.REFDATAUSERS_LOADING
});

export const refdatausersFailed = (errmess) => ({
    type: ActionTypes.REFDATAUSERS_FAILED,
    payload: errmess
});

export const addRefdatausers = (refdatausers) => ({
    type: ActionTypes.ADD_REFDATAUSERS,
    payload: refdatausers
});




export const fetchRefdataCustomers = () => (dispatch) => {
    console.log("Entering fetch reference customer data");
    dispatch(refdataCustomersLoading(true));

    return firestore.collection('refdataCustomers').get()
        .then(snapshot => {
            let refdataCustomers = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                refdataCustomers.push({_id, ...data });
            });
            return refdataCustomers;
        })
        .then(refdataCustomers => dispatch(addRefdataCustomers(refdataCustomers)))
        .catch(error => dispatch(refdataCustomersFailed(error.message)));
}

export const refdataCustomersLoading = () => ({
    type: ActionTypes.REFDATACUSTOMERS_LOADING
});

export const refdataCustomersFailed = (errmess) => ({
    type: ActionTypes.REFDATACUSTOMERS_FAILED,
    payload: errmess
});

export const addRefdataCustomers = (refdataCustomers) => ({
    type: ActionTypes.ADD_REFDATACUSTOMERS,
    payload: refdataCustomers
});




export const fetchRefdataServices = () => (dispatch) => {
    console.log("Entering fetch reference service data");
    dispatch(refdataServicesLoading(true));

    return firestore.collection('refdataServices').get()
        .then(snapshot => {
            let refdataServices = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                refdataServices.push({_id, ...data });
            });
            return refdataServices;
        })
        .then(refdataServices => dispatch(addRefdataServices(refdataServices)))
        .catch(error => dispatch(refdataServicesFailed(error.message)));
}

export const refdataServicesLoading = () => ({
    type: ActionTypes.REFDATASERVICES_LOADING
});

export const refdataServicesFailed = (errmess) => ({
    type: ActionTypes.REFDATASERVICES_FAILED,
    payload: errmess
});

export const addRefdataServices = (refdataServices) => ({
    type: ActionTypes.ADD_REFDATASERVICES,
    payload: refdataServices
});