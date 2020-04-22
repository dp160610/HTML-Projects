const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  const emailValue = email.value.trim();
  if (emailValue === '') {
    setErrorFor(email, 'Email cant be blank');
  }
  else if(!isValid(emailValue)){
    setErrorFor(email,'Email is not valid')
  }
  else{
    setSuccessFor(email);
 }

});
function setErrorFor(input, message) {
  const formControl = input.parentElement;//form control
  const small = formControl.querySelector('small');
  //add error inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}