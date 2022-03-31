const firebaseConfig = {
  apiKey: "AIzaSyDaNRi01T869j0i-bP4fcUWoFEAqLQ4UCc",
  authDomain: "tenwords-91574.firebaseapp.com",
  projectId: "tenwords-91574",
  storageBucket: "tenwords-91574.appspot.com",
  messagingSenderId: "808767742785",
  appId: "1:808767742785:web:afa464c329dde9323937c0",
  measurementId: "G-7YP48C1N6M"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var auth =  firebase.auth();
var db = firebase.firestore();
var storage = firebase.storage();
var uid;

start();

function start(){
   document.getElementById("settings").style.display = "none";
   auth.onAuthStateChanged((user) => {
      if (user) {
         uid = user.uid;
         document.getElementById("userName").innerHTML = user.displayName;
         document.getElementById("userEmail").innerHTML = user.email;
         setProfileImage();
         db.collection("tenwords").doc(uid).get().then((doc) => {
            document.getElementById("userQuote").innerHTML = doc.data().quote;
         });
         startSet();
      } else {
         window.open('https://tenwords.kz', '_self');
      }
   });
}

function setProfileImage(){
   storage.ref('profilePictures/'+uid).listAll().then((res) => {
      if (res.items[0]) {
         res.items[0].getDownloadURL().then((url) => {
            document.getElementById("userImage").src = url;
         });
      } else {
         storage.ref('profilePictures/default/account.png').getDownloadURL().then((url) => {
            document.getElementById("userImage").src = url;
         });
      }
   });
}

function openSettings(){
   document.getElementById('settings').style.display = "flex";
   document.getElementById('background').style.filter = "blur(10px)";
   document.getElementById('background').style.pointerEvents = "none";

   document.getElementById('setUserName').value = document.getElementById("userName").innerHTML;
   document.getElementById('setUserQuote').value = document.getElementById("userQuote").innerHTML;
}

function closeSettings(){
   user = auth.currentUser;
   document.getElementById('settings').style.display = "none";
   document.getElementById('background').style.filter = "blur(0px)";
   document.getElementById('background').style.pointerEvents = "auto";

   var oldUserName = document.getElementById("userName").innerHTML;
   var newUserName = document.getElementById('setUserName').value;
   var oldUserQuote = document.getElementById("userQuote").innerHTML;
   var newUserQuote = document.getElementById('setUserQuote').value;

   if (oldUserName != newUserName) {
      user.updateProfile({
         displayName: newUserName
      }).then(() => {
         document.getElementById("userName").innerHTML = user.displayName;
      }).catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         alert( 'Unable to update user name. \n' + errorCode + ' -- ' + errorMessage);
      });
   }

   if (oldUserQuote != newUserQuote) {
      db.collection("tenwords").doc(uid).update({
         quote: newUserQuote
      }).then(() => {
         document.getElementById("userQuote").innerHTML = newUserQuote;
      }).catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         alert( 'Unable to update quote. \n' + errorCode + ' -- ' + errorMessage);
      });
   }

   var file = document.getElementById("setUserFile").files[0];
   if (file) {
      storage.ref('profilePictures/'+uid).listAll().then((res) => {
         if (res.items[0]) {
            res.items[0].delete().then(() => {
               storage.ref('profilePictures/'+uid+'/'+file.name).put(file).then(() => {
                  setProfileImage();
               });
            });
         } else {
            storage.ref('profilePictures/'+uid+'/'+file.name).put(file).then(() => {
               setProfileImage();
            });
         }
      });
   }
}

function updateProfileImage(){
   var name = document.getElementById("userImage").src;

   storage.refFromURL(name).delete().then(() => {

   });

   storage.ref('profilePictures/'+uid+'/profile.jpg').put(file).then((snapshot) => {
      updateProfileImage(uid);
   }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert( 'Unable to update profile picture. \n' + errorCode + ' -- ' + errorMessage);
   });

   storage.ref('profilePictures/'+uid).listAll().then((res) => {
      if (res.items[0]) {
         res.items[0].getDownloadURL().then((url) => {
            document.getElementById("userImage").src = url;
         });
      } else {
         storage.ref('profilePictures/default/account.png').getDownloadURL().then((url) => {
            document.getElementById("userImage").src = url;
         });
      }
   });
}

function openPage(page){
   if (page == 'account'){
      window.open('https://tenwords.kz/account/', "_self");
   } else if (page == 'login') {
      sessionStorage.setItem('login', 1);
      window.open('https://tenwords.kz/login/', "_self");
   } else if (page == 'signup') {
      sessionStorage.setItem('login', 2);
      window.open('https://tenwords.kz/login/', "_self");
   }
}

function signOut(){
   localStorage.clear();
   auth.signOut().then(() => {
      window.open('https://tenwords.kz', "_self");
   });
}

function fileName(){
   var file = document.getElementById("setUserFile").files[0];
   document.getElementById("fileName").innerHTML = file.name;
}
