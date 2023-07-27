

const Validate=(event )=>{
    let error = 0;
    let firstName = document.registration.fname
    let lastName = document.registration.lname
    let nin = document.registration.nin
    let contact = document.registration.contact
    let carModel = document.registration.carmodel
    let nplate = document.registration.nplate
    let period = document.registration.period
    let date = document.registration.date
    let timeIn = document.registration.timein
    let timeOut = document.registration.timeout

   

    //finding errors in empty fields
    let fnameError = document.getElementById("fname-error")
    let lnameError = document.getElementById("lname-error")
    let contactError = document.getElementById("contact-error")
    let ninError = document.getElementById("nin-error")
    let carModelError = document.getElementById("carmodel-error")
    let nplateError = document.getElementById("nplate-error")
    let dateError = document.getElementById("date-error")
    let timeInError = document.getElementById("timein-error")
    let timeOutError = document.getElementById("timeout-error")

    
    


    let firstNameRegex = /^[A-Za-z]+$/;
    let firstNameRegex1 = /^[A-Z]/;
    let firstNameRegex2 = /^[A-Za-z]{2,}$/;
    // this regex is for last name
    let lastNameRegex = /^[A-Za-z]+$/;
    let lastNameRegex1 = /^[A-Z]/;
    let lastNameRegex2 = /^[A-Za-z]{2,}$/;

    // this regex is for contact
    let contactRegex = /^\+256\d{9}$/;

    // this is regex for nin
    let ninRegex = /^.{14}$/

    // this is regex for number plate
    let nplateRegex = /^U.*/
    let nplateRegex1 = /^[A-Za-z0-9]{1,7}$/
    let nplateRegex2 = /^[A-Z]{1,7}$/







    // validating  fields using if statements
    if (firstName.value ==""){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "Please enter first name";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must only contain letters.";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex1)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must start with an uppercase letter.";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex2)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must conain not less than one character";
        fnameError.style = "color:red; font-family:serif "
        firstName.focus();
        error++;
    }
    else{
        firstName.style.border = "2px solid green";
        fnameError.textContent = "";
        lastName.focus();
    }

    if(lastName.value ==""){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Please enter last name";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;

    }else if(!lastName.value.match(lastNameRegex)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must only contain letters.";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;
    }else if(!lastName.value.match(lastNameRegex1)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must start with an uppercase letter.";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;
    }else if(!lastName.value.match(lastNameRegex2)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must conain not less than one character";
        lnameError.style = "color:red; font-family:serif "
        lastName.focus();
        error++;
    }
    else{
        lastName.style.border = "2px solid green";
        lnameError.textContent = "";
        contact.focus();
    }

    if(nin.value == ""){
        nin.style.border = "2px solid red";
        ninError.textContent = "Please enter NIN";
        ninError.style = "color:red; font-family:serif ";
        nin.focus();
        error++;
    }else if(!nin.value.match(ninRegex)){
        nin.style.border = "2px solid red";
        ninError.textContent = "Nin should have atleast 14 characters.";
        ninError.style = "color:red; font-family:serif ";
        contact.focus();
        error++;
    }else{
        nin.style.border = "2px solid green";
        ninError.textContent = "";
        
        contact.focus();
     }

    if(contact.value == ""){
        contact.style.border = "2px solid red";
        contactError.textContent = "Please enter contact number";
        contactError.style = "color:red; font-family:serif ";
        contact.focus();
        error++;
    }else if(!contact.value.match(contactRegex)){
        contact.style.border = "2px solid red";
        contactError.textContent = "Contact should start with +256";
        contactError.style = "color:red; font-family:serif ";
        contact.focus();
        error++;    
    }
    else{
            contact.style.border = "2px solid green";
            contactError.textContent = "";
            carModel.focus();
        } 
      
   if(carModel.value == ""){
    carModel.style.border = "2px solid red";
    carModelError.textContent = "Please enter car model";
    carModelError.style = "color:red; font-family:serif ";
    carModel.focus();
    error++;
    }
    else{
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
        nplate.focus();
    }
    

    if(nplate.value == ""){
        nplate.style.border = "2px solid red";
        nplateError.textContent = "Please enter plate number";
        nplateError.style = "color:red; font-family:serif ";
        nplateError.focus();
          error++; 
    }else if(!nplate.value.match(nplateRegex)){
        nplate.style.border = "2px solid red";
        nplateError.textContent = "Number plate should start with U";
        nplateError.style = "color:red; font-family:serif ";
        nplate.focus();
        error++
    }else if(!!nplate.value.match(nplateRegex2)){
        nplate.style.border = "2px solid red";
        nplateError.textContent = "Number plate should not have more than 7 characters.";
        nplateError.style = "color:red; font-family:serif ";
        nplate.focus();
        error++;
    }
    else{
            nplate.style.border = "2px solid green";
            nplateError.textContent = "";
            period.focus();
        }

    

    if(date.value == ""){
        date.style.border = "2px solid red";
        dateError.textContent = "Please enter date";
        dateError.style = "color:red; font-family:serif ";
        date.focus();
          error++;
    }
    else{
        date.style.border = "2px solid green";
        dateError.textContent = "";
        timeIn.focus();
    }

    if(timeIn.value == ""){
        timeIn.style.border = "2px solid red";
        timeInError.textContent = "Please enter time in";
        timeInError.style = "color:red; font-family:serif ";
        timeIn.focus();
          error++;
    }

   
       if(timeOut == ""){
        timeOut.style.border = "2px solid red";
        timeOutError.textContent = "Please enter time out";
        timeOutError.style = "color:red; font-family:serif ";
        timeOut.focus();
              error++;
       }
    
   
    

    //   // generating unique numbers
    //   const token = /^BB-([0-9]){3}+$/
    //   const pCarRegex = /^BB-([0-9]){3}+$/
    //   const truckCarRegex = /^BB-([0-9]){3}+$/
    //   const taxiCarRegex =  /^BB-([0-9]){3}+$/
    //   const coasterRegex =  /^BB-([0-9]){3}+$/
    //   // eg BB-001, 
    //  //   we go to let and say 
    //  //  if(!(cartype.value.match)

















    if(error > 0){
        event.preventDefault()
    }


 }

