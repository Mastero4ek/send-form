import { validateEmail } from "./helpers"

export const validation = () => {
    const userName = form.querySelector('[name="fio"]'),
        userEmail = form.querySelector('[name="email"]'),
        userPhone = form.querySelector('[name="phone"]');

    let success = true

    if (userName.value.length < 2) {
        userName.style.borderBottom = '2px red solid'
        userName.style.color = 'red'
        success = false
    }

    if (!validateEmail(userEmail.value)) {
        userEmail.style.borderBottom = '2px red solid'
        userEmail.style.color = 'red'
        success = false
    }

    if (userPhone.value.length < 11) {
        userPhone.style.borderBottom = '2px red solid'
        userPhone.style.color = 'red'
        success = false
    }

    return success
}