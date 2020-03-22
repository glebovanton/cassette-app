<script>
import axios from "axios";

export default {
  name: "CassetteForm",
  data() {
    return {
      name: null,
      email: null,
      message: null,
      subject: "Заказ с Cassette.by"
    };
  },

  methods: {
    cleanForm() {
      this.name = null;
      this.email = null;
      this.message = null;
      this.$refs.cassetteForm.focus();
      this.$refs.cassetteForm.resetValidation();
    },
    onSubmit() {
      if (!this.email) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Пожалуйста, не отправляйте пустое сообщение"
        });
      } else {
        const dataString =
          "name=" +
          this.name +
          "&email=" +
          this.email +
          "&subject=" +
          this.subject +
          "&message=" +
          this.message;

        axios
          .post("sendmail.php", dataString)
          .then(response => {
            console.log(response);
            console.log("отправлено");
            this.cleanForm();
          })
          .catch(error => {
            console.log(error);
          });

        // $.ajax({
        //   type: "POST",
        //   url: "sendmail.php",
        //   data: dataString,
        //   success: () => {
        //     this.cleanForm();
        //     console.log("отправлено");
        //   }
        // });
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "check_circle_outline",
          message: "Отправлено"
        });
      }
    }
  }
};
</script>

<template>
  <div
    class="cassette-form q-pa-md"
    style="max-width: 400px"
    ref="cassetteFormWrap"
  >
    <q-form
      greedy
      class="q-gutter-md"
      ref="cassetteForm"
      @submit.prevent="onSubmit"
    >
      <q-input
        dark
        v-model="name"
        label="Ваше имя *"
        hint=""
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Поле не может быть пустым']"
        ref="nameField"
      />
      <q-input
        dark
        v-model="email"
        label="Ваш телефон или почта *"
        hint=""
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Поле не может быть пустым']"
      />
      <q-input
        dark
        v-model="message"
        label="Сообщение *"
        type="textarea"
        hint=""
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Поле не может быть пустым']"
      />
      <button type="submit" class="btn btn-default">
        <span class="mask"></span>
        Записаться
      </button>
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
.cassette-form {
  .btn {
    margin-top: 18px;
    padding: 6px 55px;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    overflow: hidden;
    position: relative;
    text-transform: uppercase;
    border: 2px solid #fff;
    border-radius: 0;
    height: 57px;
    background: transparent;
    box-shadow: none;
    transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    &:hover {
      border-color: #fff;
      color: #000;
      .mask {
        width: 100%;
      }
    }
    .mask {
      background: #fff;
      width: 0;
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      z-index: -1;
      transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
  }
}
</style>
