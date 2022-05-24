import { Navigation, Pagination } from "swiper";

const data = [
    [
      [
        '23.12.3333',
        '2333см',
        's32fdgs',
        'gdfgdf',
        'sdfgsg',
        'dsfgdfgd',
        'dfgd'
      ],
      [
        'dfhdfsh',
        'gsdfgdf',
        'sfdgs',
        'gdfgdf',
        'sdfgsg',
        'dsfgdfgd',
        'dfgd'
      ],
      [
        'dfhdfsh',
        'gsdfgdf',
        'sfdgs',
        'gdfgdf',
        'sdfgsg',
        'dsfgdfgd',
        'dfgd'
      ],
      [
        'dfhdfsh',
        'gsdfgdf',
        'sfdgs',
        'gdfgdf',
        'sdfgsg',
        'dsfgdfgd',
        'dfgd'
      ],
      [
        'dfhdfsh',
        'gsdfgdf',
        'sfdgs',
        'gdfgdf',
        'sdfgsg',
        'dsfgdfgd',
        'dfgd'
      ],
      [
        'dfhdfsh',
        'gsdfgdf',
        'sfdgs',
        'gdfgdf',
        'sdfgsg',
        'dsfgdfgd',
        'dfgd'
      ],
    ],
    [
      [
        'dfhdfsh',
        'gsdfgdf',
        'sfdgs',
        'gdfgdf',
        'sdfgsg',
        'dsfgdfgd',
        'dfgd'
      ],
      [
        'dfhdfsh',
        'gsdfgdf',
        'sfdgs',
        'gdfgdf',
        'sdfgsg',
        'dsfgdfgd',
        'dfgd'
      ],
    ]
]



import smoothScrolls from "./components/smoothScrolls";
smoothScrolls();

import swiper from "./components/swiper";
swiper('.swiper__login-page', {
    loop: true,
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    }
});

import popup from "./components/popup";
popup('.popup', ['.popup__close', '.popup__overlay'], ['.login-page__header-login']);

import putTables from "./components/putTables";
if (document.querySelector('.swiper__tables')) {
    putTables(data);
    swiper('.swiper__tables', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: false,
        modules: [Navigation, Pagination],
        slideClass: 'table',
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        },
        pagination: {
          type: 'fraction', 
          el: '.swiper-pagination'
        }
    });
}
