
// Your web app's Firebase configuration
 export const initFirebase =  () => {
    // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyBydNIbOw-bpPza2nEicwHYMgHdgKIcX0o",
    authDomain: "scl011-social-network-ce8f1.firebaseapp.com",
    databaseURL: "https://scl011-social-network-ce8f1.firebaseio.com",
    projectId: "scl011-social-network-ce8f1",
    storageBucket: "scl011-social-network-ce8f1.appspot.com",
    messagingSenderId: "893607881781",
    appId: "1:893607881781:web:2e86fb8d76f5d75d64957c",
    measurementId: "G-X8X1EXEEP7"
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
    