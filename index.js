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
        window.open("https://www.youtube.com/watch?v=C2YCs52XLjs")
        openThankYouPage()
}   else {
        console.log('failed')
}}
)

function openThankYouPage() {
    console.log('function ran')
    window.location.href = 'thankyou.html' }