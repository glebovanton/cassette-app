<script>
export default {
  name: "Oferta",
  data() {
    return {};
  }
};
</script>
<template>
  <div class="banner">
    <div id="banner__container">
      <p class="banner__text">
        Осуществляя заказ услуги Исполнителя, Заказчик принимает и соглашается
        со всеми условиями, изложенными в настоящей
        <a class="banner__link" href="/oferta.html" target="_blank"
          ><strong>оферте</strong></a
        >, и с информацией, размещенной на сайте Исполнителя в момент принятия
        Исполнителем заказа.
      </p>
      <span class="close" @click="$emit('trigerOferta')">✕</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  bottom: 5px;
  position: fixed;
  left: 50%;
  z-index: 200;
  width: 90vw;
  font-size: 12px;
  line-height: 16px;
  color: #333;
  background-color: #ffffffcf;
  border-radius: 8px;
  transform: translateX(-50%);
  padding: $spacer/3;
  padding-right: $spacer;
  &__container {
    position: relative;
    padding: 4px 30px 4px 8px;
  }
  &__text {
    font-size: 13px;
    line-height: 1.4;
    color: black;
    font-weight: 400;
    a {
      line-height: 1;
    }
  }
  &__link {
    font-weight: bold;
    color: #06c;
    text-decoration: none;
    &:hover {
      color: #f90;
      text-decoration: underline;
    }
  }
  .close {
    position: absolute;
    top: 4px;
    right: 8px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      top: 3.5px;
      right: 7.5px;
      font-size: 19px;
    }
  }
}
</style>
