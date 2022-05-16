<template>
  <div class="train" :class="{'train_right': !direction}">
    <div class="train__data">
      <div class="train__number">
        {{ number }}.
      </div>
      <p class="train__name">
        {{ name }}
      </p>
      <p class="train__times">
        {{ times }}
      </p>
      <p class="train__descr">
        {{ descr }}
      </p>
    </div>
    <div class="train__img">
      <img :src="img ? require(`~/assets/img/${img}`) : ''" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainComponent',
  props: {
    dir: {
      type: Number,
      default: 0,
      required: true
    },
    number: {
      type: Number,
      default: 1,
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    times: {
      type: String,
      default: '',
      required: true
    },
    descr: {
      type: String,
      default: '',
      required: true
    },
    img: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      direction: this.dir
    }
  }
}
</script>

<style lang="scss">
.train {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 150px;
  padding-bottom: 95px;
  &_right {
    flex-direction: row-reverse;
  }
  &__data {
    max-width: 760px;
    position: relative;
  }
  &__name, &__number {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #744111;
  }
  &__number {
    position: absolute;
    left: -30px;
    top: 0;
  }
  &__times {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #A7A7A7;
    margin-top: 17px;
    position: relative;
    &:after {
      content: '';
      display: block;
      width: 57px;
      height: 2px;
      background: rgba(53, 53, 53, 0.4);
      position: absolute;
      bottom: -14px;
      left: 0;
    }
  }
  &__descr {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #434242;
    margin-top: 28px;
  }
}
</style>
