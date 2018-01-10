// Initialize Firebase
var config = {
  apiKey: "AIzaSyBpG9b8hflQTM7jROn7PNdU0SRxgT5Nrck",
  authDomain: "employeedataman.firebaseapp.com",
  databaseURL: "https://employeedataman.firebaseio.com",
  projectId: "employeedataman",
  storageBucket: "",
  messagingSenderId: "1047512030259"
};
firebase.initializeApp(config);
var database=firebase.database();
var nameDb;
var roleDb;
var startDb;
var rateDb;
var keyDb;
$("#submitEmployee").on("click", function() {
  // Don't refresh the page!
  event.preventDefault();

  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Don't forget to provide initial data to your Firebase database.
  name = $("#employeeNameInput").val().trim();
  role = $("#employeeRoleInput").val().trim();
  start = $("#employeeStartInput").val().trim();
  rate = $("#employeeRateInput").val().trim();

  database.ref().push({
    name: name,
    role: role,
    start: start,
    rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});
database.ref().orderByKey().on("child_added", function(snapshot) {

  // Log everything that's coming out of snapshot

  nameDb = (snapshot.val().name);
  roleDb=(snapshot.val().role);
  startDb=(snapshot.val().start);
  rateDb=(snapshot.val().rate);
  keyDb=(snapshot.key);


  var tRow = $("<tr>");
  var nameTd = $("<td>").text(nameDb);
  var roleTd = $("<td>").text(roleDb);
  var startTd = $("<td>").text(startDb);
  var rateTd = $("<td>").text(rateDb);
  var monthsTd =$("<td>").text("monthsWorked");
  var billedTd = $("<td>").text("billedTotal");
  var removeButton=$("<button>");
  removeButton.addClass("btn btn-primary remove");
  removeButton.text("Remove");
  var removeTd= $("<td>");
  removeTd.append(removeButton);
  tRow.append(nameTd, roleTd, startTd, rateTd, monthsTd, billedTd, removeTd);
  $(".awesomeTbody").append(tRow);

  // Handle the errors
  // }, function(errorObject) {
  //   console.log("Errors handled: " + errorObject.code);
});
$(document).on("click",".remove",function(){

})

