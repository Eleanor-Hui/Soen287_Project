//restore password
function forgotPassword() {
    let text;
    let email = prompt("Please enter your email address:", "ABC123@gmail.com");
    if (email == null || email == "") {
        text = "Cancelled";
    } else {
        text = "Recovery email has been sent to the email:" + email + "<br> Please Check your email and follow the instructions.";
    }
    document.getElementById("resetPW").innerHTML = text;
}

//use remember me box
//Check if the "Remember Me" checkbox is checked
var rememberMeCheckbox = document.getElementById("rememberMe");
var emailInput = document.getElementById("Email");
var passwordInput = document.getElementById("password");

if (rememberMeCheckbox) {
    // Check if there's stored data and populate the inputs
    if (localStorage.getItem("rememberedEmail") && localStorage.getItem("rememberedPassword")) {
        emailInput.value = localStorage.getItem("rememberedEmail");
        passwordInput.value = localStorage.getItem("rememberedPassword");
        rememberMeCheckbox.checked = true;
    }

    // Event listener for the "Remember Me" checkbox
    rememberMeCheckbox.addEventListener("change", function() {
        if (rememberMeCheckbox.checked) {
            // Store the values in localStorage
            localStorage.setItem("rememberedEmail", emailInput.value);
            localStorage.setItem("rememberedPassword", passwordInput.value);
        } else {
            // Remove the stored values if "Remember Me" is unchecked
            localStorage.removeItem("rememberedEmail");
            localStorage.removeItem("rememberedPassword");
        }
    });
}

//eye icon to toggle password visibility
const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})
