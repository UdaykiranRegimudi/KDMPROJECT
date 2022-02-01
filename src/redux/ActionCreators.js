import * as ActionTypes from './ActionTypes';
import { auth, firestore, firebasestore,storage } from '../firebase/firebase';
import { baseUrl } from '../config/baseUrl';
import { Switch } from 'react-router';
// import {UseEffect,useState} from 'react'

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

    return firestore.collection('userMaster').orderBy("userId", "asc").get()
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


/* MaterialMaster */
export const fetchMaterialMaster = () => (dispatch) => {
    console.log("Entering fetch reference material master data");
    dispatch(materialMasterLoading(true));

    return firestore.collection('materialMaster').orderBy("matName", "asc").get()
        .then(snapshot => {
            let materialMaster = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                materialMaster.push({_id, ...data });
            });
            return materialMaster;
        })
        .then(materialMaster => dispatch(addMaterialMaster(materialMaster)))
        .catch(error => dispatch(materialMasterFailed(error.message)));
}

export const materialMasterLoading = () => ({
    type: ActionTypes.MATERIALMASTER_LOADING
});

export const materialMasterFailed = (errmess) => ({
    type: ActionTypes.MATERIALMASTER_FAILED,
    payload: errmess
});

export const addMaterialMaster = (materialMaster) => ({
    type: ActionTypes.ADD_MATERIALMASTER,
    payload: materialMaster
});

/************************************ Master Data End **************************************/
/************************************ Order Reducers **************************************/

/* CRUD Create Order */
export const postOrder = (order, matMaster,url) => (dispatch) => {
     console.log("-----------order in postOrder-------------")

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }
    console.log(order)
    console.log(matMaster)
    
    var batch = firestore.batch()

        firestore.collection('orders').add({
            orderId: order.orderId,
            projectName: order.projectName,
            customerName: order.customerName,
            customerAddress: order.customerAddress,
            billingAddress:order.billingAddress,
            gst:order.gst,
            pan:order.pan,
            customerEmail: order.customerEmail,
            customerContact1Name: order.customerContact1Name,
            customerContact1Mobile: order.customerContact1Mobile,
            customerContact1Email: order.customerContact1Email,
            customerContact2Name: order.customerContact2Name,
            customerContact2Mobile: order.customerContact2Mobile,
            customerContact2Email: order.customerContact2Email,
            customerReference: order.customerReference,
            parentReference: order.parentReference,
            subject: order.subject,
            source: order.source,
            mats: order.mats,
            url:url,
            assignto:order.assign,
            approval:'',
            dueDate: order.dueDate,
            labLocation: order.labLocation,
            status: order.status,
            addInfo: order.addInfo,
            createdBy: auth.currentUser.email,
            createdAt: firebasestore.FieldValue.serverTimestamp()   
        })
        
        .then(() => {
                console.log("Order successfully created!");
                console.log("Order");
                alert('Order creation successful \nOrderId : ' + order.orderId);
                dispatch(fetchOrders())
                dispatch(fetchOrderJobs())
                dispatch(fetchJobs())
            })
        .catch(error =>  { console.log('Order', error.message); alert('Your order could not be created\nError: '+error.message); });
     }



    //  Approving order and creating jobs 

export const updateOrder =(order,matMaster,value,mail,info)=>
(dispatch)=>{
    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }
    console.log(value)
    console.log(order)
    console.log(info)
    console.log(order._id)
    firestore.collection("orders").doc(order._id).update({
        approval:value,
        assignto:mail,
        addInfo:info
    })
    .then(docref=>
    {
        var batch = firestore.batch()
        console.log("Order docRefId")
        console.log(order._id)

        order.mats.forEach((mat) => {

        console.log(mat)
        const matObj = matMaster.find(({matName}) => matName === mat.mat);
        console.log(matObj)

        var servCount = 1;
       
        var matSamplesArr = mat.matSamples.split(', ')
        console.log(matSamplesArr)

        for (var a in matSamplesArr)
          {
            var eachSample1 = matSamplesArr[a]
             console.log(eachSample1)
            
            mat.matParams.forEach((matParam) => {
            
            console.log(matParam)

            var testObj = matObj.tests.find(({testName}) => testName === matParam)
            console.log(testObj)

            let assign;
            switch (String(order.labLocation)) {
                case "Hyd":
                   if (testObj.discipline=="Chemical"){
                       assign ="drbsrao@kdmengineers.com"
                   }else if(testObj.discipline=="Physical"){
                       assign = "saikumar.b@kdmengineers.com"
                   }
                    break;
                case "Guntur":
                    assign = "subhashini.kunchala@kdmengineers.com"
                    break;
                case "Vizag":
                    assign = "vikramreddy.annem@kdmengineers.com"
                    break;
                default:
                    assign ="sireesha.kattula@kdmengineers.com"
                    break;
            }

            var jobDoc = {
                sample: matSamplesArr[a],
                testName: matParam,
                orderDocRefId: order._id,
                orderId: order.orderId,
                jobId: order.orderId + "/" + matObj.matPrefix+"/"+servCount,
                createdAt: firebasestore.FieldValue.serverTimestamp(),
                createdBy: auth.currentUser.email,
                dueDate: order.dueDate,
                status: "Assigned",
                assignto: assign,
                result: "",
                price: testObj.price,
                nabl: testObj.nabl,
                testMethod: testObj.testMethod,
                reqmt: testObj.reqmt,
                parentMat: testObj.parentMat,
                discipline: testObj.discipline
            }  
           console.log(jobDoc)
            servCount++
            var jobDocRef = firestore.collection('jobs').doc()

            if(value == "approve"){
            batch.set(jobDocRef, jobDoc)
            }
        })
     }    
            
    })
    batch.commit()
})
    .then(()=>{
        alert('Order updated succesfully \nOrderId : ' + order.orderId);
            dispatch(fetchOrders())
            dispatch(fetchJobs())
            dispatch(fetchOrderJobs());
    })
    .catch(error =>  { console.log('Order', error.message); alert('Your order could not be created\nError: '+error.message); });
}

/*export const approvedOrder = (order,matMaster)=>(dispatch)=>{

    
        var batch = firestore.batch()
        console.log("Order docRefId")
        console.log(order._id)

        order.mats.forEach((mat) => {

        console.log(mat)
        const matObj = matMaster.find(({matName}) => (matName === mat.mat));
        console.log(matObj)

        var servCount = 1;
       
        var matSamplesArr = mat.matSamples.split(', ')
        console.log(matSamplesArr)

        for (var a in matSamplesArr)
          {
            var eachSample1 = matSamplesArr[a]
             console.log(eachSample1)
            
            mat.matParams.forEach((matParam) => {
            
            console.log(matParam)

            var testObj = matObj.tests.find(({testName}) => testName === matParam)
            console.log(testObj)

            let assign;
            switch (String(order.labLocation)) {
                case "Hyd":
                   if (testObj.discipline=="Chemical"){
                       assign ="drbsrao@kdmengineers.com"
                   }else if(testObj.discipline=="Physical"){
                       assign = "srikanth.s@kdmengineers.com"
                   }
                    break;
                case "Guntur":
                    assign = "subhashini.kunchala@kdmengineers.com"
                    break;
                case "Vizag":
                    assign = "lakshmana.kattula@kdmengineers.com"
                    break;
                default:
                    assign ="sireesha.kattula@kdmengineers.com"
                    break;
            }

            var jobDoc = {
                sample: matSamplesArr[a],
                testName: matParam,
                orderDocRefId: order._id,
                orderId: order.orderId,
                jobId: order.orderId + "/" + matObj.matPrefix+"/"+servCount,
                createdAt: firebasestore.FieldValue.serverTimestamp(),
                createdBy: auth.currentUser.email,
                dueDate: order.dueDate,
                status: "Assigned",
                assignto: assign,
                result: "",
                price: testObj.price,
                nabl: testObj.nabl,
                testMethod: testObj.testMethod,
                reqmt: testObj.reqmt,
                parentMat: testObj.parentMat,
                discipline: testObj.discipline
            }  
           console.log(jobDoc)
            servCount++
            var jobDocRef = firestore.collection('jobs').doc()

            if(order.approval=="approve"){
            batch.set(jobDocRef, jobDoc)
            }
        })
    }
    
            batch.commit()
    })
    
 }*/






/******************************************/
{/*
export const postOrder-OLD = (order, mat
    Master) => (dispatch) => {
     console.log("-----------order in postOrder-------------")

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }
    console.log(order)
    console.log(matMaster)

    return

    //dispatch(fetchMaterialMaster());

    var batch = firestore.batch()

    if (order.labLocation === "Hyd") {
        firestore.collection('orders').add({
            orderId: order.orderId,
            projectName: order.projectName,
            customerName: order.customerName,
            customerAddress: order.customerAddress,
            customerEmail: order.customerEmail,
            customerContact1Name: order.customerContact1Name,
            customerContact1Mobile: order.customerContact1Mobile,
            customerContact1Email: order.customerContact1Email,
            customerContact2Name: order.customerContact2Name,
            customerContact2Mobile: order.customerContact2Mobile,
            customerContact2Email: order.customerContact2Email,
            customerReference: order.customerReference,
            parentReference: order.parentReference,
            subject: order.subject,
            source: order.source,
           // mat1: order.mat1,
           // m1params: order.m1params,
           // m1samples: order.m1samples,
           // mat2: order.mat2,
           // m2params: order.m2params,
           // m2samples: order.m2samples,
           // service: order.service,
            mats: order.mats,
            dueDate: order.dueDate,
            labLocation: order.labLocation,
            status: order.status,
            addInfo: order.addInfo,
            createdBy: auth.currentUser.email,
            createdAt: firebasestore.FieldValue.serverTimestamp()   
        })
        .then(docRef => {
            console.log("Order docRefId")
            console.log(docRef)

            //const mat1Name = order.mat1
            console.log(order.mat1)
            const matObj1 = matMaster.find(({matName}) => matName === order.mat1 )
            console.log(matObj1)

            var servCount1 = 1;
           
            var m1samplesArr = order.m1samples.split(', ')
            console.log(m1samplesArr)
            for (var a in m1samplesArr)
              {
                var eachSample1 = m1samplesArr[a]
                 console.log(eachSample1)
                 
                order.m1params.forEach((m1param) => {
                
                console.log(m1param)

                var testObj1 = matObj1.tests.find(({testName}) => testName === m1param)
                console.log(testObj1)

                var jobDoc = {
                    sample: m1samplesArr[a],
                    testName: m1param,
                    orderDocRefId: docRef,
                    orderId: order.orderId,
                    jobId: order.orderId + "-" + m1samplesArr[a] + "-" + servCount1,
                    createdAt: firebasestore.FieldValue.serverTimestamp(),
                    createdBy: auth.currentUser.email,
                    dueDate: order.dueDate,
                    status: "Assigned",
                    assignto: "drbsrao@kdmengineers.com",
                    result: "",
                    price: testObj1.price,
                    nabl: testObj1.nabl,
                    testMethod: testObj1.testMethod,
                    reqmt: testObj1.reqmt,
                    parentMat: testObj1.parentMat
                }  
               
                servCount1++
                var jobDocRef = firestore.collection('jobs').doc()
                batch.set(jobDocRef, jobDoc)
              });
            }

            //const mat2Name = order.mat2
            console.log(order.mat2)
            const matObj2 = matMaster.find(({matName}) => matName === order.mat2 )
            console.log(matObj2)

            var servCount2 = 1;
           
            var m2samplesArr = order.m2samples.split(', ')
            console.log(m2samplesArr)
            for (var b in m2samplesArr)
              {
                var eachSample2 = m2samplesArr[b]
                 console.log(eachSample2)
                 
                order.m2params.forEach((m2param) => {
                
                console.log(m2param)

                var testObj2 = matObj2.tests.find(({testName}) => testName === m2param)
                console.log(testObj2)

                var jobDoc = {
                    sample: m2samplesArr[b],
                    testName: m2param,
                    orderDocRefId: docRef,
                    orderId: order.orderId,
                    jobId: order.orderId + "-" + m2samplesArr[b] + "-" + servCount2,
                    createdAt: firebasestore.FieldValue.serverTimestamp(),
                    createdBy: auth.currentUser.email,
                    dueDate: order.dueDate,
                    status: "Assigned",
                    assignto: "drbsrao@kdmengineers.com",
                    result: "",
                    price: testObj2.price,
                    nabl: testObj2.nabl,
                    testMethod: testObj2.testMethod,
                    reqmt: testObj2.reqmt,
                    parentMat: testObj2.parentMat
                }  
               
                servCount2++
                var jobDocRef = firestore.collection('jobs').doc()
                batch.set(jobDocRef, jobDoc)
              });
            }
                batch.commit()
        })
        .then(() => {
                console.log("Order successfully created!");
                console.log("Order");
                alert('Order creation successful \nOrderId : ' + order.orderId);
                dispatch(fetchOrders())
                dispatch(fetchOrderJobs())
                dispatch(fetchJobs())
            })
        .catch(error =>  { console.log('Order', error.message); alert('Your order could not be created\nError: '+error.message); });
    }

    else if (order.labLocation === "Guntur") {

    firestore.collection('orders').add({
            orderId: order.orderId,
            projectName: order.projectName,
            customerName: order.customerName,
            customerAddress: order.customerAddress,
            customerEmail: order.customerEmail,
            customerContact1Name: order.customerContact1Name,
            customerContact1Mobile: order.customerContact1Mobile,
            customerContact1Email: order.customerContact1Email,
            customerContact2Name: order.customerContact2Name,
            customerContact2Mobile: order.customerContact2Mobile,
            customerContact2Email: order.customerContact2Email,
            customerReference: order.customerReference,
            parentReference: order.parentReference,
            subject: order.subject,
            source: order.source,
            mat1: order.mat1,
            m1params: order.m1params,
            m1samples: order.m1samples,
            mat2: order.mat2,
            m2params: order.m2params,
            m2samples: order.m2samples,
           // service: order.service,
            dueDate: order.dueDate,
            labLocation: order.labLocation,
            status: order.status,
            addInfo: order.addInfo,
            createdBy: auth.currentUser.email,
            createdAt: firebasestore.FieldValue.serverTimestamp()   
        })
        .then(docRef => {
            console.log("Order docRefId")
            console.log(docRef)

            //const mat1Name = order.mat1
            console.log(order.mat1)
            const matObj1 = matMaster.find(({matName}) => matName === order.mat1 )
            console.log(matObj1)

            var servCount1 = 1;
           
            var m1samplesArr = order.m1samples.split(', ')
            console.log(m1samplesArr)
            for (var a in m1samplesArr)
              {
                var eachSample1 = m1samplesArr[a]
                 console.log(eachSample1)
                 
                order.m1params.forEach((m1param) => {
                
                console.log(m1param)

                var testObj1 = matObj1.tests.find(({testName}) => testName === m1param)
                console.log(testObj1)

                var jobDoc = {
                    sample: m1samplesArr[a],
                    testName: m1param,
                    orderDocRefId: docRef,
                    orderId: order.orderId,
                    jobId: order.orderId + "-" + m1samplesArr[a] + "-" + servCount1,
                    createdAt: firebasestore.FieldValue.serverTimestamp(),
                    createdBy: auth.currentUser.email,
                    dueDate: order.dueDate,
                    status: "Assigned",
                    assignto: "lakshmana.kattula@kdmengineers.com",
                    result: "",
                    price: testObj1.price,
                    nabl: testObj1.nabl,
                    testMethod: testObj1.testMethod,
                    reqmt: testObj1.reqmt,
                    parentMat: testObj1.parentMat
                }  
               
                servCount1++
                var jobDocRef = firestore.collection('jobs').doc()
                batch.set(jobDocRef, jobDoc)
              });
            }

            //const mat2Name = order.mat2
            console.log(order.mat2)
            const matObj2 = matMaster.find(({matName}) => matName === order.mat2 )
            console.log(matObj2)

            var servCount2 = 1;
           
            var m2samplesArr = order.m2samples.split(', ')
            console.log(m2samplesArr)
            for (var b in m2samplesArr)
              {
                var eachSample2 = m2samplesArr[b]
                 console.log(eachSample2)
                 
                order.m2params.forEach((m2param) => {
                
                console.log(m2param)

                var testObj2 = matObj2.tests.find(({testName}) => testName === m2param)
                console.log(testObj2)

                var jobDoc = {
                    sample: m2samplesArr[b],
                    testName: m2param,
                    orderDocRefId: docRef,
                    orderId: order.orderId,
                    jobId: order.orderId + "-" + m2samplesArr[b] + "-" + servCount2,
                    createdAt: firebasestore.FieldValue.serverTimestamp(),
                    createdBy: auth.currentUser.email,
                    dueDate: order.dueDate,
                    status: "Assigned",
                    assignto: "lakshmana.kattula@kdmengineers.com",
                    result: "",
                    price: testObj2.price,
                    nabl: testObj2.nabl,
                    testMethod: testObj2.testMethod,
                    reqmt: testObj2.reqmt,
                    parentMat: testObj2.parentMat
                }  
               
                servCount2++
                var jobDocRef = firestore.collection('jobs').doc()
                batch.set(jobDocRef, jobDoc)
              });
            }
                batch.commit()
        })
        .then(() => {
                console.log("Order successfully created!");
                console.log("Order");
                alert('Order creation successful \nOrderId : ' + order.orderId);
                dispatch(fetchOrders())
                dispatch(fetchOrderJobs())
                dispatch(fetchJobs())
            })
        .catch(error =>  { console.log('Order', error.message); alert('Your order could not be created\nError: '+error.message); });
    }

    else {
    
    firestore.collection('orders').add({
            orderId: order.orderId,
            projectName: order.projectName,
            customerName: order.customerName,
            customerAddress: order.customerAddress,
            customerEmail: order.customerEmail,
            customerContact1Name: order.customerContact1Name,
            customerContact1Mobile: order.customerContact1Mobile,
            customerContact1Email: order.customerContact1Email,
            customerContact2Name: order.customerContact2Name,
            customerContact2Mobile: order.customerContact2Mobile,
            customerContact2Email: order.customerContact2Email,
            customerReference: order.customerReference,
            parentReference: order.parentReference,
            subject: order.subject,
            source: order.source,
            mat1: order.mat1,
            m1params: order.m1params,
            m1samples: order.m1samples,
            mat2: order.mat2,
            m2params: order.m2params,
            m2samples: order.m2samples,
           // service: order.service,
            dueDate: order.dueDate,
            labLocation: order.labLocation,
            status: order.status,
            addInfo: order.addInfo,
            createdBy: auth.currentUser.email,
            createdAt: firebasestore.FieldValue.serverTimestamp()   
        })
        .then(docRef => {
            console.log("Order docRefId")
            console.log(docRef)

            //const mat1Name = order.mat1
            {if ((order.mat1)!= ""){
            
            console.log(order.mat1)
            const matObj1 = matMaster.find(({matName}) => matName === order.mat1 )
            console.log(matObj1)

            var servCount1 = 1;
           
            var m1samplesArr = order.m1samples.split(', ')
            console.log(m1samplesArr)
            for (var a in m1samplesArr)
              {
                var eachSample1 = m1samplesArr[a]
                 console.log(eachSample1)
                 
                order.m1params.forEach((m1param) => {
                
                console.log(m1param)

                var testObj1 = matObj1.tests.find(({testName}) => testName === m1param)
                console.log(testObj1)

                var jobDoc = {
                    sample: m1samplesArr[a],
                    testName: m1param,
                    orderDocRefId: docRef,
                    orderId: order.orderId,
                    jobId: order.orderId + "-" + m1samplesArr[a] + "-" + servCount1,
                    createdAt: firebasestore.FieldValue.serverTimestamp(),
                    createdBy: auth.currentUser.email,
                    dueDate: order.dueDate,
                    status: "Assigned",
                    assignto: "sireesha.kattula@kdmengineers.com",
                    result: "",
                    price: testObj1.price,
                    nabl: testObj1.nabl,
                    testMethod: testObj1.testMethod,
                    reqmt: testObj1.reqmt,
                    parentMat: testObj1.parentMat
                }  
               
                servCount1++
                var jobDocRef = firestore.collection('jobs').doc()
                batch.set(jobDocRef, jobDoc)
              });
            }
            }}
            //const mat2Name = order.mat2
           {if ((order.mat2)!= ""){

            console.log(order.mat2)
            const matObj2 = matMaster.find(({matName}) => matName === order.mat2 )
            console.log(matObj2)

            var servCount2 = 1;
           
            var m2samplesArr = order.m2samples.split(', ')
            console.log(m2samplesArr)
            for (var b in m2samplesArr)
              {
                var eachSample2 = m2samplesArr[b]
                 console.log(eachSample2)
                 
                order.m2params.forEach((m2param) => {
                
                console.log(m2param)

                var testObj2 = matObj2.tests.find(({testName}) => testName === m2param)
                console.log(testObj2)

                var jobDoc = {
                    sample: m2samplesArr[b],
                    testName: m2param,
                    orderDocRefId: docRef,
                    orderId: order.orderId,
                    jobId: order.orderId + "-" + m2samplesArr[b] + "-" + servCount2,
                    createdAt: firebasestore.FieldValue.serverTimestamp(),
                    createdBy: auth.currentUser.email,
                    dueDate: order.dueDate,
                    status: "Assigned",
                    assignto: "sireesha.kattula@kdmengineers.com",
                    result: "",
                    price: testObj2.price,
                    nabl: testObj2.nabl,
                    testMethod: testObj2.testMethod,
                    reqmt: testObj2.reqmt,
                    parentMat: testObj2.parentMat
                }  
               
                servCount2++
                var jobDocRef = firestore.collection('jobs').doc()
                batch.set(jobDocRef, jobDoc)
              });
             }
            }}
                batch.commit() 
        })
        .then(() => {
                console.log("Order successfully created!");
                console.log("Order");
                alert('Order creation successful \nOrderId : ' + order.orderId);
                dispatch(fetchOrders())
                dispatch(fetchOrderJobs())
                dispatch(fetchJobs())
            })
        .catch(error =>  { console.log('Order', error.message); alert('Your order could not be created\nError: '+error.message); });
    }

}

*/}
/***********************************/


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
    else if (user.email == "customercare@gmail.com")
    { 
       /* Query for last 7 days (604800000 in millisec) 
        1 hr = 3600000 millisec
        10 hrs = 36000000
        24 hrs or 1 day = 86400000
        7 days = 604800000
       */
            
            return firestore.collection('orders').where('createdBy', '==' , user.email).get()

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
    // firestore.collection('orders').where('createdBy', '==', user.email).orderBy("createdAt", "desc").get()
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
        .then(orders => {
            dispatch(addOrders(orders))
            //testing sendEmail()
            //console.log("Calling send Email")
            //sendEmail("sireelaks@gmail.com")
            
            /*fetch(baseUrl)
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
            */

         })
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

    if (!auth.currentUser) {        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;
    console.log("currentuser", user);

    console.log("Entering fetch order jobs");
    dispatch(orderJobsLoading(true));

    console.log("assigned user");

    
    return firestore.collection('jobs').orderBy("jobId", "asc").get()
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


export const postCalupdate= (docrefId, jobId,result,value,job) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    
    console.log(docrefId)
    console.log(jobId)
    console.log(result)
    console.log(job)

    /*=========================*/
    console.log("Calling job document update");
     if(job.testName == "Normal Consistency"){
     firestore.collection("orders").doc(job.orderDocRefId).update({
         "Normal":result
     })
     }else if(job.testName == "Calcium Oxide"){
        firestore.collection("orders").doc(job.orderDocRefId).update({
            "Calcium":result
        })
     }else if(job.testName == "Sulfuric Anhydride"){
        firestore.collection("orders").doc(job.orderDocRefId).update({
            "Sul":result
        })
     }else if(job.testName == "Alumina"){
        firestore.collection("orders").doc(job.orderDocRefId).update({
            "Alumina":result
        })
     }else if(job.testName == "Silica content"){
        firestore.collection("orders").doc(job.orderDocRefId).update({
            "Silica":result
        })
     }else if(job.testName == "Ferric Oxide"){
        firestore.collection("orders").doc(job.orderDocRefId).update({
            "Ferric":result   
        })
     }else if(job.testName == "Density"){
        firestore.collection("orders").doc(job.orderDocRefId).update({
            "Density":result   
        })
     }

    //  if(job.Ferric !=undefined && job.Silica !=undefined && job.Alumina !=undefined && job.Sul != undefined && job.Calcium !=undefined ){
    //     const LSF = eval((parseInt(job.Calcium) - (0.7*parseInt(job.Sul)))/(2.8*parseInt(job.Silica)+ 1.2*parseInt(job.Alumina)+ 0.65*parseInt(job.Ferric)))
    //     firestore.collection("orders").doc(job.orderDocRefId).update({
    //        "LSF":LSF   
    //    })
    // }

    // if(job.Ferric != undefined && job.Alumina != undefined){
    //     const AF = eval(parseInt(job.Alumina)/parseInt(job.Alumina))
    //     firestore.collection("orders").doc(job.orderDocRefId).update({
    //        "AF":AF   
    //    })
    // }
     
    
    return  firestore.collection("jobs").doc(docrefId).update({
            "result": result,
            "author": {
                '_id': auth.currentUser.uid,
                'firstname' : auth.currentUser.displayName ? auth.currentUser.displayName : auth.currentUser.email
            },
            "Value":value
        })
        .then(() => {
            console.log("Document successfully updated!");
            dispatch(fetchJobs())
            dispatch(fetchOrderJobs())
            dispatch(fetchOrders())
        })
    // .then(docRef => {
    //     console.log("docRef of new jobupdate")
    //     console.log(docRef)
    //                 dispatch(fetchJobs())
    //                 dispatch(fetchOrders())
                    
    //         })
}

/* CRUD Update Job */

export const selectedJobs =(myArray,assignto)=>(dispatch)=>{
    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    console.log(myArray)
    console.log(assignto)

    /*=========================*/
    console.log("Calling job document update");
    let assign;
    switch (assignto) {
        case "Ramesh Lingoji":
            assign="ramesh.lingoji@kdmengineers.com"
            break;
        case "Srinivas B":
            assign="srinivas.b@kdmengineers.com"
            break;
        case "Srikanth S":
            assign="srikanth.s@kdmengineers.com"
            break;
        case "Chandrasekhar S":
            assign="chandrasekhar.s@kdmengineers.com"
            break;
        case "Saikumar B":
            assign="saikumar.b@kdmengineers.com"
            break;
        case "Dr B S Rao":
            assign="drbsrao@kdmengineers.com"
            break;
        case "Lakshmana Kattula":
            assign="lakshmana.kattula@kdmengineers.com"
            break;
        case "Srinivas Murahari":
            assign="srinivasarao.murahari@kdmengineers.com"
            break;
        case "Sailatha K":
            assign="sailatha.k@kdmengineers.com"
            break;
        case "Customer care":
            assign="customercare@gmail.com"
            break;
        case "Vikram Annem":
            assign="vikramreddy.annem@kdmengineers.com"
            break;
        case "Sireesha Kattula":
            assign ="sireesha.kattula@kdmengineers.com"
            break;
        default:
            break;
    }
    for(let i of myArray){
        firestore.collection("jobs").doc(i).update({
            "assignto": assign
        })
    
        .then(() => {
            dispatch(fetchJobs());
        });
    }

}

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
    let assign;
    switch (assignto) {
        case "Sireesha Kattula":
            assign ="sireesha.kattula@kdmengineers.com"
            break;
        case "Ramesh Lingoji":
            assign="ramesh.lingoji@kdmengineers.com"
            break;
        case "Srinivas B":
            assign="srinivas.b@kdmengineers.com"
            break;
        case "Srikanth S":
            assign="srikanth.s@kdmengineers.com"
            break;
        case "Chandrasekhar S":
            assign="chandrasekhar.s@kdmengineers.com"
            break;
        case "Saikumar B":
            assign="saikumar.b@kdmengineers.com"
            break;
        case "Dr B S Rao":
            assign="drbsrao@kdmengineers.com"
            break;
        case "Lakshmana Kattula":
            assign="lakshmana.kattula@kdmengineers.com"
            break;
        case "Srinivas Murahari":
            assign="srinivasarao.murahari@kdmengineers.com"
            break;
        case "Sailatha K":
            assign="sailatha.k@kdmengineers.com"
            break;
        case "Customer care":
            assign="customercare@gmail.com"
            break;
        case "Vikram Annem":
            assign="vikramreddy.annem@kdmengineers.com"
            break;
        default:
            break;
    }
        firestore.collection("jobs").doc(docrefId).update({
            "status": status,
            "assignto": assign
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
        assignto: assign,
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
    console.log('baseUrl')
    console.log(baseUrl)

    console.log("Calling fetch")

    //fetch(baseUrl)
    fetch(baseUrl + '/submit')
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
}

/************************************ Test function - End **************************************/