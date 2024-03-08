let captchaTextBox = document.querySelector(".captch_box input");
const captchaInputTextBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
// Variable to store captcha value
let captchaText = "";
// Function to generate captcha
function generateCaptcha() {
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("   ");
    console.log(captchaText);
    captchaTextBox.value = captchaText;
}

function submitBtnClick() {
    console.log("After Submit:"+captchaText);
    captchaText = captchaText.split("").filter((char) => char !== " ").join("");
    console.log("Before Submit:"+captchaText);
    message.classList.add("active");
    // check entered captcha text is correct or not
    if (captchaInputTextBox.value === captchaText) {
        message.innerHTML = "Entered captcha is correct";
        message.style.color = "#826afb";
    } else {
        message.innerHTML = "Entered captcha is not correct";
        message.style.color = "#FF2525";
    }
}

function refreshBtnClick() {
    console.log("Refresh");
    captchaInputTextBox.value = "";
    captchaTextBox.value = "";
    message.innerHTML = "";
    generateCaptcha();
}

// function invoked when page load
generateCaptcha();