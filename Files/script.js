//Remove the alert before delivering
// alert('This is a Client-Side Validation Form. This form tests and verifies the user\'s given input data before sending them to the server.');

// Storing all inputs in the variables.

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

// Get values from the inputs & verify. Trim removes spaces from both side.

function checkInputs () {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

// Adding logic into user's inputs.

    if (usernameValue === '') {
        //show error and add error class
        setErrorFor(username, 'Username is required *');

    } else if (!isUsername(usernameValue)) {
        setErrorFor(username, 'Must be 3 characters long *');
    } else {
        // add success class
        setSuccessFor(username);
    }
    // Same for Email
    if (emailValue === '') {
        setErrorFor(email, 'Email is required *');

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid *')
    } else {
        setSuccessFor(email);
    }
    // Same for Password
    if (passwordValue === '') {
        setErrorFor(username, 'Username is required *');

    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'A-Z, a-z, One number, One special character, Must be six characters or longer *');
    } else {
        setSuccessFor(password);
    }
    // same for Password2
    if (password2 === '') {
        setErrorFor(password2, 'This field is required *');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Password does not match *');
    } else {
        setSuccessFor(password2);
    }
}


// Adding Error and success functionalities.


// Error function.

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // adds error message inside small
    small.innerText = message; // Message sets above.

    // adds error class
    formControl.className = 'form-control error';
}

// Success function.

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Email verification function

function isEmail (email) {
    // It tests the email input.
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}


// Password Strength function
// A-Z, a-z, One number, One special character, Must be six characters or longer.

function isPassword (password) {
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    return mediumRegex.test(password);
}

// Username Validation Regex

function isUsername (username) {
// 3 Charecters long .{2,}
const usernameRegex = /^[a-zA-Z\-]+.{2,}$/;
    return usernameRegex.test(username);
}

// Show and Hide Password

checkBox.addEventListener('click', () => {
    let x = document.getElementById('password');
        if (x.type === 'password') {
            x.type = 'text';
        } else {
            x.type = 'password';
        }
})