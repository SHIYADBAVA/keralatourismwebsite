let phone = document.getElementById("phone");
// Function of Phone Number validation 
function validate(){
    let regexp=/^([0-9]{3})([\.-]{0,1})([0-9]{3})([\.-]{0,1})([0-9]{4})$/
    if(regexp.test(phone.value))
    {
        return true;
    }
    else{
        alert("please enter a valid phone number")
        return false;
    }
}

