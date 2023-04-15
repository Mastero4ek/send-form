export const modalForm = () => {
    const serviceWrapper = document.querySelector('.service-list'),
        serviceBtns = serviceWrapper.querySelectorAll('.service-btn'),
        decorate = document.querySelector('.decorate'),
        modal = document.getElementById('modal');

    serviceWrapper.addEventListener('click', (e) => {
        const target = e.target.closest('.service-btn')

        if (target) {
            serviceBtns.forEach((btn) => {
                if (btn === target && !target.classList.contains('btn-active')) {
                    btn.classList.add('btn-active')
                } else {
                    btn.classList.remove('btn-active')
                }
            })
        }

        modal.classList.add('show')
        decorate.classList.add('decorate-inactive')
    })

    modal.addEventListener('click', (e) => {
        if (e.target.matches('.container-btn') || e.target.matches('.container-btn>span')) {
            serviceBtns.forEach((btn) => {
                btn.classList.remove('btn-active')
            })

            modal.classList.remove('show')
            decorate.classList.remove('decorate-inactive')
        }
    })
}