<template>
  <div class="popup">
    <div class="popup__overlay" @click="closePopup">
      <div class="popup__container">
        <div class="popup__close" @click="$emit('closePopup')">
          <img src="~assets/icons/close.svg" alt="close" class="popup__close">
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUp',
  emits: ['closePopup'],
  methods: {
    closePopup (e) {
      if (e.target === document.querySelector('.popup__overlay')) {
        this.$emit('closePopup')
      }
    }
  }
}
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999999;
  backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  transition: .3s all;
  &_active {
    opacity: 1;
    pointer-events: all;
  }
  &__overlay {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    width: 100vw;
    height: 100vh;
  }
  &__container {
    padding: 88px 134px 55px;
    background: #FBF8F4;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__close {
    background: transparent;
    border-radius: 10px;
    transition: .3s all;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    top: 27px;
    right: 27px;
    &:hover {
      background: rgba(53, 53, 53, 0.05);
    }
    & img {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &:hover {
        background: transparent;
      }
    }
  }
  &__title {
    max-width: 535px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #434242;
    opacity: 0.7;
    margin-bottom: 33px;
  }
  &__input {
    background: rgba(53, 53, 53, 0.05);
    border-radius: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #434242;
    display: block;
    width: 100%;
    border: none;
    padding: 15px 26px;
    &::placeholder {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 27px;
      color: #AEAEAE;
    }
  }
  &__button {
    background: #724724;
    border-radius: 20px;
    border: none;
    transition: .3s all;
    display: block;
    margin: 0 auto;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.025em;
    color: #FFFFFF;
    padding: 8px 33px;
    cursor: pointer;
    margin-top: 41px;
    &:hover {
      background: #8D6A4E;
    }
  }
}
</style>
