<script>
import CassetteForm from "../components/CassetteForm.vue";

export default {
  name: "PageRight",
  components: {
    CassetteForm
  },
  props: {
    isContactsOpened: {
      type: Boolean
    }
  },
  data() {
    return {
      cassetteAddress: "г.Минск, ул. Улица 1",
      cassetteMail: "workglebov@gmail.com",
      cassettePhone: "+375 (29) 390-53-54"
    };
  },
  methods: {
    digitalize(value) {
      return value ? value.trim().replace(/\D/g, "") : "";
    }
  }
};
</script>

<template>
  <div class="page page-right">
    <section
      class="container-fluid align-center animated  sec-pad"
      :class="{ fadeInRight: isContactsOpened }"
    >
      <h3>Здравствуйте, рады Вас видеть!</h3>
      <p>
        Cassette - уютная студия музыкального обучения в самом центре Минска. Мы
        работаем с 9.00 до 22.00 без выходных!
      </p>
      <p>Запишитесь на пробное занятие, чтобы это проверить!</p>
      <CassetteForm />

      <div class="row">
        <div class="address-detail">
          <div class="col-sm-4 margin-btm-sm">
            <div class="sep-wrap">
              <span class="add-sep"></span>
            </div>
            <span>Адрес</span>
            <p class="value">{{ cassetteAddress }}</p>
          </div>
          <div class="col-sm-4 margin-btm-sm">
            <div class="sep-wrap">
              <span class="add-sep"></span>
            </div>
            <span>Email</span>
            <a class="value" :href="`mailto:${cassetteMail}`">{{
              cassetteMail
            }}</a>
          </div>

          <div class="col-sm-4 margin-btm-sm">
            <div class="sep-wrap">
              <span class="add-sep"></span>
            </div>
            <span>Телефоны</span>
            <a class="value" :href="`callto:${digitalize(cassettePhone)}`">{{
              cassettePhone
            }}</a>
          </div>
        </div>
      </div>
    </section>
    <!--/form sec-->
    <section class="container map-sec">
      <q-img
        src="../statics/img/map.jpg"
        spinner-color="white"
        style="height: 50vh; max-width: 100%"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.page-right {
  padding: $spacer * 3 $spacer * 2;
  color: white;
  h3 {
    font-size: 24px;
    line-height: 35px;
    padding-bottom: 32px;
  }
  .sec-pad {
    .address-detail {
      display: flex;
      margin: $spacer * 2 0 $spacer/2;
      text-align: left;
      overflow: hidden;
      clear: both;
      float: none;
      font-size: 100%;
      vertical-align: baseline;
      .margin-btm-sm {
        position: relative;
        min-height: 1px;
        padding: 0 $spacer/2;
        cursor: pointer;
        &:hover {
          .sep-wrap {
            background: transparent;
            .add-sep {
              width: 100%;
              animation-name: sep-anim;
            }
          }
          span {
            color: #8d8d8d;
          }
        }
        .sep-wrap {
          width: 20px;
          margin-bottom: 12px;
          background: #fff;
          .add-sep {
            display: block;
            height: 2px;
            text-align: center;
            width: 0;
            background: #fff none repeat scroll 0 0;
            transition: width 0.4s ease-in-out;
          }
        }
        span {
          text-transform: capitalize;
          transition: color 0.4s ease-in-out;
          font-weight: lighter;
        }
        .value {
          font-size: 15px;
          line-height: 150%;
          letter-spacing: normal;
          display: block;
          font-weight: bold;
          margin-bottom: 0;
        }
      }
    }
  }
  .map-sec {
    margin-top: $spacer;
  }
}
</style>
