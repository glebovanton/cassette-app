<script>
export default {
  name: "PageLeft",
  props: {
    isInfoOpened: {
      type: Boolean
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
            <h3>О нас</h3>
            <p>
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
                <h6 class="title">{{ service.name }}</h6>
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
            <h3>Стоимость занятий</h3>
            <p>
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
            <p>Групповые занятия (пение в ансамбле):</p>
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
            <h3>Наши Педагоги</h3>
            <div class="row minus-margin">
              <div class="col-xs-6 col-lg-4 margin-btm-lg">
                <img
                  class="img-responsive"
                  src="../statics/img/team1.jpg"
                  alt="team"
                />
                <span class="team-per">Джо Гарин</span>
                <span class="team-desn">рок певец</span>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem consequat ipsum.
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
              <div class="col-xs-6 col-lg-4 margin-btm-lg">
                <img
                  class="img-responsive"
                  src="../statics/img/team2.jpg"
                  alt="team"
                />
                <span class="team-per">max tailor</span>
                <span class="team-desn">jazz singer</span>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem consequat ipsum.
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
              <div class="col-xs-6 col-lg-4 margin-btm-lg margin-bottom-0">
                <img
                  class="img-responsive"
                  src="../statics/img/team3.jpg"
                  alt="team"
                />
                <span class="team-per">amanda grey</span>
                <span class="team-desn">voice artist</span>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem consequat ipsum.
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
        class="container-fluid align-center text-left animated sec-pad-top"
      >
        <div class="row">
          <div class="col-lg-12">
            <h3>Наши Ученики</h3>
            <p>
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
              velit.
            </p>
          </div>
        </div>
        <div class="project-gal-wrap">
          <div class="project-gallery row minus-margin">
            <figure class="col-sm-6 margin-btm-lg">
              <a
                href="../statics/img/project1.jpg"
                itemprop="contentUrl"
                data-size="730x490"
              >
                <img
                  class="img-responsive"
                  src="../statics/img/project1.jpg"
                  itemprop="thumbnail"
                  alt="Image description"
                />
                <div class="hover"><span>+</span></div>
              </a>
              <figcaption itemprop="caption description">
                Performance at Berlin
              </figcaption>
            </figure>
            <figure class="col-sm-6 margin-btm-lg">
              <a
                href="../statics/img/project2.jpg"
                itemprop="contentUrl"
                data-size="730x490"
              >
                <img
                  class="img-responsive"
                  src="../statics/img/project2.jpg"
                  itemprop="thumbnail"
                  alt="Image description"
                />
                <div class="hover"><span>+</span></div>
              </a>
              <figcaption itemprop="caption description">
                Rock Band
              </figcaption>
            </figure>
            <figure class="col-sm-6 margin-btm-lg">
              <a
                href="../statics/img/project3.jpg"
                itemprop="contentUrl"
                data-size="730x490"
              >
                <img
                  class="img-responsive"
                  src="../statics/img/project3.jpg"
                  itemprop="thumbnail"
                  alt="Image description"
                />
                <div class="hover"><span>+</span></div>
              </a>
              <figcaption itemprop="caption description">
                Rosted Almonds Album
              </figcaption>
            </figure>
            <figure class="col-sm-6 margin-btm-lg">
              <a
                href="../statics/img/project4.jpg"
                itemprop="contentUrl"
                data-size="730x490"
              >
                <img
                  class="img-responsive"
                  src="../statics/img/project4.jpg"
                  itemprop="thumbnail"
                  alt="Image description"
                />
                <div class="hover"><span>+</span></div>
              </a>
              <figcaption itemprop="caption description">
                The Guitarist
              </figcaption>
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
            <h3>Our Sponsorers</h3>
            <div class="row">
              <div class="col-sm-3 col-xs-6">
                <img
                  class="img-responsive"
                  src="../statics/img/client1.png"
                  alt="client"
                />
              </div>
              <div class="col-sm-3 col-xs-6">
                <img
                  class="img-responsive"
                  src="../statics/img/client2.png"
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
      padding: $spacer / 2 $spacer * 3;
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
  padding-top: 27px;
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
      line-height: 1;
      padding-left: $spacer;
    }
  }
  .icon {
    color: #8d8d8d;
    display: inline-block;
    float: left;
    font-size: 16px;
    line-height: 25px;
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
