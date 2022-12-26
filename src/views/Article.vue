<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-80 mx-auto md-small-size-100">
              <div class="profile">
                <div class="image">
                  <img
                    :src="require(`@/assets/img/articles/${article.img}`)"
                    :alt="article - link"
                    class="img-raised rounded img-fluid"
                    style="
                      margin-top: 20vh;
                      margin-bottom: -10vh;
                      object-fit: cover;
                      width: 100%;
                      height: 70vh;
                      max-width: 150vh;
                    "
                  />
                </div>
                <div class="name">
                  <a :href="`#/article/${article.link}`" class="md-title">{{
                    article.title
                  }}</a>
                  <h6>
                    {{ moment(article.date).format("DD MMMM YYYY - hh.mm A") }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="description">
            <p
              style="
                text-align: justify;
                text-justify: inter-word;
                text-indent: 3em;
              "
            >
              {{ article.content }}
            </p>
          </div>

          <div class="section text-center" :id="article.link">
            <h2 class="md-title text-success">______________</h2>
            <br /><br /><br /><br />
            <small class="md-body-1"
              >Ga cuma itu, ada informasi lainnya juga lhoo..</small
            >
          </div>
          <div class="md-layout-item md-size-30 mx-auto md-small-size-100">
            <md-card>
              <carousel
                :per-page="1"
                loop
                :speed="700"
                autoplay
                :autoplay-timeout="5000"
                :mouse-drag="false"
                navigationEnabled
                navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
              >
                <slide
                  v-for="(content, id) in filteredArticle.slice(0, 5)"
                  :key="id"
                >
                  <div class="carousel-caption gradation">
                    <h5 style="margin: 0vh 2vh -2vh 2vh">
                      {{ content.title }}
                    </h5>
                  </div>
                  <img
                    :src="require(`@/assets/img/articles/${content.img}`)"
                    :alt="content.link"
                    style="object-fit: cover; height: 100%; min-height: 60vh"
                  />
                  <md-button
                    class="md-success md-sm md-block"
                    style="margin-top: -5vh"
                    :href="`#/article/${content.link}`"
                    >Baca Selengkapnya.. <md-icon>read_more</md-icon></md-button
                  >
                </slide>
              </carousel>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceArticle from "@/static/article.json";
import moment from "moment";

export default {
  bodyClass: "profile-page",
  data() {
    return {
      moment: moment,
      allArticle: sourceArticle
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    article() {
      return sourceArticle.find(
        article => article.link === this.$route.params.id
      );
    },
    filteredArticle() {
      return this.allArticle.filter(
        content => content.link !== this.$route.params.id
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.gradation {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  padding-top: 40vh;
}
</style>
