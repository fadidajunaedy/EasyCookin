import 'boxicons';
import './style.css';
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from './img/easycooking-banner.jpg';
import logo from './img/easycooking-icon.png';
import 'bootstrap/dist/js/bootstrap.min.js';
import main from './scripts/main';

document.addEventListener("DOMContentLoaded", () => {
    let imgBanner = new Image();
    let imgLogo = new Image();
    imgBanner.src = banner;
    imgLogo.src = logo;
    document.querySelector('.jumbotron').appendChild(imgBanner);
    document.querySelector('.logo').prepend(imgLogo);
    main();
});
