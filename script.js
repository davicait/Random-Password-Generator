var generateBtn = document.querySelector("generate");
var copyBtn = document.querySelector("copy");

//generate random passowrd
function generate() {

    //set password length
    // let length = confirm("How long would you like your password to be?");

    //possible password values
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"

    let password = "";

    //create for loop to choose password characters
    for (var i =0; i <= 140; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    // Add password to text box/display area
    // button.addEventListener("click", function() {
    //     document.getElementbyId("generate").value = password;
    // }) 

    
    generateBtn.addEventListener("click", password);
    
}