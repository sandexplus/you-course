import { Navigation, Pagination } from "swiper";
import putTables from "./components/putTables";


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
];

const trains = [
  [
    {
      name: 'Ягодичный мостик с поверхности с утяжелением или',
      times: '3 подхода по 15-25 повторений',
      descr: 'Таз обязательно прижимать к полу и не поднимать всё ремя работы. Носки разведены в стороны для большей работы ягодиц. Руки согнуты в локтях для того, чтобы снять нагрузку с поясницы'
    },
    {
      name: 'Ягодичный мостик с поверхности с утяжелением или',
      times: '3 подхода по 15-25 повторений',
      descr: 'Таз обязательно прижимать к полу и не поднимать всё ремя работы. Носки разведены в стороны для большей работы ягодиц. Руки согнуты в локтях для того, чтобы снять нагрузку с поясницы'
    },
    {
      name: 'Ягодичный мостик с поверхности с утяжелением или',
      times: '3 подхода по 15-25 повторений',
      descr: 'Таз обязательно прижимать к полу и не поднимать всё ремя работы. Носки разведены в стороны для большей работы ягодиц. Руки согнуты в локтях для того, чтобы снять нагрузку с поясницы'
    },
    {
      name: 'Ягодичный мостик с поверхности с утяжелением или',
      times: '3 подхода по 15-25 повторений',
      descr: 'Таз обязательно прижимать к полу и не поднимать всё ремя работы. Носки разведены в стороны для большей работы ягодиц. Руки согнуты в локтях для того, чтобы снять нагрузку с поясницы'
    },
    {
      name: 'Ягодичный мостик с поверхности с утяжелением или',
      times: '3 подхода по 15-25 повторений',
      descr: 'Таз обязательно прижимать к полу и не поднимать всё ремя работы. Носки разведены в стороны для большей работы ягодиц. Руки согнуты в локтях для того, чтобы снять нагрузку с поясницы'
    }
  ],
  [
    {
      name: 'Ягодичный мостик с поверхности с утяжелением или',
      times: '3 подхода по 15-25 повторений',
      descr: 'Таз обязательно прижимать к полу и не поднимать всё ремя работы. Носки разведены в стороны для большей работы ягодиц. Руки согнуты в локтях для того, чтобы снять нагрузку с поясницы'
    },
    {
      name: 'Ягодичный мостик с поверхности с утяжелением или',
      times: '3 подхода по 15-25 повторений',
      descr: 'Таз обязательно прижимать к полу и не поднимать всё ремя работы. Носки разведены в стороны для большей работы ягодиц. Руки согнуты в локтях для того, чтобы снять нагрузку с поясницы'
    }
  ]
];

const baseUrl = 'http://localhost:3000';

import getServerData from "./components/getServerData";
// console.log(getServerData(baseUrl + '/users'));

if (document.querySelector('.menu-page')) {
  addUser(baseUrl);
}

getServerData(`${baseUrl}/users?login=${localStorage.getItem('login')}`)
  .then(res => {
    // console.log(res)
    if (document.querySelector('.header__user')) {
      document.querySelector('.header__user').innerHTML = res[0].name;
    }
    if (document.querySelector('.swiper__tables')) {
      console.log(res[0].tracker)
      putTables(res[0].tracker);
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
      saveTable(baseUrl);
  }
    
  })

import smoothScrolls from "./components/smoothScrolls";
smoothScrolls();


logIn('.login-page__header-login', '.popup__input', '.popup__button', baseUrl);

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


import drawTrains from "./components/drawTrains";
import addUser from "./components/addUser";
import logIn from "./components/logIn";
import saveTable from "./components/saveTable";
drawTrains(baseUrl);
