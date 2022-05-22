<template>
  <div class="menu-page">
    <TheHeader />
    <div class="container relative">
      <div class="menu-page__menu">
        <nuxt-link to="/tracker" class="menu-page__menu-item">
          <p class="menu-page__text">
            Трекеры
          </p>
        </nuxt-link>
        <nuxt-link to="/manual" class="menu-page__menu-item">
          <p class="menu-page__text">
            Методичка
          </p>
        </nuxt-link>
        <nuxt-link to="/trains" class="menu-page__menu-item">
          <p class="menu-page__text">
            Тренировки
          </p>
        </nuxt-link>
      </div>
      <button class="menu-page__add-user admin" @click="addUserPopupActive = true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V20C0 24.4183 3.58172 28 8 28H20C24.4183 28 28 24.4183 28 20V8C28 3.58172 24.4183 0 20 0H8ZM14.809 7C14.809 6.58579 14.4732 6.25 14.059 6.25C13.6448 6.25 13.309 6.58579 13.309 7L13.309 13.3088H7C6.58579 13.3088 6.25 13.6446 6.25 14.0588C6.25 14.473 6.58579 14.8088 7 14.8088H13.309V21C13.309 21.4142 13.6448 21.75 14.059 21.75C14.4732 21.75 14.809 21.4142 14.809 21V14.8088H21C21.4142 14.8088 21.75 14.473 21.75 14.0588C21.75 13.6446 21.4142 13.3088 21 13.3088H14.809L14.809 7Z" fill=""/>
          <line x1="14.0586" y1="7" x2="14.0586" y2="21" stroke="#A7A7A7" stroke-linecap="round"/>
          <line x1="21" y1="14.0588" x2="7.00004" y2="14.0588" stroke="#A7A7A7" stroke-linecap="round"/>
          <rect x="0.5" y="0.5" width="27" height="27" rx="7.5" stroke="#A7A7A7"/>
          </svg>
          <span>Добавить пользователя</span>
      </button>
      <Popup :class="{'popup_active': addUserPopupActive}" @closePopup="addUserPopupActive = false">
        <input type="text" class="popup__input" placeholder="Введите имя пользователя">
        <input type="text" class="popup__input menu-page__input" placeholder="Введите логин пользователя">
        <label for="" class="popup__label" :class="{'popup__label_active': checkboxActive}" @click="checkboxActive = !checkboxActive">
          <input type="checkbox" name="" id="" class="popup__checkbox" :checked="checkboxActive">
          <span class="popup__checkbox-text">Сделать администратором</span>
        </label>
        <button class="popup__button">
          Добавить
        </button>
      </Popup>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/header.vue'
import Popup from '../components/popup.vue'
export default {
  name: 'UserMenu',
  components: { TheHeader, Popup },
  data() {
    return {
      addUserPopupActive: false,
      checkboxActive: false
    }
  },
}
</script>

<style lang="scss">
.menu-page {
  background: radial-gradient(648.59% 271.08% at 50% 2.97%, rgba(251, 248, 244, 0.3) 20.07%, rgba(114, 71, 36, 0.3) 100%), #FBF8F4;
  padding: 0 0 46px;
  min-height: 100vh;
  &__add-user {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    border: none;
    background: transparent;
    align-items: center;
    gap: 13px;
    cursor: pointer;
    & span {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #A7A7A7;
      max-width: 130px;
      text-align: left;
    }
    &:hover {
      & svg path {
        fill: #A7A7A7;
      }
      & svg line {
        stroke: transparent;
      }
    }
  }
  &__input {
    margin-top: 17px;
  }
  &__menu {
    width: 100%;
    max-width: 554px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 47px;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;
    &:before {
      content: '';
      background-image: url('~assets/img/menu-border.svg');
      position: absolute;
      display: block;
      width: 20px;
      height: 437px;
      left: -18px;
    }
    &:after {
      content: '';
      background-image: url('~assets/img/menu-border.svg');
      position: absolute;
      display: block;
      width: 20px;
      height: 437px;
      right: -18px;
      transform: scaleX(-1);
    }
  }
  &__menu-item {
    font-family: 'Muller';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.025em;
    color: #FBF8F4;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 473px;
    height: 173px;
    background-size: cover;
    background-position: 50% 50%;
    padding: 0 38px;
    border-radius: 40px;
    transition: .3s all;
    position: relative;
    &:first-child {
      background-image: url('~assets/img/menu-item1.png');
    }
    &:nth-child(2) {
      background-image: url('~assets/img/menu-item2.png');
    }
    &:last-child {
      background-image: url('~assets/img/menu-item3.png');
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 40px;
      background: rgba(0, 0, 0, .7);
      opacity: 0;
      transition: .3s all;
      z-index: 1;
    }
    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }
  &__text {
    z-index: 5;
  }
}
</style>
