let email =document.getElementById("email")
let message = document.getElementById("message")

let ResetPassword =()=>{
    firebase.auth().sendPasswordResetEmail(email.value).then((res)=>{
        message.innerHTML ="check your email"
        message.style.color="green"
    }).catch((err)=>{
        message.innerHTML =err.message
        message.style.color="red"
    })
}