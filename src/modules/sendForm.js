import { validation } from "./validation"

export const sendForm = (formWrapper) => {
    const formWrapperId = document.getElementById(formWrapper)

    if (!formWrapperId) return

    const form = formWrapperId.querySelector('[name="form"]'),
        formBtn = formWrapperId.querySelector('.form-btn');

    form.reset()

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formData = new FormData(form),
            formBody = {}

        formBtn.textContent = 'Отправляем...'
        formBtn.disabled = true

        formData.forEach((val, key) => {
            if (val != '') formBody[key] = val
        })

        if (validation()) {
            sendData(formBody)
                .then(data => {
                    formBtn.disabled = false
                    formBtn.textContent = 'Отправить'
                    form.reset()

                    console.log(formBody)
                })
                .catch(error => {
                    formBtn.textContent = 'Ошибка запроса!'
                    setTimeout(() => {
                        formBtn.textContent = 'Отправить'
                        formBtn.disabled = false
                    }, 3000)
                })
        } else {
            formBtn.textContent = 'Ошибка в данных!'
            setTimeout(() => {
                formBtn.textContent = 'Отправить'
                formBtn.disabled = false
            }, 3000)
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        submitForm()
    })
}