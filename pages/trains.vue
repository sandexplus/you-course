<template>
  <div class="trains-page">
    <Header />
    <div class="container">
      <Back />
      <Title>Тренировки</Title>
      <div class="trains-page__trains-numbers">
        <div class="trains-page__train-number" :class="{'trains-page__train-number_current': currentTrain === i}" v-for="number, i in trains" :key="i" 
        @click="(e) => changeCurrentTrain(e, i)">
          <div class="trains-page__train-check" :class="{'trains-page__train-check_checked': checkedTrains.indexOf(i) !== -1}" @click="() => checkTrain(i)">
            <img src="~assets/icons/train-check.svg" alt="Checked">
          </div>
          <span>{{ i + 1 }}</span>
        </div>
      </div>
      <p class="trains-page__check-descr">
        Законченные тренировки можно помечать нажатием на кружок в углу ячейки с номером тренировки
      </p>
      <div class="trains-page__trains">
        <template v-for="train, i in trains[currentTrain]">
          <Train
            :key="i"
            :dir="i % 2 === 0 ? 1 : 0"
            :number="i + 1"
            :name="train.name"
            :times="train.times"
            :descr="train.descr"
            :img="'trains-img.svg'"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Train from '../components/train.vue'
export default {
  name: 'TrainsPage',
  components: { Train },
  data () {
    return {
      trains: [
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
      ],
      checkedTrains: [0],
      currentTrain: 0
    }
  },
  methods: {
    checkTrain(i) {
      if (this.checkedTrains.indexOf(i) === -1) {
        this.checkedTrains.push(i);
      } else {
        this.checkedTrains.splice(this.checkedTrains.indexOf(i), 1);
      }
    },
    changeCurrentTrain(e, i) {
      if (e.target.classList.contains('trains-page__train-number') || e.target.tagName.toLowerCase() === 'span') {
        this.currentTrain = i;
      }
    }
  }
}
</script>

<style lang="scss">
.trains-page {
  min-height: 100vh;
  background: #FBF8F4;
  &__trains-numbers {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
  }
    &__train-check {
    border: 1.5px solid #A7A7A7;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    z-index: 99999;
    user-select: none;
    & img {
      display: none;
    }
    &_checked {
      border: none;
      cursor: default;
      & img {
        display: block;
      }
    }
  }
  &__train-number {
    cursor: pointer;
    width: 82px;
    height: 82px;
    border: 1.5px solid #AEAEAE;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #434242;
    margin-top: 40px;
    user-select: none;
    &_current {
      background: #724724;
      color: #fff;
      & .trains-page__train-check {
        border: 1.5px solid rgba(251, 248, 244, 0.5);
      }
      & .trains-page__train-check_checked {
        border: none;
      }
    }
  }
  &__check-descr {
    margin-top: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #A7A7A7;
    max-width: 490px;
  }
  &__trains {
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin-top: 50px;
  }
}
</style>
