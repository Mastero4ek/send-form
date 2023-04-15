export const validationInputs = () => {
    const allInputs = document.querySelectorAll('input')

    const isName = /[^а-яёA-ЯЁ\aA-zZ\s\-]/g,
        isEmail = /[^a-zA-Z0-9\'\*\~\!\.\_\-\@]/g,
        isPhone = /[^0-9\+]/g,
        cutSpaceHyphen = /^[\s\-]+$/g,
        trimSpace = /\s{2,}/g,
        trimHyphen = /\-{2,}/g;

    const trimSimbol = (e) => {
        e.target.value = e.target.value.replace(trimSpace, " ")
        e.target.value = e.target.value.replace(cutSpaceHyphen, "")
        e.target.value = e.target.value.replace(trimHyphen, "-")
    };

    const trimPhone = (e) => {
        if (e.target.value.length > 16) e.target.value = e.target.value.slice(0, 16)
    }

    const capitalize = (e) => {
        e.target.value = e.target.value.replace(/(^|\s)\S/g, function (str) {
            return str.toUpperCase()
        });
    };

    const validationInput = (item, e) => {
        trimSimbol(e)

        switch (true) {
            case item.name == 'fio':
                e.target.style.borderBottom = ''
                e.target.style.color = ''
                e.target.value = e.target.value.replace(isName, "")
                capitalize(e)
                break

            case item.name == 'email':
                e.target.style.borderBottom = ''
                e.target.style.color = ''
                e.target.value = e.target.value.replace(isEmail, "")
                break

            case item.name == 'phone':
                trimPhone(e)

                e.target.style.borderBottom = ''
                e.target.style.color = ''
                e.target.value = e.target.value.replace(isPhone, "")
                break
        }
    };

    allInputs.forEach(input => input.addEventListener('input', event => validationInput(input, event)))
}