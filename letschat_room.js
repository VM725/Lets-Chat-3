// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB0oLQkxXPWRgXLZlOm3gG9LKCrUnOK-mg",
      authDomain: "lets-chat-841c3.firebaseapp.com",
      databaseURL: "https://lets-chat-841c3-default-rtdb.firebaseio.com",
      projectId: "lets-chat-841c3",
      storageBucket: "lets-chat-841c3.appspot.com",
      messagingSenderId: "230047808796",
      appId: "1:230047808796:web:10894398d44a33c8194ed9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="letschat_room.html";
}
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="letschat_room.html";
 }