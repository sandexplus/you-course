<template>
  <nuxt-link to="/menu" class="back">
    <img src="~assets/icons/back-arrow.svg" alt="">
    <span>Назад</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BackBtn'
}
</script>

<style lang="scss">
.back {
  display: flex;
  gap: 5px;
  text-decoration: none;
  margin-bottom: 50px;
  & img {
    width: 21px;
    object-fit: unset;
  }
  & span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    color: #534340;
  }
}
</style>
