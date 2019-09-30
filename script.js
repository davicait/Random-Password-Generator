// var generate = document.getElementById("password");
var copyBtn = document.getElementById("copy");
var generateEl = document.querySelector('#generate');


//generate random password
generateEl.addEventListener("click", function() {

    //possible password values
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"

    let password = "";

    //create for loop to choose password characters
    for (var i =0; i <= 140; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    console.log(password);

    // Add password to text box/display area
    document.getElementById('password').value = password;
    
})

// Function to copy password to clipboard

function copyPassword() {

    document.getElementById('password').select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!")
}