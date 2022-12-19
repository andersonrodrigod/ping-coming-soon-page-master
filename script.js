const email = document.querySelector(".input-email")
const enviar = document.querySelector(".input-submit")
const emailErro = document.querySelector(".email-erro")



enviar.addEventListener("click", function() {
    const valid = validad(email.value)
    if(valid) {
        console.log(`valor do input: ${email.value}`)
        email.classList.remove("input-email-red")
        emailErro.style.display = "none"
    } else {
        emailErro.style.display = "block" 
        email.classList.add("input-email-red")
    }

    email.value = ""
    

})

function validad(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return regex.test(email)
}

