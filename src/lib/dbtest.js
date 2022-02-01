import { auth, firestore } from '../firebase/firebase';

export const dbtest = () => {

console.log("&&&&&&&&&&&&&&&&&&&&& In dbtest.js")

if (!auth.currentUser) {
    console.log('No user logged in!');
    return;
}

var user = auth.currentUser;
console.log("currentuser", user);
console.log("printing jobid from DB collection")

/*var testdbRef = firestore.collection("job").doc("29Dy6FXwALfYtJMpg9Yn");

testdbRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data exists:", doc.data());

            testdbRef.update({
                "status": "InProgress",
              "assignto": "dishalasya@gmail.com"
            })
            .then(() => {
                console.log("+++++++Status and Assigned to in the document successfully updated!");
            }); 

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

}*/

firestore.collection("job").doc("29Dy6FXwALfYtJMpg9Yn").update({
    "description": "testing of document update by doc id",
})
.then(() => {
    console.log("Document successfully updated!");
});
}


