const navlinks = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navitems');

    burger.addEventListener('click', () => {
        nav.classList.toggle('showburg');
    })};

navlinks()