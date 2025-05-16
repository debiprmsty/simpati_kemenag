// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCeomdbQtPq6KavqA9VpbP4KCymTxfommw",
  authDomain: "kemenag-c52b5.firebaseapp.com",
  projectId: "kemenag-c52b5",
  storageBucket: "kemenag-c52b5.firebasestorage.app",
  messagingSenderId: "90318074505",
  appId: "1:90318074505:web:cc183d631a87fe86c2cc58",
  measurementId: "G-0M8DEKD4R6"
});

const messaging = firebase.messaging();

// Ketika push datang saat browser/tab tidak aktif
messaging.onBackgroundMessage(payload => {
    const { title, body } = payload.notification;
    self.registration.showNotification(title, { body});
});
