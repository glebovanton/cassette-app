<script>
export default {
  name: "PageLeft",
  props: {
    isInfoOpened: {
      type: Boolean
    },
    students: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      services: [
        {
          name: "Вокал.",
          description:
            "Мы научим вас управлять своим голосом. Вокал для детей 4-7 лет. (Занятие длится 35 минут, и включают в себя развитие правильного дыхания, артикуляции и дикции ребенка. На занятиях по вокалу дети не только осваивают навыки правильного пения, но и развивают чувство ритма, координацию, творческое воображение и память. ) Занятия для взрослых длятся 55 минут. (Во время занятий используется авторская методика. Включающая в себя элементы вокальной йоги, речевых упражнений, массажа мышц речевого и голосового аппаратов, что дает возможность в полной мере раскрыть свой естественный уверенный голос.)"
        },
        {
          name: "Пение в ансамбле.",
          description:
            "Пение в ансамбле способствует развитию гармонического слуха, развивает умение петь многоголосья, подстраивать второй голос, импровизировать. Раскрепощает и придает чувство уверенности, а самое главное дает возможность приятно и полезно провести свободное время в душевном творческом коллективе. Занятия длятся 55 мин, 1 или 2 раза в неделю. Количество участников ансамбля – от 3 до 8 человек."
        },
        {
          name: "Фортепиано.",
          description:
            "Научим играть ваши любимые песни. Результат уже через пару занятий. Фортепиано универсальный инструмент, на котором можно сыграть все что угодно. Обучение для детей от 7 лет и взрослых."
        },
        {
          name: "Гитара.",
          description:
            "Самый популярный инструмент. Стань душой компании вместе с нашей студией. Результат с первого занятия. Обучение детей от 10 лет и взрослых."
        },
        {
          name: "Укулеле.",
          description:
            "Необычный по звучанию и простой в усвоении инструмент станет украшением любой песни, исполняемой в душевной компании. Обучение для детей от 10 лет и взрослых. Результат с первого занятия."
        },
        {
          name: "Аккордеон.",
          description:
            "Универсальный и благородный аккордеон не так прост в освоении, но богат в своем разнообразии возможностей. На этом инструменте можно сыграть все что угодно, начиная от классических произведений, заканчивая популярными хитами в любых жанрах и направления. Освоить данный инструмент можно в нашей студии. Занятия для детей от 12 лет и взрослых."
        },
        {
          name: "Сольфеджио.",
          description:
            "Занятия по сольфеджио дают основу теоретических знаний о законах музыки и практических навыков правильного интонирования и решения гармонических задач. Занятия будут полезны тем, кто собирается поступать в творческие ССУЗы или ВУЗы."
        }
      ]
    };
  }
};
</script>

<template>
  <div class="page page-left">
    <div class="page-inner full-height">
      <!--About Sec-->
      <section
        class="container-fluid align-center text-left animated sec-pad-top about-sec"
        :class="{ fadeInLeft: isInfoOpened }"
        ref="pageLeftAnimated"
      >
        <div class="row">
          <div class="col-lg-12">
            <h3 class="header3">О нас</h3>
            <p class="text1">
              Творчество – это необходимый элемент нашей жизни. Каждый человек
              уникален от природы, неспособных людей нет, и наша студия тому
              доказательство. На уроках по вокалу вы сможете раскрыть свою
              природную свободу голоса, укрепить здоровье и стать уверенным в
              себе. А игра на музыкальных инструментах поможет поверить в свои
              силы и уникальность, развить творческое мышление и стать
              профессиональным музыкантом.
            </p>
            <ul class="event-detail">
              <li
                v-for="(service, index) in services"
                :key="`service-${index}`"
                class="item"
              >
                <span class="icon fa fa-chevron-circle-right"></span>
                <h6 class="header6 title">{{ service.name }}</h6>
                <p class="description">{{ service.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!--/About Sec-->

      <!--Price Sec-->
      <section
        class="container-fluid align-center text-left animated sec-pad-top about-sec"
        :class="{ fadeInLeft: isInfoOpened }"
        ref="pageLeftAnimated"
      >
        <div class="row">
          <div class="col-lg-12">
            <h3 class="header3">Стоимость занятий</h3>
            <div class="devider"></div>
            <p class="text1">
              Пробное занятие – бесплатно!
            </p>
            <div class="event-detail">
              <span class="icon fa fa-chevron-circle-right"></span>
              <p class="title">4 раза в месяц (абонемент) – 80 руб.</p>
            </div>
            <div class="event-detail">
              <span class="icon fa fa-chevron-circle-right"></span>
              <p class="title">8 раз месяц (абонемент) – 140 руб.</p>
            </div>
            <div class="devider"></div>
            <p class="text1">Групповые занятия (пение в ансамбле):</p>
            <div class="event-detail">
              <span class="icon fa fa-chevron-circle-right"></span>
              <p class="title">4 раза в месяц (абонемент) – 60 руб.</p>
            </div>
            <div class="event-detail">
              <span class="icon fa fa-chevron-circle-right"></span>
              <p class="title">8 раз в месяц (абонемент) – 100 руб.</p>
            </div>
          </div>
        </div>
      </section>
      <!--/Price Sec-->

      <!--Team Sec-->
      <section
        class="container-fluid align-center text-left animated sec-pad-top team-sec"
      >
        <div class="row">
          <div class="col-lg-12">
            <h3 class="header3">Наши Педагоги</h3>
            <div class="row minus-margin">
              <div class="col-xs-6 col-lg-4 margin-btm-lg">
                <img
                  class="teacher img-responsive"
                  src="../statics/img/team1.jpg"
                  alt="team"
                />
                <span class="team-per">Светлана Молокова</span>
                <span class="team-desn"
                  >педагог по вокалу, фортепиано, аккордеону</span
                >
                <p class="text1">
                  Два музыкальных образования ( аккомпаниатор (аккордеон,
                  фортепиано) и педагог по вокалу) Авторская методика обучения.
                  За спиной множество международных конкурсов и фестивалей, в
                  том числе и у учеников. Светлана считает, что неспособных
                  людей нет, есть ленивые.
                </p>
                <ul class="team-social">
                  <li>
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fab fa-vk"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fab fa-telegram-plane"></i></a>
                  </li>
                </ul>
              </div>
              <!--              <div class="col-xs-6 col-lg-4 margin-btm-lg">-->
              <!--                <img-->
              <!--                  class="teacher img-responsive"-->
              <!--                  src="../statics/img/team2.jpg"-->
              <!--                  alt="team"-->
              <!--                />-->
              <!--                <span class="team-per">Анна Валицкая</span>-->
              <!--                <span class="team-desn">редагог по гитаре/укулеле</span>-->
              <!--                <p class="text1">-->
              <!--                  Высшее образование. Ученики лауреаты республиканских и-->
              <!--                  международных конкурсов и фестивалей. Сама Анна прекрасный-->
              <!--                  музыкант, владеет многими другими музыкальными инструментами и-->
              <!--                  играет в популярной рок группе.-->
              <!--                </p>-->
              <!--                <ul class="team-social">-->
              <!--                  <li>-->
              <!--                    <a href=""><i class="fab fa-facebook-f"></i></a>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <a href=""><i class="fab fa-vk"></i></a>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <a href=""><i class="fab fa-instagram"></i></a>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <a href=""><i class="fab fa-telegram-plane"></i></a>-->
              <!--                  </li>-->
              <!--                </ul>-->
              <!--              </div>-->
              <div class="col-xs-6 col-lg-4 margin-btm-lg margin-bottom-0">
                <img
                  class="teacher img-responsive"
                  src="../statics/img/team2.jpg"
                  alt="team"
                />
                <span class="team-per">Анна Валицкая</span>
                <span class="team-desn">педагог по гитаре/укулеле</span>
                <p class="text1">
                  Высшее образование. Ученики лауреаты республиканских и
                  международных конкурсов и фестивалей. Сама Анна прекрасный
                  музыкант, владеет многими другими музыкальными инструментами и
                  играет в популярной рок группе.
                </p>
                <ul class="team-social">
                  <li>
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fab fa-vk"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fab fa-telegram-plane"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--/Team Sec-->
      <!--Projects Sec-->
      <section
        class="container-fluid align-center text-left animated sec-pad-top students"
      >
        <div class="row">
          <div class="col-lg-12">
            <h3 class="header3">Наши Ученики</h3>
            <router-link class="more-details" :to="{ name: 'students' }"
              >Подробнее</router-link
            >
            <p>
              Творческий - значит уникальный. Каждый человек имеет способности к
              творчеству, и наши ученики тому подтверждение. Такие разные,
              по-своему уникальные и успешные ученики Cassette studio.
            </p>
          </div>
        </div>
        <div class="project-gal-wrap">
          <div class="project-gallery row minus-margin">
            <figure
              v-for="(student, index) in students"
              class="col-sm-6 margin-btm-lg"
              :key="`student-${index}`"
            >
              <img
                class="img-responsive student"
                :src="student.imgSrc"
                alt="student image "
              />
              <p>
                <strong>{{ student.name }}</strong>
              </p>
              <p itemprop="caption description">
                {{ student.teaser }}
              </p>
            </figure>
          </div>
        </div>
      </section>
      <!--/Projects Sec-->

      <!--Client Sec-->
      <section
        class="client-sec container-fluid align-center text-left animated sec-pad-top-sm sec-pad-bottom padding-btm-xs-0"
      >
        <div class="row">
          <div class="col-lg-12">
            <h3 class="header3">Наши партнёры</h3>
            <div class="row">
              <div class="col-sm-3 col-xs-6">
                <img
                  class="img-responsive"
                  src="../statics/img/client1.svg"
                  alt="client"
                />
              </div>
              <div class="col-sm-3 col-xs-6">
                <img
                  class="img-responsive"
                  src="../statics/img/client2.svg"
                  alt="client"
                />
              </div>
              <div class="col-sm-3 col-xs-6">
                <img
                  class="img-responsive"
                  src="../statics/img/client3.png"
                  alt="client"
                />
              </div>
              <div class="col-sm-3 col-xs-6">
                <img
                  class="img-responsive"
                  src="../statics/img/client4.png"
                  alt="client"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--/Client Sec-->
    </div>
  </div>
</template>

<style lang="scss">
ul {
  list-style: none;
}

.page-left {
  min-height: 100%;
  .page-inner {
    section {
      padding: $spacer / 2 $spacer * 1.5;
      .more-details {
        text-decoration: underline;
        margin-bottom: 26px;
        font-weight: 400;
        line-height: 2.5;
      }
    }
    .small-hr {
      margin-top: 9px;
      margin-bottom: 23px;
    }
    .client-sec {
      .col-sm-3 {
        text-align: center;
        img {
          display: inline-block;
        }
      }
    }
  }
}
.img-responsive {
  width: 100%;
  object-fit: cover;
  transition: 0.7s ease-in-out;
  &.teacher {
    height: 41vw;
    max-height: 300px;
    //object-position: 20% 10px;
    @include at-break($break--base) {
      filter: grayscale(100%);
      &:hover {
        filter: none;
      }
      //-webkit-filter: grayscale(100%);
    }
  }
  &.student {
    height: 64vw;
    max-height: 300px;
    @include at-break($break--base) {
      height: 34vw;
      filter: grayscale(100%);
      &:hover {
        filter: none;
      }
    }
  }
}
.minus-margin {
  margin-left: -$spacer/2;
  margin-right: -$spacer/2;
}
.row {
  .margin-btm-lg {
    padding: $spacer/2 $spacer/2 0;
  }
}

.page-left .page-inner .about-sec .about-icon-wrap span {
  display: block;
}
.page-left .page-inner .about-sec .about-icon-wrap span.key-fact {
  font-size: 16px;
  color: #000;
  text-transform: capitalize;
  margin-bottom: 14px;
  margin-top: 25px;
}
.page-left .page-inner .about-sec .about-icon-wrap .icon {
  color: #c6b6a1;
  font-size: 48px;
}
.page-left .page-inner .team-sec span {
  display: block;
}
.page-left .page-inner .team-sec .team-per {
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 3px;
}
.page-left .page-inner .team-sec .team-desn {
  font-size: 12px;
  color: #8d8d8d;
  text-transform: capitalize;
  margin-bottom: 17px;
}
.page-left .page-inner .team-sec .team-social {
  float: left;
}
.page-left .page-inner .team-sec .team-social li {
  margin-right: 12px;
  float: left;
}
.page-left .page-inner .team-sec .team-social li a i {
  color: #fff;
  font-size: 12px;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.page-left .page-inner .team-sec .team-social li a:hover i {
  color: #8d8d8d;
}
.page-left .page-inner .project-gal-wrap {
  margin-top: 60px;
}
.page-left .page-inner .pswp__caption__center {
  display: none;
}
.page-left .page-inner figure figcaption {
  font-size: 12px;
  text-transform: capitalize;
  color: #8d8d8d;
}
.page-left .page-inner figure a {
  display: block;
  overflow: hidden;
  position: relative;
}
.page-left .page-inner figure a .hover {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.page-left .page-inner figure a .hover span {
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: calc(50% - 11px);
}
.page-left .page-inner figure a:hover .hover {
  opacity: 1;
}
.event-detail {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: $spacer/4 0;
  width: 100%;
  .item {
    float: left;
    padding-bottom: 5px;
    width: 100%;
    text-transform: initial;
    &:last-child {
      padding-bottom: 0;
    }
    .title {
      font-size: 16px;
      display: inline-block;
    }
    .description {
      font-size: 14px;
      line-height: 1.2;
      padding-left: $spacer;
    }
  }
  .icon {
    color: #8d8d8d;
    display: inline-block;
    float: left;
    font-size: 16px;
    line-height: 25px;
    padding-top: $spacer/20;
    padding-right: $spacer / 2;
  }
}
.page-left .page-inner .trans-overlay-dark-about {
  background: #fff;
  /* The Fallback */
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>
