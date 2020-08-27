

window.onscroll = () => {
    const nav = document.querySelector('.nav');
    if (this.scrollY <= 450) {
        nav.classList.remove('scrolled-nav');
    } else {
        nav.classList.add('scrolled-nav');
    }
};

document.getElementById('btn-nav').addEventListener('click', function () {
    document.getElementById('btn-nav').classList.toggle("change");
    document.getElementById('mobile').classList.toggle("mobile-active");
    document.getElementById('nav').classList.toggle("bg-white");

});
