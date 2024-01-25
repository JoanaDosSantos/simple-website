'use strict';

//Solução Joana
function switchDarkTheme() {
    const bodyElement = document.getElementById('bodyElement')
    bodyElement.className = bodyElement.className.includes('light') ? 'dark-theme' : 'light-theme'
}

//Solução Microsoft
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('Current class name: ' + className);
});