let usernameElement = document.getElementById("username");
let passwordElement = document.getElementById("password");
let messageElement = document.getElementById("displayMessage");
let mobileNumElement = document.getElementById("mobile");

function signIn(){
    if (usernameElement.value === ""){
        messageElement.textContent = "Please enter your Username";
        messageElement.style.color = "red";
    }

    else if (passwordElement.value === ""){
        messageElement.textContent = "Please enter your password";
        messageElement.style.color = "red";
    }

    else if (mobileNumElement.value === ""){
        messageElement.textContent = "Please enter your mobile number";
        messageElement.style.color = "red";
    }

    if ((passwordElement.value.length > 1) && (passwordElement.value.length <= 6)){
        messageElement.textContent = "Password should be greater than 6 characters";
    }

    if (passwordElement.value.length >= 20){
        messageElement.textContent = "Password should be less than 20 characters";
    }

    if ((passwordElement.value.length > 6) && (passwordElement.value.length < 20) && mobileNumElement.value !== ""){
        let userInput = usernameElement.value;
        messageElement.textContent = "Hi " + userInput + ", verifying your account...";
        messageElement.style.color = "blue";
    }
}
