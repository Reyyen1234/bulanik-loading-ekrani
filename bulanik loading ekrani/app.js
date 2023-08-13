const loadText = document.querySelector('.load-text')
const bg = document.querySelector('.bg')
let load = 0
let int = setInterval(loading, 30) /* ikinci parametre ne kadar surede durmasini gerektigini soyleiyoruz */
function loading() {
    load++
    if (load > 99) {
        clearInterval(int); /*  islemi durdur */
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0) /* loading islemi 0 ->100 e kadar gitmesini istiyorum ve opacity 1 den 0 e  */
    bg.style.filter = `blur(${scale(load, 0, 100, 3, 0)}px)`
}
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}