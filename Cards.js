const expand = document.querySelectorAll('.panel')

expand.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClassses()
        panel.classList.add('active')
        console.log('hello')
    })
})

function removeActiveClassses() {
    expand.forEach(panel => {
        panel.classList.remove('active')
    })
}