//creating signin and signup variables
let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let container = document.getElementById('container');

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

//creating function to signup
function signup(event){
  event.preventDefault();

  let name_variable = document.getElementById("signup_name").value
  let email_variable = document.getElementById("signup_email").value
  let password_variable = document.getElementById("signup_password").value
  console.log(name_variable, " ", email_variable, " ", password_variable);

  localStorage.setItem("names", name_variable)
  localStorage.setItem("emails", email_variable)
  localStorage.setItem("passwords", password_variable)
}

//reset function
function resetFields(){
  document.getElementById("name").reset()
  document.getElementById("email").reset()
  document.getElementById("password").reset()
}

//login function
function login(event){
  event.preventDefault();

  let email_variable=document.getElementById("login_email").value
  let password_variable=document.getElementById("login_password").value

//setting local storage for emails and passwords
  let emails=localStorage.getItem("emails")
  let passwords=localStorage.getItem("passwords")

  console.log(email_variable, "--->", emails);
  console.log(password_variable, "--->", passwords);

//conditons for successful and unsuccessful logins

  if (email_variable==emails && password_variable==passwords) {
    console.log("login successful");
    window.location.href="../Pages/todo/index.html"
  } else {
    console.log("Incorrect email and password");
    alert("Re-enter credentials or create new account")
  }
}
//end//