 //Your entire JS code here
 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');
 
 form.addEventListener("submit", (e) => {
                       e.preventDefault();
 
 checkInputs();
 
   });
 function checkInputs(){
   //get the values from the inputs
   const usernameValue=username.value.trim();
   const emailValue=email.value.trim();
   const passwordValue=password.value.trim();
   const password2Value=password2.value.trim(); 
   
   if(usernameValue === ''){
     //show error
     //add error class
     setErrorFor(username,'Username cant be blank');
   }
   else{
     // add success class
     setSuccessFor(username);
   }
   if(emailValue === ''){
     //show error
     //add error class
     setErrorFor(email,'Email cant be blank');
   }else if(!isValid(emailValue)){
           setErrorFor(email,'Email is not valid'); 
            }
   else{
      setSuccessFor(email);
   }
   if(passwordValue ===''){
     setErrorFor(password,"Password cant be blank");
   }
   else{
     setSuccessFor(password);
   }
   if(password2Value ===''){
     setErrorFor(password2,"Password cant be blank");
   }
   else if(passwordValue !== password2Value){
      setErrorFor(password2,"Passwords does not match");
   }
   
   else{
     setSuccessFor(password2);
   }
   
 }
 
 
 function setErrorFor(input,message){
   const formControl = input.parentElement;//form control
   const small = formControl.querySelector('small');
   //add error inside small
   small.innerText = message;
   
   // add error class
   formControl.className='form-control error'; 
 }
 function setSuccessFor(input){
   const formControl = input.parentElement;
   formControl.className='form-control success'; 
 }
 function isValid(email) {
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }
 
      