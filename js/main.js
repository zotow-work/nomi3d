'use strict';

// // Horisontal and vertical BG video change
// let bgVideoPoster = document.querySelector('#bgVideo');
// let bgVideoWebm = document.querySelector('#bgVideoWebm');
// let bgVideoMp4 = document.querySelector('#bgVideoMp4');

// if ( window.screen.width <= 930 ) {
//     bgVideoPoster.setAttribute('poster', 'assets/video/pexels-photo-10622156.webp');
//     bgVideoWebm.setAttribute('src', 'assets/video/pexels-ivan-photo-10622156.webm');
//     bgVideoMp4.setAttribute('src', 'assets/video/pexels-ivan-photo-10622156.mp4');
// } else if ( window.screen.width >= 931 ) {
//     bgVideoPoster.setAttribute('poster', 'assets/video/NOMI_video backplate_v2-poster.jpg');
//     bgVideoWebm.setAttribute('src', 'assets/video/NOMI_video backplate_v2.webm');
//     bgVideoMp4.setAttribute('src', 'assets/video/NOMI_video backplate_v2.mp4');
// }

// Colcade masonry layout for portfolio section
var colc = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item'
});

// Tabs
const tabsItem = document.querySelector ('.tabs');
const gridItem = document.querySelectorAll ('.grid-item');

window.onload = ()=>{
    tabsItem.onclick = (selectedItem)=> {
        if (selectedItem.target.classList.contains('tabs__item')) {
            tabsItem.querySelector('.active').classList.remove('active');
            selectedItem.target.classList.add('active');
            let tabName = selectedItem.target.getAttribute('data-name');
            gridItem.forEach((image)=>{
                let filterImages = image.getAttribute('data-name');
                if ((filterImages == tabName) || tabName == 'all') {
                    image.classList.add('show');
                } else {
                    image.classList.add('hide');
                    image.classList.remove('show');
                }
            });
        }
    };
};

// FAQ accordion
const faqs = document.querySelectorAll('.questions__item');

faqs.forEach(questions__item => {
    questions__item.addEventListener('click', () => {
        questions__item.classList.toggle('active');
let findSign = questions__item;
const minus = findSign.getElementsByClassName("minus");
const plus = findSign.getElementsByClassName("plus");
        minus[0].classList.toggle("faq_active");
        plus[0].classList.toggle("faq_active");
    });
});


