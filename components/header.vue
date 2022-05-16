<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link to="/menu" class="header__logo">
          <img src="~assets/img/logo__header.svg" alt="Logo">
        </nuxt-link>
        <div class="header__right">
          <img src="~assets/icons/user.svg" alt="">
          <p class="header__user">
            Екатерина
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss">
.header {
  background: #FBF8F4;
  &__inner {
    display: flex;
    justify-content: space-between;
    padding: 63px 0;
  }
  &__right {
    display: flex;
    align-items: center;
    gap: 26px;
  }
  &__user {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: rgba(83, 67, 64, 0.9);
  }
}
</style>
