<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'TitleComponent'
}
</script>

<style lang="scss">
.title {
  font-family: 'Muller';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: #713F10;
}
</style>
