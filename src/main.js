import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from '../router';

// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = { 
//     apiKey: "AIzaSyCeomdbQtPq6KavqA9VpbP4KCymTxfommw",
//     authDomain: "kemenag-c52b5.firebaseapp.com",
//     projectId: "kemenag-c52b5",
//     storageBucket: "kemenag-c52b5.firebasestorage.app",
//     messagingSenderId: "90318074505",
//     appId: "1:90318074505:web:cc183d631a87fe86c2cc58",
//     measurementId: "G-0M8DEKD4R6"
//  };
// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);

// export async function requestAndSaveFcmToken(authToken) {
//     try {
//       const permission = await Notification.requestPermission();
//       if (permission !== 'granted') {
//         console.warn('FCM permission not granted');
//         return;
//       }
  
//       // Daftarkan file SW dari public
//       await navigator.serviceWorker.register('/firebase-messaging-sw.js');
  
//       // Tunggu sampai browser mengontrol page dengan SW itu
//       const swReg = await navigator.serviceWorker.ready;
  
//       // Sekarang dapatkan token dengan SW yang sudah aktif
//       const fcmToken = await getToken(messaging, {
//         vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
//         serviceWorkerRegistration: swReg,
//       });
//       if (!fcmToken) {
//         console.warn('Failed to get FCM token');
//         return;
//       }
  
//       // Kirim ke backend
//       await fetch(`${import.meta.env.VITE_API_URL}/save-fcm-token`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${authToken}`,
//         },
//         body: JSON.stringify({ token: fcmToken }),
//       });
//       console.log('✅ FCM token saved:', fcmToken);
  
//     } catch (err) {
//       console.error('❌ Error saving FCM token:', err);
//     }
//   }
  

// onMessage(messaging, payload => {
//   console.log('🔔 FCM foreground message:', payload);
// });

const app = createApp(App);
app.use(router);
app.mount('#app');
