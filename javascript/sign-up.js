const togglePasswordIcons = document.querySelectorAll('.togglePassword');
togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function (e) {
        const targetId = this.getAttribute('data-target');
        const passwordField = document.getElementById(targetId);

        // toggle the type attribute
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
});
