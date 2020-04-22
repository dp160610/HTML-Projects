const form = document.getElementById("form");
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
//   console.log
 
  if (firstName.value === "") {
      const formControl=firstName.parentNode;
      formControl.classList.add('error');
    const small = firstName.parentNode.querySelector("small");
    small.innerText = "First Name is Required";
    small.style.opacity = "1";
  }
  else{
    const small = firstName.parentNode.querySelector("small");
    small.style.opacity = "0";
    const formControl=firstName.parentNode;
      formControl.classList.remove('error');
     
  }
  if (lastName.value === "") {
    const small = lastName.parentNode.querySelector("small");
    small.innerText = "Last Name is Required";
    small.style.opacity = "1";
  }else{
    const small = lastName.parentNode.querySelector("small");
    small.style.opacity = "0";
  }
  if (email.value === "") {
    const small = email.parentNode.querySelector("small");
    small.innerText = "Email is Required";
    small.style.opacity = "1";
  } else if (!isValid(email)) {
    const small = email.parentNode.querySelector("small");
    small.innerText = "Email Address is not valid";
    small.style.opacity = "1";
  }
  else{
    const small = email.parentNode.querySelector("small");
    small.style.opacity = "0";
  }
  if (password.value === "") {
    const small = password.parentNode.querySelector("small");
    small.innerText = "Password is Required";
    small.style.opacity = "1";
  }
  else {
    const small = password.parentNode.querySelector("small");
    small.style.opacity = "0";
  }
  // alert(firstName + last + email + password);
});



function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}