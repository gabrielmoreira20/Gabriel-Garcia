function typeWriter(el) {
    const mainText = el.innerHTML.split("")
    el.innerHTML = ''
    mainText.forEach(function (letter, i) {

        setTimeout(function () {
            el.innerHTML += letter
        }, 25 * i)
    })
}

const phrase = document.querySelector('.about')
typeWriter(phrase)


const indicator = document.querySelector('#indicator')
const maxHeight = document.body.scrollHeight - window.innerHeight;

addEventListener('scroll', () => {
    const percentage = (window.scrollY / maxHeight) * 100;

    indicator.style.width = `${percentage}%`;
});


window.addEventListener('scroll', function () {
    var scrollIndicator = document.querySelector('.scroll-indicator');

    if (window.scrollY > 0) {
        scrollIndicator.classList.add('show');
    } else {
        scrollIndicator.classList.remove('show');
    }
});

document.querySelector('.emoji').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
