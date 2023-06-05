var firebaseConfig = {
      apiKey: "AIzaSyALdPZxDbqHrTRL4mJ8qVqjNZycRsSeEMA",
      authDomain: "kwitter-7b14e.firebaseapp.com",
      databaseURL: "https://kwitter-7b14e-default-rtdb.firebaseio.com",
      projectId: "kwitter-7b14e",
      storageBucket: "kwitter-7b14e.appspot.com",
      messagingSenderId: "480491956129",
      appId: "1:480491956129:web:465c270af3fb3859834de0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
