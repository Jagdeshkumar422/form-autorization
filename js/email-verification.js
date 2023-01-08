let email = document.getElementById("email");
let message =document.getElementById("message");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    if (user.emailVerified) {
      window.location.assign("./home.html");
    } else {
      email.innerHTML = user.email;
    }
  } else {
    window.location.assign("./login.html");
  }
});

let resendEmail =()=>{
  const user = firebase.auth().currentUser;
      user.sendEmailVerification().then(()=>{
        message.innerHTML="Email verification sent!"
        message.style.color ="green"
      }).catch((err)=>{
        message.innerHTML = err.message;
        message.style.color="red"
      })
}

let home=()=>{
  location.reload();
}
