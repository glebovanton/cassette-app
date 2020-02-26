<script>
import FlipCountdown from "../components/FlipCountdown.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "PageTemp",
  components: { FlipCountdown, Footer },
  data() {
    return {};
  }
};
</script>

<template>
  <q-page class="flex flex-center">
    <video autoplay loop muted id="background" class="background">
      <source src="statics/piano/piano.mp4" type="video/mp4" />
      <source src="statics/piano/piano.webm" type="video/webm" />
      <source src="statics/piano/piano.ogv" type="video/ogg" />
    </video>
    <div class="bgimg">
      <div class="topleft">
        <p><q-icon name="img:statics/logo.svg" /></p>
      </div>
      <div class="middle">
        <h1>Сайт находится в разработке</h1>
        <hr />
        <h6>Осталось:</h6>
        <FlipCountdown class="flip-countdown" deadline="2020-03-01 00:00:00" />
      </div>
      <div class="bottomleft">
        <a href="tel:+375257972452">+375 25 797-24-52</a>
      </div>
    </div>
    <Footer />
  </q-page>
</template>

<style lang="scss" scoped>
.background {
  background-color: $primary;
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translateX(-50%) translateY(-50%);
  @include at-break($break--base) {
    display: block;
  }
}
.bgimg {
  background-color: #0404044d;
  width: 100%;
  min-height: 100vh;
  color: white;
  font-size: 25px;
}
.topleft {
  position: absolute;
  top: 0;
  left: 16px;
  @include under-break($break--base) {
    font-size: 40px;
    left: 0;
  }
  img {
    font-size: 15rem;
    @include under-break($break--base) {
      font-size: 11rem;
    }
  }
}
.bottomleft {
  position: absolute;
  bottom: 0;
  left: 16px;
}
.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
h1 {
  margin-top: $spacer * 4;
}
h6 {
  margin-top: $spacer / 4;
  margin-bottom: $spacer / 4;
}

hr {
  margin: auto;
  width: 40%;
}
.flip-countdown {
}
</style>
