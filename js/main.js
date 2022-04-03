'use strict';

// Horisontal and vertical BG video change
let bgVideoPoster = document.querySelector('#bgVideo');
let bgVideoWebm = document.querySelector('#bgVideoWebm');
let bgVideoMp4 = document.querySelector('#bgVideoMp4');

if ( window.screen.width <= 930 ) {
    bgVideoPoster.setAttribute('poster', 'video/pexels-photo-10622156.webp'),
    bgVideoWebm.setAttribute('src', 'video/pexels-ivan-photo-10622156.webm'),
    bgVideoMp4.setAttribute('src', 'video/pexels-ivan-photo-10622156.mp4')
} else if ( window.screen.width >= 931 ) {
    bgVideoPoster.setAttribute('poster', 'video/NOMI_video backplate_v2-poster.jpg'),
    bgVideoWebm.setAttribute('src', 'video/NOMI_video backplate_v2.webm'),
    bgVideoMp4.setAttribute('src', 'video/NOMI_video backplate_v2.mp4')
}