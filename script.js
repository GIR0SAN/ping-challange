const submit = document.querySelector(".c-submit")
const inputEmail = document.getElementById('input')
const textError = document.getElementById('textError')

submit.addEventListener('click', validate)

function validate(e){
    e.preventDefault()

    const inputValue = input.value.trim()

    if(inputValue === "" || !isEmailValidy(inputEmail.value)){
        textError.style.opacity = "1"
        input.style.borderColor = "var(--Light-Red)"
    } else {
        textError.style.opacity = ""
        input.style.borderColor= ""
    }
}

function isEmailValidy(input){
    const emailREgexp =  new RegExp(
        /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.[a-zA-Z]{2,}$/
    )
    if (emailREgexp.test(input)){
        return true
    } else {
        return false
    }
}
