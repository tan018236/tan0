function validatefun()
 {
    var name = document.F1.username.value;
    var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phone = /^\d{10}$/;
    if(name == "") 
    {
     alert("name can't be empty!");
     return false;
    } 
    else if (input.value.match(email)) {
        alert("Valid email address!");
        return true;
    }
    else if(inputtxt.value.match(phone))
    {
        alert("input error");
        return true;
    }
    else {

        alert("Invalid email address!");
        return false;
    
      }
   }


const scriptURL = 'https://script.google.com/macros/s/AKfycby-4dT7D4nmou-sZUh8RoM20XN5xFx-zIZgIoWst2jSt-K-l2qmezvmAoxCrPQ8ftXi/exec'
const form = document.forms['f1']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks For Contacting us..! We Will Contact You Soon....."))
    .catch(error => console.error('Error!', error.message))
})



