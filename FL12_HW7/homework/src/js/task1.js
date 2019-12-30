const user = 'user@gmail.com';
const admin = 'admin@gmail.com';
const five = 5;
const six = 6;

let userPass = 'UserPass';
let adminPass = 'AdminPass';

let askEmail = prompt('Please enter your email', 'user@gmail.com');
let pass;
let oldPass;
let newPass;
let newPass2;
let changePass;

if (askEmail === null) {
    alert('Canceled');
} else if (askEmail === user || askEmail === admin) {
    pass = prompt('Enter your password', 'UserPass');

    // Check password
    if (pass === null) {
        alert('Canceled');
    } else if (pass === userPass || pass === adminPass) {
        changePass = confirm('Do you want to change your password?');

        // Change the password
        if (changePass === null || changePass === false) {
            alert('You have failed the change.');
        } else {
            oldPass = prompt('Enter your OLD password', 'UserPass');
            if (oldPass === null) {
                alert('Canceled');
            } else if (oldPass !== pass) {
                alert('You wrote the wrong password.')
            } else {
                newPass = prompt('Enter your NEW password', 'newUserPass');
                if (newPass === null) {
                    alert('Canceled');
                } else if (newPass.length < six) {
                    alert('It’s too short password. Sorry.')
                } else {
                    newPass2 = prompt('Enter your NEW password again', 'newUserPass');
                    if (newPass2 === null) {
                        alert('Canceled');
                    } else if (newPass === newPass2) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }
            }
        }

    } else {
        alert('Wrong password.')
    }

} else if (askEmail.length < five) {
    alert('I don\'t know any emails having name length less than 5 symbols.')
} else {
    alert('I don’t know you');
} 
