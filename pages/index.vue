<template>
  <div class="login-page">
    <popup :class="{'popup_active': loginPopupActive}" @closePopup="loginPopupActive = false">
      <p class="popup__title">
        Возможность войти в личный кабинет предоставляется после оплаты какого-либо тарифа и выдачи личного логина
      </p>
      <input type="text" class="popup__input" placeholder="Введите логин пользователя">
      <button class="popup__button">
        Войти
      </button>
    </popup>
    <section class="login-page__promo">
      <div class="login-page__header">
        <ul class="login-page__header-links">
          <li class="login-page__header-link">
            <a href="#about">Обо мне</a>
          </li>
          <li class="login-page__header-link">
            <a href="#tarif">Тарифы</a>
          </li>
          <li class="login-page__header-link">
            <a href="#reviews">Отзывы</a>
          </li>
          <button class="login-page__header-login" @click="loginPopupActive = true">
            Войти
          </button>
        </ul>
      </div>
      <div class="login-page__footer">
        <div class="login-page__footer-links">
          <a href="" class="login-page__footer-link">
            <img src="~assets/icons/tg_icon.svg" alt="Telegram">
          </a>
          <a href="" class="login-page__footer-link">
            <img src="~assets/icons/inst_icon.svg" alt="Instagram">
          </a>
        </div>
      </div>
    </section>
    <section id="about" class="login-page__about">
      <div class="container-wide">
        <div class="login-page__about-container">
          <h2 class="login-page__about-title">
            ОБО МНЕ
          </h2>
          <div class="login-page__about-left">
            <h3 class="login-page__about-name">
              Привет! Меня зовут Диана Щербинина
            </h3>
            <p class="login-page__about-text">
              Я тренер и специалист по питанию. Помогаю людям в модификации образа жизни, коррекции питания и веса
            </p>
            <h3 class="login-page__about-name login-page__about-mt">
              С кем я работаю?
            </h3>
            <ul class="login-page__about-list">
              <li class="login-page__about-item">
                Беременные девушки и девушки после родов
              </li>
              <li class="login-page__about-item">
                Люди с недостатком мышечной массы и отеками
              </li>
              <li class="login-page__about-item">
                Люди с лишним весом
              </li>
            </ul>
          </div>
          <div class="login-page__about-right">
            <div class="login-page__about-img">
              <img src="~assets/img/woman.png" alt="I am">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="tarif" class="login-page__tarif">
      <div class="container-wide">
        <div class="login-page__tarif-container">
          <h2 class="login-page__tarif-title">
            ТАРИФЫ
          </h2>
          <div class="login-page__tarif-items">
            <div class="login-page__tarif-item">
              <div class="login-page__tarif-top">
                <div class="login-page__tarif-name">
                  Консультация
                </div>
                <div class="login-page__tarif-time">
                  Единоразово
                </div>
                <p class="login-page__tarif-text">
                  Вы пишите мне, например:
                </p>
                <ul class="login-page__tarif-list">
                  <div class="login-page__tarif-li">
                    С чего начать похудение?
                  </div>
                  <div class="login-page__tarif-li">
                    Сколько раз в неделю мне стоит тренироваться?
                  </div>
                  <div class="login-page__tarif-li">
                    Как научиться считать калории?
                  </div>
                </ul>
                <div class="login-page__tarif-text">
                  Через сутки я с вами свяжусь по видео, ауидозвонку или в сообщениях.
                </div>
                <div class="login-page__tarif-text">
                  На консультации я разберу ваш вопрос и любые дополнительные.
                </div>
              </div>
              <div class="login-page__tarif-bot">
                <div class="login-page__tarif-sum">
                  1000₽
                </div>
                <div class="login-page__tarif-subsum">
                  повторно 800₽
                </div>
              </div>
            </div>
            <div class="login-page__tarif-item">
              <div class="login-page__tarif-top">
                <div class="login-page__tarif-name">
                  Тренировочный план
                </div>
                <div class="login-page__tarif-time">
                  Единоразово
                </div>
                <p class="login-page__tarif-text">
                  В сообщении вы указываете некоторые детали:
                </p>
                <ul class="login-page__tarif-list">
                  <div class="login-page__tarif-li">
                    Где вы занимаетесь (дом или тренажёрный зал)
                  </div>
                  <div class="login-page__tarif-li">
                    Инвентарь, который имеете (гантели, резинки, коврик, штанга и т. д.)
                  </div>
                  <div class="login-page__tarif-li">
                    Ваши особенности (например, есть проблемы со здоровьем)
                  </div>
                  <div class="login-page__tarif-li">
                    Наличие свободного времени (можете заниматься только 3 раза в неделю и т. д.)
                  </div>
                </ul>
                <div class="login-page__tarif-text">
                  В течение 2-х дней я составлю для вас программу и подкорректирую, если это потребуется.
                </div>
              </div>
              <div class="login-page__tarif-bot">
                <div class="login-page__tarif-sum">
                  1000₽
                </div>
                <div class="login-page__tarif-subsum">
                  повторно 800₽
                </div>
              </div>
            </div>
            <div class="login-page__tarif-item">
              <div class="login-page__tarif-top">
                <div class="login-page__tarif-name">
                  Сопровождение
                </div>
                <div class="login-page__tarif-time">
                  Длится 21 день
                </div>
                <p class="login-page__tarif-text">
                  Вы проходите вводное анкетирование.
                </p>
                <p class="login-page__tarif-text">
                  И после получаете:
                </p>
                <ul class="login-page__tarif-list">
                  <div class="login-page__tarif-li">
                    Рекомендации по ведению рациона
                  </div>
                  <div class="login-page__tarif-li">
                    Доступ к тренировкам
                  </div>
                  <div class="login-page__tarif-li">
                    Трекер для отслеживания параметров тела
                  </div>
                  <div class="login-page__tarif-li">
                    Методичку с главными темами по достижению цели
                  </div>
                  <div class="login-page__tarif-li">
                    Планер и дневник вашего здоровья
                  </div>
                </ul>
                <div class="login-page__tarif-text">
                  Куратор будет сопровождать вас на всех этапах, и отвечать на любые вопросы.
                </div>
              </div>
              <div class="login-page__tarif-bot">
                <div class="login-page__tarif-sum">
                  3000₽
                </div>
                <div class="login-page__tarif-subsum">
                  повторно 2800₽
                </div>
              </div>
            </div>
            <div class="login-page__tarif-item">
              <div class="login-page__tarif-top">
                <div class="login-page__tarif-name">
                  Cопровождение парное
                </div>
                <div class="login-page__tarif-time">
                  Длится 21 день
                </div>
                <p class="login-page__tarif-text">
                  Тот же тариф «Сопровождение» только для двух человек.
                </p>
                <p class="login-page__tarif-text">
                  Подходит для подруг, сестёр, матери и дочери.
                </p>
              </div>
              <div class="login-page__tarif-bot">
                <div class="login-page__tarif-sum">
                  4000₽
                </div>
                <div class="login-page__tarif-subsum">
                  повторно 3800₽
                </div>
              </div>
            </div>
          </div>
          <div class="login-page__tarif-links">
            <div class="login-page__tarif-link">
              Для оплаты связаться
            </div>
            <a href="#" class="login-page__tarif-link">
              <img src="@/assets/icons/tg_icon__brown.svg" alt="Telegram">
            </a>
            <a href="#" class="login-page__tarif-link">
              <img src="@/assets/icons/inst_icon__brown.svg" alt="Instagram">
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="reviews" class="login-page__reviews">
      <div class="container-wide">
        <div class="login-page__reviews-container">
          <h2 class="login-page__reviews-title">
            ОТЗЫВЫ
          </h2>
          <div class="login-page__reviews-swiper">
            <swiper ref="reviewSwiper" :options="swiperOptions">
              <swiper-slide>
                <div class="login-page__reviews-slider">
                  <img src="@/assets/img/review1.png" alt="Review">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="login-page__reviews-slider">
                  <img src="@/assets/img/review2.png" alt="Review">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="login-page__reviews-slider">
                  <img src="@/assets/img/review3.png" alt="Review">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="login-page__reviews-slider">
                  <img src="@/assets/img/review4.png" alt="Review">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="login-page__reviews-slider">
                  <img src="@/assets/img/review5.png" alt="Review">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="login-page__reviews-slider">
                  <img src="@/assets/img/review6.png" alt="Review">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="login-page__reviews-slider">
                  <img src="@/assets/img/review7.png" alt="Review">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="login-page__reviews-slider">
                  <img src="@/assets/img/review8.png" alt="Review">
                </div>
              </swiper-slide>
            </swiper>
            <div slot="nav-prev" class="swiper-prev login-page__reviews-prev">
              <img src="@/assets/icons/slider-arrow__left.svg" alt="Prev">
            </div>
            <div slot="nav-next" class="swiper-next login-page__reviews-next">
              <img src="@/assets/icons/slider-arrow__right.svg" alt="Next">
            </div>
          </div>
          <div class="login-page__reviews-links">
            <a href="#" class="login-page__reviews-link">
              <img src="@/assets/icons/tg_icon__brown.svg" alt="Telegram">
            </a>
            <a href="#" class="login-page__reviews-link">
              <img src="@/assets/icons/inst_icon__brown.svg" alt="Instagram">
            </a>
          </div>
          <div class="login-page__reviews-logo">
            <img src="@/assets/img/logo.svg" alt="Logo">
          </div>
        </div>
      </div>
      <p class="login-page__reviews-policy">
        You.Course<br>04 | 2022
      </p>
    </section>
  </div>
</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Popup from '../components/popup.vue'

export default {
  name: 'LoginPage',
  components: {
    Swiper,
    SwiperSlide,
    Popup
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        }
      },
      loginPopupActive: false
    }
  },
  computed: {
    swiper () {
      return this.$refs.reviewSwiper.$swiper
    }
  },
  mounted () {
    const anchors = document.querySelectorAll('a[href*="#"]')

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').slice(1)
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })
  }
}
</script>

<style lang="scss">
.login-page {
  &__promo {
    position: relative;
    top: 0;
    width: 100%;
    min-height: 980px;
    height: 100vh;
    background-image: url('@/assets/img/login-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
  &__header {
    padding-top: 70px;
    &-links {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 200px;
      list-style-type: none;
    }
    &-link {
      font-family: 'PP Pangram Sans Rounded';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.025em;
      & a {
        color: #FFFFFF;
        text-decoration: none;
      }
    }
    &-login {
      position: absolute;
      right: 70px;
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(-50%);
      font-weight: 400;
      font-family: 'PP Pangram Sans Rounded';
      font-style: normal;
      padding-bottom: 5px;
      font-size: 24px;
      line-height: 27px;
      letter-spacing: 0.025em;
      color: #FFFFFF;
      width: 166px;
      height: 52px;
      border: 2px solid #FFFFFF;
      border-radius: 26px;
      cursor: pointer;
      background: transparent;
      transition: .3s all;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
  &__footer {
    &-links {
      position: absolute;
      left: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(-50%);
      bottom: 60px;
      gap: 25px;
    }
  }
  &__about {
    background: #fbf8f4;
    width: 100%;
    &-container {
      min-height: 900px;
      max-height: 900px;
      padding: 155px 165px 0px 155px;
      border: 2px solid rgba(83, 67, 64, 0.3);
      border-top: none;
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 100vh;
    }
    &-title {
      position: absolute;
      left: -47px;
      top: 85px;
      font-family: 'Muller';
      font-style: normal;
      font-weight: 800;
      font-size: 120px;
      letter-spacing: 0.025em;
      color: #6F4C30;
      background: #fbf8f4;
    }
    &-right {
      position: relative;
      z-index: 2;
      width: 500px;
      height: 764px;
      & img {
        border-radius: 270px;
        width: 100%;
        height: 100%;
        background: #fbf8f4;
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        z-index: -1;
        right: -165px;
        top: 50%;
        transform: translateY(-50%);
        height: 2px;
        background: rgba(83, 67, 64, 0.3);
      }
    }
    &-img {
      padding: 20px;
      border: 2px solid rgba(83, 67, 64, 0.3);
      border-radius: 270px;
      background: #fbf8f4;
    }
    &-left {
      display: flex;
      flex-direction: column;
      margin-top: 155px;
      max-width: 650px;
    }
    &-name {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 0.025em;
      color: #724724;
    }
    &-mt {
      margin-top: 56px;
    }
    &-text {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 120%;
      color: #534340;
      margin-top: 48px;
    }
    &-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style-type: none;
      margin-top: 35px;
      max-width: 500px;
    }
    &-item {
      position: relative;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 120%;
      color: #534340;
      margin-left: 32px;
      &::before {
        content: '';
        width: 22px;
        height: 22px;
        border-radius: 100%;
        border: 2px solid rgba(53, 53, 53, 0.3);
        display: block;
        position: absolute;
        left: -32px;
        top: 0px;
        background: transparent;
      }
    }
  }
  &__tarif {
    background: #fbf8f4;
    width: 100%;
    padding-top: 25px;
    &-container {
      padding: 100px 100px 0 100px;
      min-height: 1000px;
      max-height: 1000px;
      border: 2px solid rgba(83, 67, 64, 0.3);
      border-radius: 40px;
      position: relative;
      height: 100vh;
    }
    &-title {
      position: absolute;
      left: 50%;
      top: -85px;
      transform: translateX(-50%);
      font-family: 'Muller';
      font-style: normal;
      font-weight: 800;
      font-size: 120px;
      letter-spacing: 0.025em;
      color: #6F4C30;
      background: #fbf8f4;
    }
    &-items {
      display: grid;
      grid-template-columns: repeat(4, 1fr );
      gap: 55px
    }
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 690px;
      max-width: 330px;
      padding: 22px;
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid #DAD5D2;
      border-radius: 20px;
    }
    &-name {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 39px;
      text-align: center;
      letter-spacing: 0.025em;
      color: #724821;
    }
    &-time {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      letter-spacing: 0.025em;
      color: rgba(83, 67, 64, 0.5);
      margin-bottom: 35px;
    }
    &-text {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 120%;
      color: #534340;
      margin-top: 15px;
    }
    &-bot {
      border-top: 1px solid #DAD5D2;
      padding-top: 15px;
    }
    &-list {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      list-style-type: none;
      gap: 5px;
    }
    &-li {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 120%;
      color: rgba(83, 67, 64, 0.7);
      position: relative;
      margin-left: 20px;
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: -20px;
        top: 5px;
        width: 9px;
        height: 9px;
        border-radius: 100%;
        border: 1px solid rgba(83, 67, 64, 0.6);
      }
    }
    &-sum {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 120%;
      text-align: center;
      color: #534340;
    }
    &-subsum {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      text-align: center;
      color: rgba(83, 67, 64, 0.5);
    }
    &-links {
      display: flex;
      justify-content: center;
      gap: 5px;
      align-items: center;
      margin-top: 50px;
    }
    &-link {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      display: block;
      color: rgba(83, 67, 64, 0.6);
      & img {
        display: block;
      }
    }
  }
  &__reviews {
    background: #fbf8f4;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 181px;
    position: relative;
    &-container {
      padding: 132px 223px 100px;
      min-height: 900px;
      border: 2px solid rgba(83, 67, 64, 0.3);
      border-radius: 40px;
      position: relative;
      height: 100%;
    }
    &-title {
      position: absolute;
      left: 50%;
      top: -85px;
      transform: translateX(-50%);
      font-family: 'Muller';
      font-style: normal;
      font-weight: 800;
      font-size: 120px;
      letter-spacing: 0.025em;
      color: #6F4C30;
      background: #fbf8f4;
    }
    &-slider {
      max-width: 380px;
      width: 100%;
      height: auto;
      border-radius: 20px;
      & img {
        width: 100%;
        border-radius: 20px;
      }
    }
    &-swiper {
      position: relative;
    }
    &-prev {
      position: absolute;
      left: -50px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      & img {
        width: 100%;
      }
    }
    &-next {
      position: absolute;
      right: -50px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      & img {
        width: 100%;
      }
    }
    &-links {
      display: flex;
      justify-content: center;
      gap: 15px;
      align-items: center;
      margin-top: 115px;
    }
    &-link {
      display: block;
      width: 40px;
      height: 40px;
      & img {
        width: 100%;
      }
    }
    &-logo {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      background: #fbf8f4;
      width: 400px;
      display: flex;
      justify-content: center;
    }
    &-policy {
      position: absolute;
      display: block;
      text-align: center;
      left: 50%;
      bottom: 65px;
      transform: translateX(-50%);
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: rgba(67, 66, 66, 0.67);
    }
  }
}
</style>
