importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//       .then(function(registration) {
//         console.log('Registration successful, scope is:', registration.scope);
//       }).catch(function(err) {
//         console.log('Service worker registration failed, error:', err);
//       });
//     }

firebase.initializeApp({
  apiKey: "AIzaSyBA8XkTJeGGy8r48j6hdHHN6s5q6ZGVfRo",

  authDomain: "push-notifications-d71a4.firebaseapp.com",

  projectId: "push-notifications-d71a4",

  storageBucket: "push-notifications-d71a4.appspot.com",

  messagingSenderId: "620873748370",

  appId: "1:620873748370:web:d7e2ebd443b4fb0e29bb4b",

  measurementId: "G-3FC54WY2FD"


});

const initMessaging = firebase.messaging();

initMessaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
      icon: '/firebase-logo.png'
    };
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  
  self.addEventListener('notificationclick', event => {
    console.log(event)
    return event;
  });

