var firebaseConfig = {
    apiKey: "AIzaSyDqJtuoqG9-cg8vtkYeli3fpNqQ50wGgvU",
    authDomain: "smarthome-8dc55.firebaseapp.com",
    databaseURL: "https://smarthome-8dc55.firebaseio.com",
    projectId: "smarthome-8dc55",
    storageBucket: "smarthome-8dc55.appspot.com",
    messagingSenderId: "350770723905",
    appId: "1:350770723905:web:d44f88fc81f22119cadac0",
    measurementId: "G-3HDE1Z6CXV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var pir = document.getElementById("pir");

  var pre1 = firebase.database().ref().child("gerakan");
  pre1.on('value', function (datasnapshot) {
    
    let gerakan = datasnapshot.val();
    if (gerakan === 1 ){
       pir.innerText = 'Ada gerakan';
    }
    else{
        pir.innerText = 'Tidak ada gerakan';
     }
})

  var limitSwitch = document.getElementById("limitSwitch");

  var pre2 = firebase.database().ref().child("limitSwitch");
  pre2.on('value', function (datasnapshot) {
    
    let limitSwitch = datasnapshot.val();
    if (limitSwitch === 1 ){
       limitSwitch.innerText = 'Aman';
    }
    else{
        limitSwitch.innerText = 'Jendela Dibobol';
     }
})
