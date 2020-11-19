let phone = document.getElementById("phone"); 
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

function validate(){
	// Function of Phone Number validation
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





