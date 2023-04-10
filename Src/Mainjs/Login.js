const FormularioLogin = document.querySelector('#FormularioLogin')
FormularioLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
    const floatingEmail = document.querySelector('#floatingEmail').value
    const floatingPassword = document.querySelector('#floatingPassword').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.Password===floatingPassword&& user.Email === floatingEmail)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '/pages/home.html'

})