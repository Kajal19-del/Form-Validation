const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('cPassword');


// Show user a error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const error = formControl.querySelector('small');
    error.innerText = message;
}

// What when user submitted successfully?
function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Check email is valid or not
function isEmailValid (email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(String(email).toLocaleLowerCase());

}

// Evernt Listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (userName.value === '') {
        showError(userName, 'Username is required');
    } else {
        showSuccess(userName)
    } 

    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isEmailValid(email.value)) {
        showError(email, 'email is not valid')
    } else {
        showSuccess(email)
    } 

    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password)
    } 

    if (cPassword.value === '') {
        showError(cPassword, 'confirm password is required');
    } else {
        showSuccess(cPassword)
    } 
})