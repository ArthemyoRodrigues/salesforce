const birthday = document.getElementById('registration-form-birthday').value;
console.log(new Intl.DateTimeFormat('en-GB').format(birthday));