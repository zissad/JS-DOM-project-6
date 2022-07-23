//=======================
/*
*/
//style================

const singinBtn = document.querySelector('.singinBtn');
const singupBtn = document.querySelector('.singupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');

singupBtn.onclick = function() {
    formBx.classList.add('active');
    body.classList.add('active');
}

singinBtn.onclick = function() {
    formBx.classList.remove('active');
    body.classList.remove('active');
}

//Style=============

const singInForm = document.querySelector('.singinForm');
const password = singInForm.querySelector('#passwordD');
const userName = singInForm.querySelector('#userName');
const showPassword = singInForm.querySelector('.fa-eye');
const submitBtn = singInForm.querySelector('.submit');
const inputBorder = singInForm.querySelector('.inpt');
const inputBorderP = singInForm.querySelector('.password');
const erName = singInForm.querySelector('.erName');
const erPassword = singInForm.querySelector('.erPass');
const sucLink = singInForm.querySelector('.yes');

var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//==============


// Password Show


showPassword.addEventListener('click', () => {
    if(password.type === 'password'){
        password.type = 'text';
        showPassword.style.color = '#3AB397';
    } else {
        password.type = 'password';
        showPassword.style.color = '#333';
    }
})


/*============
Sing In Form validation
==============*/

submitBtn.onclick = (e) => {
    e.preventDefault();

    // userName Validation

    if(userName.value == ''){
        inputBorder.style.border = '2px solid red';
        erName.innerHTML = 'Username field must not be empty';
    } 
    else if(userName.value == '' || userName.value.length < 4 ){
        inputBorder.style.border = '2px solid red';
        erName.innerHTML = 'Username length cont < 4';
    }
    else {
        inputBorder.style.border = '2px solid #3AB397';
        erName.innerHTML = '';
    }

    // password validation 

    if(password.value == '') {
        inputBorderP.style.border = '2px solid red';
        erPassword.innerHTML = 'Password field must not be empty';
    }
    else if(password.value == '' || password.value.length < 8 ){
        inputBorderP.style.border = '2px solid red';
        erPassword.innerHTML = 'Password length can,t < 8';
    }
     else {
        inputBorderP.style.border = '2px solid #3AB397';
        erPassword.innerHTML = '';
    }

    if(userName.value == '' || userName.value.length < 4 || password.value == '' || password.value.length < 8 ){
        // alert('Login Failed');
    } else {
        sucLink.click();
    }
}

/*============
Sing Up Form validation
==============*/

const singUpForm = document.querySelector('.singupForm');
const U_submitBtn = singUpForm.querySelector('.submit');
const U_inputBorder_1 = singUpForm.querySelector('.inpt');
const U_inputBorderEmail = singUpForm.querySelector('.email');
const U_userName = singUpForm.querySelector('#username');
const U_erName = singUpForm.querySelector('.erName');
const email = singUpForm.querySelector('#email');
const erEmail = singUpForm.querySelector('.erEmali');
const erpass_1 = singUpForm.querySelector('.erpass_1');
const erpass_2 = singUpForm.querySelector('.erpass_2');
const inpt_pass1 = singUpForm.querySelector('.inpt_pass1');
const inpt_pass2 = singUpForm.querySelector('.inpt_pass2');


const showpass_1 = singUpForm.querySelector('.show_1');
const showpass_2 = singUpForm.querySelector('.show_2');
const uppass = singUpForm.querySelector('.uppass');
const upcnpass = singUpForm.querySelector('.upcnpass');


// singUpForm show password

showpass_1.addEventListener('click', () => {

    if(uppass.type === 'password'){
        uppass.type = 'text';
        showpass_1.style.color = '#3AB397';
    } else {
        uppass.type = 'password';
        showpass_1.style.color = '#333';
    }
})

showpass_2.addEventListener('click', () => {

    if(upcnpass.type === 'password'){
        upcnpass.type = 'text';
        showpass_2.style.color = '#3AB397';
    } else {
        upcnpass.type = 'password';
        showpass_2.style.color = '#333';
    }
})



U_submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

            // userName Validation

            if(U_userName.value == ''){
                U_inputBorder_1.style.border = '2px solid red';
                U_erName.innerHTML = 'Username field must not be empty';
            }
            else if(U_userName.value == '' || U_userName.value.length < 4 ){
                U_inputBorder_1.style.border = '2px solid red';
                U_erName.innerHTML = 'Username length cant < 4 ';
            }
            else {
                U_inputBorder_1.style.border = '2px solid #3AB397';
                U_erName.innerHTML = '';
            }

            //E-mail validation

            const emaliValue = email.value;
            
            var pattern = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
            

            if(emaliValue == ''){
                U_inputBorderEmail.style.border = '2px solid red';
                erEmail.innerHTML = 'Email Address field must not be empty!';
            }
           else if(emaliValue != '' || emaliValue.match(pattern)) {
                U_inputBorderEmail.style.border = '2px solid #3AB397';
                erEmail.innerHTML = '';
            }
            else {
                U_inputBorderEmail.style.border = '2px solid red';
                erEmail.innerHTML = 'Your email Address is in valid!';
            }

            // password validation

            if(uppass.value == ''){
                erpass_1.innerHTML = 'Password field must not be empty';
                inpt_pass1.style.border = '2px solid red';
            } 
            else if(uppass.value == '' || uppass.value.length < 8){
                inpt_pass1.style.border = '2px solid red';
                erpass_1.innerHTML = 'Password length can,t < 8';
            }
            else {
                inpt_pass1.style.border = '2px solid #3AB397';
                erpass_1.innerHTML = '';
            }


            if(upcnpass.value == ''){
                erpass_2.innerHTML = 'Password field must not be empty';
                inpt_pass2.style.border = '2px solid red';
            }
            else if(upcnpass.value == '' || upcnpass.value.length < 8){
                erpass_2.innerHTML = 'Password length can,t < 8';
                inpt_pass2.style.border = '2px solid red';
            } 
            else if(upcnpass.value !== uppass.value){
                erpass_2.innerHTML = 'Password not matching';
                inpt_pass2.style.border = '2px solid red';
                inpt_pass1.style.border = '2px solid red';
                erpass_1.innerHTML = 'Password not matching';
            }
            else{
                inpt_pass2.style.border = '2px solid #3AB397';
                erpass_2.innerHTML = '';
            }

            if(U_userName.value == '' || U_userName.value.length < 4 || emaliValue == '' || !emaliValue.match(pattern) || uppass.value == '' || uppass.value.length < 8 || upcnpass.value == '' || upcnpass.value.length < 8 || upcnpass.value !== uppass.value){
                alert('Sing up failed!');
            }
            else {
                sucLink.click();
            }
})
