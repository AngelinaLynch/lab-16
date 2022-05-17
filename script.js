
function submitForum(){
  var x=document.getElementById("before");
  var y = document.getElementById("after");
 
if (x.style.display === "none") {
  x.style.display = "block";
  x.style.opacity="1";
  y.style.display= "none";
  y.style.opacity="0";
} else{
  x.style.display = "none";
  y.style.display = "block";
  y.style.opacity="0";

}
//this makes what you wrote in the submit form show up//
  let username = document.userform.input_username.value;
  let userEmail = document.userform.input_email.value;
  let userPhone = document.userform.input_phoneNum.value;
  let userNameResult = document.getElementById("nameResult");
  let emailResult = document.getElementById("emailResult");
  let phoneResult = document.getElementById("phoneNumResult");

  nameResult.innerHTML = user_name;
 emailResult.innerHTML = userEmail;
 phoneResult.innerHTML = userPhone;
 console.log(userEmail, userPhone, username);
}
