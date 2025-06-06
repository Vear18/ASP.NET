const dropdowns = document.querySelectorAll('[data-type="dropdown"]')

document.addEventListener('click', function (event) {
    let clickedDropdown = null

    dropdowns.forEach(dropdown => {
        const targetId = dropdown.getAttribute('data-target')
        const targetElement = document.querySelector(targetId)

        if (dropdown.contains(event.target)) {
            clickedDropdown = targetElement

            document.querySelectorAll('.dropdown.dropdown-show').forEach(openDropdown => {
                if (openDropdown !== targetElement) {
                    openDropdown.classList.remove('dropdown-show')
                }
            })

            targetElement.classList.toggle('dropdown-show')
        }
    })

    if (!clickedDropdown && !event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-dropdown-show').forEach(openDropdown => {
            openDropdown.classList.remove('dropdown-show')

        })

    }

})






const modals = document.querySelectorAll('[data-type="modal"]')
modals.forEach(modal => {
    modal.addEventListener('click',function() {
        const targetId = modal.getAttribute('data-target')
        const targetElement = document.querySelector(targetId)
        console.log(targetElement)

        targetElement.classList.add('modal-show')
    })
})



const closeButtons = document.querySelectorAll('[data-type="close"]')
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = button.getAttribute('data-target')
        const targetElement = document.querySelector(targetId)
        

        targetElement.classList.remove('modal-show')
    })
})










document.querySelectorAll('.form-select').forEach(select => {
    const trigger = select.querySelector('.form-select-trigger')
    const triggerText = trigger.querySelectorAll('form-select-text')
    const option = select.querySelectorAll('.formselect-option')
    const hiddenInput = select.querySelector('input[type="hidden"]')
    const placeholder = select.dataset.placeholder || "Choose"

    const setValue = (value = "", text = placeholder) => {
        triggerText.textContent = text
        hiddenInput.value = value
        select.classList.toggle('has-placeholder' , !value)
    };

    setValue()

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.form-select.open')
            .forEach(el => el !== select && el.classList.remove('open'))
        select.classList.toggle('open')
    })

    option.forEach(option =>
        option.addEventListener('click', () => {
            setValue(option.dataset.value, option.text.textContent)
            select.classList.remove('open')
        })
    )

    document.addEventListener('click', e => {
        if (!select.contains(e.target))
            select.classList.remove('open')
    })
})