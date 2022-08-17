let openMenu = document.querySelector('#openMenu').addEventListener('click', () => {

    let menuHeader = document.querySelector('#menuHeader');

    if (menuHeader.style.marginLeft === '100%')
    {
        menuHeader.style.marginLeft = '70%';
    } else
    {
        menuHeader.style.marginLeft = '100%';
    };

});