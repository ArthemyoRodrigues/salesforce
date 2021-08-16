function maskPhone(){
    const phone = document.getElementById('registration-form-phone');

    if(phone.value.length == 1){
        phone.value.length += "("
    }
}

maskPhone();