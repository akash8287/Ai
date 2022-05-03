const email = document.getElementById("email");
const password = document.getElementById("password");

const logInButton = document.getElementById("logIn");

function logInFn() {
    if (email.value === "akashair357@gmail.com" && password.value === "Ritika8287") {
        location.href = "Studentinfo.html";
    }
    else{
        console.log("error")
    }
}

logInButton.addEventListener('click', logInFn);
//() => {
//     console.log(email.value);
// })