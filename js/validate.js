function ValidateForm() {
 var name = document.getElementById("name");
 var last_name = document.getElementById("last_name");
 var city = document.getElementById("city");
 var estate = document.getElementById("estate");
 var mail = document.getElementById("mail");
 var phoneNum = document.getElementById("phoneNum");
 var message = document.getElementById("message");
 var acepto = document.getElementById("acepto");
 var valid = true;
 if (name.value.length == 0) {
  name.className = "wrong-input";
  valid = false;
 }
 if (last_name.value.length == 0) {
  last_name.className = "wrong-input";
  valid = false;
 }
 if (city.value.length == 0) {
  city.className = "wrong-input";
  valid = false;
 }
 if (estate.value.length == 0) {
  estate.className = "wrong-input";
  valid = false;
 }
 if (mail.value.length == 0) {
  mail.className = "wrong-input";
  valid = false;
 }
 if (phoneNum.value.length < 10) {
  phoneNum.className = "wrong-input";
  valid = false;
 }
 if (message.value.length < 10) {
  message.className = "wrong-input";
  valid = false;
 }
 if (acepto.checked) {
  message.className = "wrong-input";
  valid = false;
 }
 return valid;
}