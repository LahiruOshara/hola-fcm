const messaging = firebase.messaging();
messaging.usePublicVapidKey("BIPiJNfwV2ZifkT78-y48MytNEajaiuROz9M1jveHSNbwap_NZcxSri7j9LiD2WYTdp1VydzUc_ZyfbGvIBqlGU");

const msg=document.getElementById('alert');


//on page
messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);
    msg.removeAttribute("hidden");
    msg.innerHTML=(payload.notification.title+"\n"+payload.notification.body+"\n"+"go to page"+"\n");
    
});

