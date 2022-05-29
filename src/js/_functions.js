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

const baseUrl = 'https://buttery-sugary-cut.glitch.me';

import getServerData from "./components/getServerData";
// console.log(getServerData(baseUrl + '/users'));

if (document.querySelector('.menu-page')) {
  addUser(baseUrl);
}

import popup from "./components/popup";
popup('.popup', ['.popup__close', '.popup__overlay'], ['.login-page__header-login']);
popup('.popup', ['.popup__close', '.popup__overlay', '.popup__button'], ['.menu-page__add', '.menu-page__add path', '.menu-page__add span']);

changeCheckbox('.popup__label', 'popup__label_active', '.popup__checkbox', '.popup__custom-chb', 'popup__custom-chb_active');

showAdminFunctions(baseUrl);

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




import drawTrains from "./components/drawTrains";
import addUser from "./components/addUser";
import logIn from "./components/logIn";
import saveTable from "./components/saveTable";
import changeCheckbox from "./components/changeCheckbox";
import showAdminFunctions from "./components/showAdminFunctions";
import findTrains from "./components/findTrains";
if (document.querySelector('.trains-page')) {
  drawTrains(baseUrl, localStorage.getItem('login'));
}

findTrains(baseUrl, '.trains-page__search', '.trains-page__search-btn');

