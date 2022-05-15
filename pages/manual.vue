<template>
  <div class="manual-page">
    <TheHeader />
    <div class="container">
      <Back />
      <div class="manual-page__promo">
        <h1 class="manual-page__title">
          Методичка
        </h1>
      </div>
      <div class="manual-page__descr">
        <p class="manual-page__p">
          Я рада, что вы читаете это, значит вы выбрали путь к здоровью и балансу внутри себя.
        </p>
        <p class="manual-page__p">
          Это не просто сборник диет.  Мы здесь учимся питаться вкусно, полезно и без запретов.
        </p>
        <p class="manual-page__p">
          Методичка поможет начать тренироваться в удовольствие и перестать корить себя за то, что ты ешь и как выглядишь.
        </p>
      </div>
      <button class="manual-page__save">
        <span>Скачать в pdf</span>
        <img src="@/assets/icons/save.svg" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/header.vue'
import Back from '../components/back.vue'
export default {
  name: 'ManualPage',
  components: { TheHeader, Back }
}
</script>

<style lang="scss">
.manual-page {
  background: radial-gradient(648.59% 271.08% at 50% 2.97%, rgba(251, 248, 244, 0.3) 20.07%, rgba(114, 71, 36, 0.3) 100%), #FBF8F4;
  padding: 0 0 46px;
  min-height: 100vh;
  &__promo {
    width: 100%;
    height: 368px;
    display: flex;
    align-items: flex-end;
    background-image: url('@/assets/img/manual-promo.png');
    border-radius: 40px;
    padding: 0 0 46px 51px;
  }
  &__title {
    font-family: 'Muller';
    font-style: normal;
    font-weight: 700;
    font-size: 59px;
    line-height: 59px;
    color: #FFFFFF;
  }
  &__descr {
    padding: 34px 34px;
    max-width: 489px;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 29px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      background-image: url('@/assets/img/manual-border.svg');
      top: -15px;
      width: 491px;
      height: 19px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      content: '';
      position: absolute;
      background-image: url('@/assets/img/manual-border.svg');
      bottom: -15px;
      width: 491px;
      height: 19px;
      left: 50%;
      transform: translateX(-50%) scaleY(-1);
    }
  }
  &__p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 110%;
    color: #434242;
  }
  &__save {
    margin: 0 auto;
    margin-top: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 254px;
    height: 60px;
    border: 2px solid rgba(83, 67, 64, 0.3);
    border-radius: 18px;
    font-family: 'Muller';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 26px;
    color: #534340;
    gap: 10px;
    cursor: pointer;
    transition: .3s all;
    background: transparent;
    &:hover {
      background: rgba(83, 67, 64, 0.04);
    }
  }
}
</style>
