// Header Scripts
let header = document.getElementById('header');
let menuBtn = document.getElementById('menuBtn');

window.addEventListener('scroll', function() {
    header.classList.toggle('active', window.scrollY > 0);
});

menuBtn.addEventListener('click', function() {
    header.classList.toggle('full');
});

// ScrollSpy Scripts
// let sections = document.querySelectorAll('.section');
// let links = document.querySelectorAll('.nav-item');

// window.onscroll = () => {

//     sections.forEach(section => {

//         let top = window.scrollY;
//         let offset = section.offsetTop;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             links.forEach(link => {
//                 link.classList.remove('active');
//                 header.querySelector('.nav-item[href*=' + id + ']').classList.add('active');
//             });
//         }

//     });

// }