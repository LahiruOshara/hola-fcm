const messaging = firebase.messaging();
const database = firebase.firestore();
const auth = firebase.auth();
const signInButton = document.getElementById('sign-in');
// public key
messaging.usePublicVapidKey("BIPiJNfwV2ZifkT78-y48MytNEajaiuROz9M1jveHSNbwap_NZcxSri7j9LiD2WYTdp1VydzUc_ZyfbGvIBqlGU");

//event listeners
signInButton.addEventListener("click", signIn);

//****functions****//
//notification
function enableNotification(){
    messaging.requestPermission()
        .then(function() {
            console.log('Notification permission granted.');
            return messaging.getToken();
        })
        .then(function(token){
            console.log(token);
            database.collection("fcmTokens").doc("Company_1").set({
                token: token,
                userId:auth.currentUser.uid
            });
            console.log("token added");
        })
        .catch(function(err) {
            console.log('Unable to get permission to notify.', err);
    });
}

//signin
function signIn(){
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(function(){
        enableNotification();
        console.log('going to the msg page');
        window.location.href="./messaging.html";
        
    });
}

//on page
/*messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);
});
*/
