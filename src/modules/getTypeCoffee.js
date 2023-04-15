export const getTypeCoffee = () => {
    const serviceBtn = document.querySelectorAll('.service-btn'),
        inputForm = document.querySelector('[name="typeCoffee"]');

    serviceBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            inputForm.value = e.target.textContent
        })
    })
}