<script>
import { cassetteData } from "../statics/js/data.js";

export default {
  name: "PageStudents",
  meta: {
    // sets document title
    title: "our students",
    titleTemplate: title => `Cassette-${title}`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "Такие разные, по-своему уникальные и успешные ученики Cassette studio"
      },
      keywords: { name: "keywords", content: "Cassette студия" }
    }
  },
  data() {
    return {
      students: cassetteData.students
    };
  }
};
</script>

<template>
  <div class="students-page flex flex-center">
    <router-link class="call-to-home" :to="{ name: 'main' }">
      На главную <span class="add-sep"></span
    ></router-link>
    <div class="row">
      <div class="col-lg-12">
        <h3 class="header3">Наши Ученики</h3>
        <p>
          Давно мечтаешь научиться играть на музыкальном инструменте? Хочешь
          научится петь как профессиональный исполнитель? Музыкальная студия
          Cassette - это уютное место в центре Минска с профессиональными
          педагогами и необходимым музыкальным оборудованием. Наши ученики уже
          поют и играют на сцене. Не теряй ни минуты!
        </p>
      </div>
    </div>
    <div class="project-gal-wrap">
      <figure
        v-for="(student, index) in students"
        class="student-section"
        :key="`student-${index}`"
      >
        <div
          :style="`background-image: url(${student.imgSrc})`"
          class="img-responsive"
        ></div>
        <h6 class="description">{{ student.name }} {{ student.surname }}</h6>
        <p class="about-student">
          {{ student.description }}
        </p>
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.students-page {
  color: white;
  position: relative;
  background: $dark;
  padding: $spacer * 4 $spacer * 1.5 $spacer;
  @include at-break($break--base) {
  }
  .call-to-home {
    top: $spacer * 2;
    left: 0;
    font-size: 14px;
    text-transform: capitalize;
    color: #fff;
    position: absolute;
    z-index: 11;
    transform: rotate(-90deg);
    transition: all 0.6s ease-in-out;
    .add-sep {
      display: block;
      position: relative;
      background: #fff none repeat scroll 0 0;
      height: 2px;
      text-align: center;
      width: 90%;
      transition: all 0.3s ease-in-out 0s;
    }
  }
  .project-gal-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-top: $spacer;
    .student-section {
      width: 100%;
      @include at-break($break--base) {
        width: 48%;
      }
      .img-responsive {
        background-size: cover;
        margin-bottom: $spacer/2;
        background-position: center;
        transition: all 400ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
        width: 100%;
        height: 90vw;
        @include at-break($break--base) {
          height: 50vw;
        }
      }
      .description {
        margin-bottom: $spacer/3;
      }
      .about-student {
        margin-bottom: $spacer;
      }
    }
  }
}
</style>
