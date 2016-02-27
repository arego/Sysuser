(function () {
    var Password = document.getElementById('Password');
    var Confirm = document.getElementById('Confirm');
    var form = document.getElementById('sysuserForm');

    var checkPasswordValidity = function () {
        if (Password.value != Confirm.value) {
            Password.setCustomValidity('Passwords must match.');
            updateErrorMessage();
        } else {
            Password.setCustomValidity('');
        }
    };

    var updateErrorMessage = function () {
        form.getElementsByClassName('error')[0].innerHTML = Password.validationMessage;
    };

    Password.addEventListener('change', checkPasswordValidity, false);
    Confirm.addEventListener('change', checkPasswordValidity, false);

    form.addEventListener('submit', function (event) {
        if (form.classList) form.classList.add('submitted');
        checkPasswordValidity();
        if (!this.checkValidity()) {
            event.preventDefault();
            updateErrorMessage();
            Password.focus();
        }
    }, false);
}());