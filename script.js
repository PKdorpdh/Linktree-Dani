function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector('.img-threads')

    html.classList.toggle('lightmode')
    if (html.classList.contains('lightmode')) {
        img.setAttribute('src', './assets/images/threads.png')
    } else {
        img.setAttribute('src', './assets/images/threads-white.png')
    }
}