const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const Login = () => {
  if (email.value === "") {
    message.innerHTML = "Email required!";
    message.style.color = "red";
  } else if (password.value === "") {
    message.innerHTML = "Password required!";
    message.style.color = "red";
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        message.innerHTML = "Login";
        message.style.color = "green";
        if (res.user.emailVerified) {
          setTimeout(() => {
            window.location.assign("./home.html");
          }, 2000);
        } else {
          setTimeout(() => {
            window.location.assign("./email-verification.html");
          }, 2000);
        }
      })
      .catch((error) => {
        message.innerHTML = error.message;
        message.style.color = "red";
      });
  }
};



let loginWithGoogle = ()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((res)=>{
      console.log(res)
  }).catch((err)=>{
      console.log(err)
  })
}




