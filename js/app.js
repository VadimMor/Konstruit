//Скролл с интро
let buttonIntro = document.getElementById('scroll');

buttonIntro.addEventListener('click', function (element) {
    let introHeight = document.getElementById('intro').clientHeight + 1;

    window.scrollTo({
        top: introHeight,
        behavior: 'smooth',
    })
})


// Плавный скролл из меню
const buttonsScroll = document.querySelectorAll('.menu__link');

for (let i=0; i<buttonsScroll.length; i++) {
    buttonsScroll[i].addEventListener('click', function (element) {
        element.preventDefault();

        let idBlock = element.target.getAttribute('href').substr(1)

        if (idBlock == 'header') {
            let introHeight = document.getElementById('intro').clientHeight + 1;

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        } else {
            window.scrollTo({
                top: document.getElementById(idBlock).getBoundingClientRect().top + window.pageYOffset - 124,
                behavior: 'smooth'
            });
        }
    })
}


// Фиксация меню
window.addEventListener('scroll', function() {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let introHeight = document.getElementById('intro').clientHeight;
    let header = document.getElementById('header');

    if (windowScroll >= introHeight+header.clientHeight) {
        header.classList.add('fixed');
        document.getElementById('about').style.marginTop = 124 + 'px';
    } else {
        header.classList.remove('fixed')
        document.getElementById('about').style.marginTop = 0 + 'px'
    }
})


// Меню нажатие 
let navToggle = document.getElementById('nav_toggle');

navToggle.addEventListener('click', function(element) {
    let nav

    element.preventDefault();

    this.classList.add('fixed');
    document.getElementById('nav').classList.add('fixed');
});

