


var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");

function signinbtn() {
    console.log("hello");
    if (emailInput.value === "" && passwordInput.value === "") {
        alert("Invalid email & password");
    } else if (emailInput.value === "") {
        alert("Invalid email");
    } else if (passwordInput.value === "") {
        alert("Invalid password");
    }
    else if(emailInput.value === "user@gmail.com" && passwordInput.value==="123456") {
        window.location.href = "secondpage.html";
    }
}



