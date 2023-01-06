let myform = document.getElementById('myform');
let family = document.getElementById('family');
let email = document.getElementById('email');
let password = document.getElementById('password');
let description = document.getElementById('description');


myform.addEventListener('submit',function(e){
    let username = document.getElementById('username');
    let myrgex=/^[a-zA-Z\s]+$/;


    if(username.value.trim()=='') {
        
        alert('username must not be empty ');
        e.preventDefault();
        
    }
    else if (myrgex.test(username.value)==false){

        alert('username must be only letters ');
        e.preventDefault();
    }

})

myform.addEventListener('submit',function(e){
    let family = document.getElementById('family');
    let myrgex=/^[a-zA-Z\s]+$/;

    if(family.value.trim()=='') {
        
        alert('family-name must not be empty ');
        e.preventDefault();
    }
    else if (myrgex.test(family.value)==false){

        alert('family-name must be only letters ');
        e.preventDefault();

    }

})


myform.addEventListener('submit',function(e){
    let email = document.getElementById('email');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.trim()=='') {
        
        alert('email must not be empty ');
        e.preventDefault();
    }
    else if (mailformat.test(email.value)==false){

        alert('email is incorrect');
        e.preventDefault();

    }

})



myform.addEventListener('submit',function(e){
    let password = document.getElementById('password');
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    

    if(password.value.trim()=='') {
        
        alert('password must not be empty ');
        e.preventDefault();
    }else if(password.value.match(passw)) {
        alert('your password must have numbers,letters,symbols');
        e.preventDefault;

    }


})



myform.addEventListener('submit',function(e){
    let description = document.getElementById('description');
    
    

    if(description.value.trim()=='')  {
        
        alert('description must not be empty ');
        e.preventDefault();
    } else if ((description.value.length() <= 15 )){

        alert('description must be lenghty ');
        e.preventDefault();

    }
})


