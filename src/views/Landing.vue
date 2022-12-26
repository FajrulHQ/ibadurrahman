<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="
              md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100
            "
          >
            <!-- <h1 class="title">Ibadurrahman</h1>
            <h4>
              Lembaga Amil Zakat dan Nazhir Wakaf Ibadurrahman
            </h4> -->
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <md-button href="#/donasi" class="md-white md-lg"
              ><i class="fas fa-coins"></i>Donasi</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section text-center" id="article">
        <h2 class="md-title text-success">Artikel</h2>
        <small class="md-body-1">Ada info apa ni di Ibadurrahman</small>
        <simple-table table-header-color="green"></simple-table>
      </div>

      <div class="section">
        <nav-pills></nav-pills>
      </div>

      <div class="section text-center" id="gerai">
        <div class="container">
          <h2 class="md-title text-success">Layanan</h2>
          <small class="md-body-1">Kami siap layani zakatmu</small>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <md-card class="md-card-plain">
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="1:1">
                      <img
                        :src="geraiImg1"
                        alt="Gerai Batin Solapan"
                        class="img-raised rounded"
                        style="
                          object-fit: cover;
                          width: 100%;
                          height: 45vh;
                          max-width: 45vh;
                        "
                      />
                    </md-card-media>

                    <md-card-area>
                      <md-button
                        href="https://wa.me/+6282285099993"
                        class="md-simple md-primary"
                      >
                        <md-icon>whatsapp</md-icon>
                      </md-button>
                    </md-card-area>
                  </md-card-media-cover>

                  <md-card-content>
                    <a class="card-title">Gerai Batin Solapan</a><br />
                    <small>
                      Jl. Lintas Duri-Dumai KM 19 Madjid Al-Hidayah
                    </small>
                  </md-card-content>
                </md-card>
              </div>

              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <md-card class="md-card-plain">
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="1:1">
                      <img
                        :src="geraiImg2"
                        alt="Gerai Pinggir"
                        class="img-raised rounded"
                        style="
                          object-fit: cover;
                          width: 100%;
                          height: 45vh;
                          max-width: 45vh;
                        "
                      />
                    </md-card-media>

                    <md-card-area>
                      <md-button
                        href="https://wa.me/+6282160911117"
                        class="md-simple md-primary"
                      >
                        <md-icon>whatsapp</md-icon>
                      </md-button>
                    </md-card-area>
                  </md-card-media-cover>

                  <md-card-content>
                    <a class="card-title">Gerai Pinggir</a><br />
                    <small>
                      Jl. Batin Mojolelo sebelah Masjid Raya Pinggir
                    </small>
                  </md-card-content>
                </md-card>
              </div>

              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <md-card class="md-card-plain">
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="1:1">
                      <img
                        :src="geraiImg3"
                        alt="Gerai Talang Mandau"
                        class="img-raised rounded"
                        style="
                          object-fit: cover;
                          width: 100%;
                          height: 45vh;
                          max-width: 45vh;
                        "
                      />
                    </md-card-media>

                    <md-card-area>
                      <md-button
                        href="https://wa.me/+6281268666129"
                        class="md-simple md-primary"
                      >
                        <md-icon>whatsapp</md-icon>
                      </md-button>
                    </md-card-area>
                  </md-card-media-cover>

                  <md-card-content>
                    <a class="card-title">Gerai Talang Mandau</a><br />
                    <small>
                      Jl. Sultan Syarif Kasim RT/RW 003/004 Srewangi
                    </small>
                  </md-card-content>
                </md-card>
              </div>

              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <md-card class="md-card-plain">
                  <md-card-media-cover md-solid>
                    <md-card-media md-ratio="1:1">
                      <img
                        :src="geraiImg4"
                        alt="Gerai Sei Meranti"
                        class="img-raised rounded"
                        style="
                          object-fit: cover;
                          width: 100%;
                          height: 45vh;
                          max-width: 45vh;
                        "
                      />
                    </md-card-media>

                    <md-card-area>
                      <md-button
                        href="https://wa.me/+6282284796989"
                        class="md-simple md-primary"
                      >
                        <md-icon>whatsapp</md-icon>
                      </md-button>
                    </md-card-area>
                  </md-card-media-cover>

                  <md-card-content>
                    <a class="card-title">Gerai Sei Meranti</a><br />
                    <small>Depan Masjid Arridho Sei Meranti</small>
                  </md-card-content>
                </md-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavPills from "./components/NavPillsSection";
import { SimpleTable } from "@/components";

export default {
  components: {
    NavPills,
    SimpleTable
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg3.jpg")
    },
    geraiImg1: {
      type: String,
      default: require("@/assets/img/faces/gerai-batin-solapan.jpg")
    },
    geraiImg2: {
      type: String,
      default: require("@/assets/img/faces/gerai-pinggir.jpg")
    },
    geraiImg3: {
      type: String,
      default: require("@/assets/img/faces/gerai-srewangi.jpg")
    },
    geraiImg4: {
      type: String,
      default: require("@/assets/img/faces/gerai-sukamaju.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
