<template>
  <div class="tracker-page">
    <TheHeader />
    <div class="container">
      <Back />
      <div class="tracker-page__top-container">
        <Title>Статистика изменений</Title>
        <button class="tracker-page__save-tracker">
          <span>Скачать трекер</span>
          <img src="@/assets/icons/save.svg" alt="">
        </button>
      </div>
      <!--space for table-->
      <div class="tracker-page__bot-container">
        <div class="tracker-page__data-container">
          <Title>Параметры</Title>
          <div class="tracker-page__data">
            <p class="tracker-page__p">
              <span>О</span>бъём <span>Г</span>руди — самое выпуклое место в районе сосков
            </p>
            <p class="tracker-page__p">
              <span>О</span>бъём <span>Т</span>алии — самое тонкое место в районе живота
            </p>
            <p class="tracker-page__p">
              <span>О</span>бъём <span>Б</span>ёдер — самое широкое место на уровне ягодиц
            </p>
            <p class="tracker-page__p">
              <span>О</span>бъём одного <span>Б</span>едра  — на уровне чуть выше середины бедра
            </p>
            <p class="tracker-page__p">
              <span>О</span>бъём <span>Н</span>оги (икры) — на уровне самого широко места
            </p>
            <p class="tracker-page__p">
              <span>О</span>бъём <span>Р</span>уки (бицепса) — на уровне чуть выше середины плеча
            </p>
          </div>
        </div>
        <img src="@/assets/img/maneken.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/header.vue'
import Title from '../components/title.vue'
export default {
  name: 'TrackerPage',
  components: { TheHeader, Title }
}
</script>

<style lang="scss">
.tracker-page {
  background: radial-gradient(648.59% 271.08% at 50% 2.97%, rgba(251, 248, 244, 0.3) 20.07%, rgba(114, 71, 36, 0.3) 100%), #FBF8F4;
  padding: 0 0 171px;
  min-height: 100vh;
  &__top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__save-tracker {
    display: flex;
    gap: 22px;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none;
    & span {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 32px;
      color: #534340;
    }
    & img {
      width: 16px;
      height: 26px;
    }
  }
  &__bot-container {
    display: flex;
    justify-content: space-between;
  }
  &__data-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 62px;
  }
  &__data {
    display: flex;
    flex-direction: column;
    gap: 23px;
  }
  &__p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #434242;
    & span {
      font-weight: 600;
    }
  }
}
</style>
