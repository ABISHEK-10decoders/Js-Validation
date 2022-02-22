// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
form.addEventListener('submit',e =>{
    e.preventDefault();
    validateInputs();

})
const StaticName = "ABISHEK";
const StacticPassword =123456;
const StacticMail = "abishek@gmail.com";

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    alert(message);

}

const setSuccess = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    console.log('working')
    const usernameValue = username.value.trim();
    console.log(usernameValue)
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }else if(usernameValue !== StaticName ) {
        setError (username, 'This User was Not Allowed');
    }
    else {
        setSuccess(username);
    }
    if(emailValue === '' ) {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }
    else if(emailValue !==StacticMail  ){
        setError(email,"This Mail was not acceepted")
    } else {
        setSuccess(email);
    }
    if(passwordValue === '' ) {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    }
    else if (passwordValue !== StacticPassword){
        setError(password, 'This password was not accepted')
    } else{
        setError('Error'); 
    }

  
};

