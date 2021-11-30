const content = document.querySelectorAll('.content');
window.addEventListener('scroll', checkContent)
checkContent()
function checkContent() {
    const trigger = window.innerHeight / 5 * 4
    content.forEach(content => {
        const contentTop = content.getBoundingClientRect().top
        if (contentTop < trigger) {
            content.classList.add('show')
        } else {
            content.classList.remove('show')
        }
    })
}