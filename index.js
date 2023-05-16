const btnEl = document.getElementById('btn')
const formEl = document.getElementById('signup-form')
const errorEl = document.getElementById('password-error')

function validateForm() {
    const passwordEl = document.getElementById('password')
    let password1 = passwordEl.value
    const passwordConfirmEl = document.getElementById('confirm-password')
    let password2 = passwordConfirmEl.value
    console.log(password1)
    console.log(password2)
    errorEl.innerText = ""
    if(password1 === password2) {
        console.log("passwords match")
        return true
    } else {
        errorEl.innerText = "Passwords Must Match"
        return false
    }

}

formEl.addEventListener('submit', () => {
    if(validateForm()) {
        window.location.href="https://www.youtube.com/watch?v=C2YCs52XLjs"
}   else {
        console.log('failed')
}}
)