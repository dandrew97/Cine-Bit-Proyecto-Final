const Formulario = document.querySelector('#Formulario')
Formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const floatingName = document.querySelector('#floatingName').value;
    const floatingLastName = document.querySelector('#floatingLastName').value;
    const floatingEmail = document.querySelector('#floatingEmail').value;
    const floatingPassword = document.querySelector('#floatingPassword').value;

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.Email == floatingEmail);
    if (isUserRegistered) {
        return alert('El usuario ya esta registado!');
    }

    Users.push({ name: floatingName, lastName: floatingLastName, Email: floatingEmail, Password: floatingPassword });
    localStorage.setItem('users', JSON.stringify(Users));
    alert('Registro Exitoso!');
    window.location.href = '/index.html';

})