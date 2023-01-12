import firebase from 'firebase';

// adicione SDK do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyD8Eg2psc8ceEPa9a_CJ1VLea_33oZheys",
        authDomain: "projeto-c67-1ef1f.firebaseapp.com",
        projectId: "projeto-c67-1ef1f",
        storageBucket: "projeto-c67-1ef1f.appspot.com",
        messagingSenderId: "1031312336753",
        appId: "1:1031312336753:web:52661667a8f58702dff8d0"
      };

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();