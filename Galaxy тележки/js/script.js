const triggerTabList = document.querySelectorAll('.footer__nav-link_tab');
const tabsNavList = document.querySelectorAll('#bestsellers .nav-link');
const tabsPaneList = document.querySelectorAll('#bestsellers .tab-pane');
triggerTabList.forEach(triggerEl => {
    triggerEl.addEventListener('click', event => {

        tabsNavList.forEach(element => {
            element.classList.remove('active');
        });
        tabsPaneList.forEach(element => {
            element.classList.remove('active');
            element.classList.remove('show');
        });

        const tab = event.target;
        const valueAttr = tab.getAttribute('data-bs-target');
        const tabButton = document.querySelector(`.nav-link[data-bs-target="${valueAttr}"]`);
        const tabContent = document.querySelector(`${valueAttr}`);

        tabContent.classList.add('active', 'show');
        tabButton.classList.add('active');

        const tabTrigger = new bootstrap.Tab(triggerEl);
        document.querySelector("#bestsellers").scrollIntoView();
        tabTrigger.show();
    });
});


window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    const buttonScroll = document.getElementById("scrollToTop");
    const nav = document.querySelector('.navbar-nav');
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }


    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {

        buttonScroll.classList.remove('slide-out-blurred-bottom');
        buttonScroll.style.display = "block";
        buttonScroll.classList.add('slide-in-blurred-bottom');
    } else {
        buttonScroll.classList.add('slide-out-blurred-bottom');
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(document).on("click", ".navbar-toggler", function () {
    let svg = $(this).find('svg');
    let use = $(this).find('use');
    svg.toggleClass('close');
    if (!svg.hasClass('close'))
        use.attr('xlink:href', 'images/sprite.svg#burger');
    else
        use.attr('xlink:href', 'images/sprite.svg#close');

});


let year = new Date().getFullYear();
const yearEl = document.querySelector('#currentYear');
yearEl.innerHTML = year;



