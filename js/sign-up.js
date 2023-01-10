const fName =document.getElementById("fName")
const lName =document.getElementById("lName")
const mobileNumber =document.getElementById("mobileNumber")
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const SignUp = () => {
  if (email.value === "") {
    message.innerHTML = "Email required!";
    message.style.color = "red";
  } else if (password.value === "") {
    message.innerHTML = "Password required!";
    message.style.color = "red";
  } else {
    const userData = {
      First_Name: fName.value,
      Last_Name: lName.value,
      mobile_Number: mobileNumber.value,
      email: email.value,
      password: password.value,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        res.user.sendEmailVerification();
        message.innerHTML = "Sign Up";
        message.style.color = "green";
        firebase.database().ref("user/" + res.user.uid).set(userData).then(()=>{
          setTimeout(() => {
            window.location.assign("./email-verification.html");
          }, 2000);
        })
      })
      .catch((error) => {
        message.innerHTML = error.message;
        message.style.color = "red";
      });
  }
};
