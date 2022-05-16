<template>
  <div class="menu-page">
    <TheHeader />
    <div class="container">
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
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/header.vue'
export default {
  name: 'UserMenu',
  components: { TheHeader }
}
</script>

<style lang="scss">
.menu-page {
  background: radial-gradient(648.59% 271.08% at 50% 2.97%, rgba(251, 248, 244, 0.3) 20.07%, rgba(114, 71, 36, 0.3) 100%), #FBF8F4;
  padding: 0 0 46px;
  min-height: 100vh;
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
