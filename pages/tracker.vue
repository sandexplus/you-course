<template>
  <div class="tracker-page">
    <TheHeader />
    <div class="container">
      <Back />
      <div class="tracker-page__top-container">
        <Title>Статистика изменений</Title>
        <button class="tracker-page__save-tracker">
          <span>Скачать трекер</span>
          <img src="~assets/icons/save.svg" alt="">
        </button>
      </div>
      <!--space for table-->
      <div class="tracker-page__reviews-swiper">
        <div class="tracker-page__table-descrs">
          <div class="tracker-page__table-descr">Дата</div>
          <div class="tracker-page__table-descr">ОГ</div>
          <div class="tracker-page__table-descr">ОТ</div>
          <div class="tracker-page__table-descr">ОБ</div>
          <div class="tracker-page__table-descr">ОБ<sub>1</sub></div>
          <div class="tracker-page__table-descr">ОН</div>
          <div class="tracker-page__table-descr">ОР</div>
        </div>
        <swiper ref="reviewSwiper" :options="swiperOptions">
          <swiper-slide :key="i" v-for="table, i of data">
            <Table 
              :tableData="table">
            </Table>
          </swiper-slide>
          <template v-if="data[data.length - 1].length === 6">
            <swiper-slide :key="i" v-for="table, i of ['']">
              <Table 
                :tableData="table">
              </Table>
            </swiper-slide>
          </template>
        </swiper>
      </div>
      <div class="tracker-page__subtable">
        <div class=""></div>
        <button class="tracker-page__save-table">Сохранить</button>
        <div class="tracker-page__arrows">
          <div slot="nav-prev" class="swiper-prev tracker-page__reviews-prev">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.434082" y="10" width="13.1693" height="1.91553" rx="0.957767" transform="rotate(-45 0.434082 10)" fill="#534340"/>
            <rect x="1.78857" y="8.64557" width="13.1693" height="1.91553" rx="0.957767" transform="rotate(45 1.78857 8.64557)" fill="#534340"/>
            </svg>
          </div>
          <div class="swiper-pagination tracker-page__pagination"></div>
          <div slot="nav-next" class="swiper-next tracker-page__reviews-next">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="13.1693" height="1.91553" rx="0.957767" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 11.333 10)" fill="#534340"/>
            <rect width="13.1693" height="1.91553" rx="0.957767" transform="matrix(-0.707107 0.707107 0.707107 0.707107 9.97852 8.64557)" fill="#534340"/>
            </svg>
          </div>
        </div>
      </div>
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
        <img src="~assets/img/maneken.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/header.vue'
import Title from '../components/title.vue'
import Table from '../components/table.vue'
import { Pagination } from 'Swiper'
// import 'swiper/css/pagination'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
export default {
  name: 'TrackerPage',
  components: { Swiper, SwiperSlide, TheHeader, Title, Table },
  directives: {
    swiper: directive
  },
  modules: [Pagination],
  data() {
    return {
      swiperOptions: {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: false,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        },
        pagination: {
          type: 'fraction', 
          el: '.swiper-pagination'
        }
      },
      data: [
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
    }
  },
  computed: {
    swiper () {
      return this.$refs.reviewSwiper.$swiper
    }
  }
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
  &__subtable {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: flex-end;
    margin-top: 40px;
    margin-bottom: 100px;
  }
  &__save-table {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #534340;
    width: 200px;
    height: 50px;
    background: rgba(53, 53, 53, 0.04);
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
  &__arrows {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    align-items: center;
  }
  &__pagination.swiper-pagination {
    position: static;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    color: #534340;
    width: auto;
  }
  &__reviews-prev, &__reviews-next {
    /* position: absolute;
    bottom: 0; */
    cursor: pointer;
    border-radius: 100%;
    width: 38px;
    height: 38px;
    background: rgba(53, 53, 53, 0.04);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__reviews-swiper {
    display: flex;
    justify-content: flex-start;
    margin-top: 70px;
    position: relative;
  }
  &__table-descr {
    width: 130px;
    height: 100px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;
    color: #434242;
    display: flex;
    justify-content: center;
    align-items: center;
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
