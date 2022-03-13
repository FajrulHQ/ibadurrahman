<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <md-button
          v-if="!showDownload"
          href="#/donasi"
          class="md-success md-round md-sm"
        >
          <md-icon>favorite</md-icon>Mari Berbagi..</md-button
        >

        <md-button
          v-if="showDownload"
          href="#/"
          class="md-white md-round md-sm"
        >
          <md-icon>house</md-icon>Home</md-button
        >
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="javascript:void(0)"
                  class="
                    md-list-item-router md-list-item-container md-button-clean
                    dropdown
                  "
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="
                          md-button md-button-link md-white md-simple
                          dropdown-toggle
                        "
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">person</i>
                        <p>Tentang Kami</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/">
                            <i class="material-icons">lightbulb</i>
                            <p>Visi dan Misi</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/">
                            <i class="material-icons">handshake</i>
                            <p>Salam Sapa</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/">
                            <i class="material-icons">groups</i>
                            <p>Struktur Organisasi</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/#program">
                            <i class="material-icons">view_module</i>
                            <p>Program</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/#article">
                            <i class="material-icons">newspaper</i>
                            <p>Artikel</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement()"
                v-if="showDownload"
              >
              </md-list-item>

              <li class="md-list-item" v-else>
                <a
                  href="javascript:void(0)"
                  class="
                    md-list-item-router md-list-item-container md-button-clean
                    dropdown
                  "
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="
                          md-button md-button-link md-white md-simple
                          dropdown-toggle
                        "
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>Layanan</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/donasi/">
                            <i class="material-icons">add_reaction</i>
                            <p>Donasi</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/#gerai">
                            <i class="material-icons">holiday_village</i>
                            <p>Gerai</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <md-list-item href="mailto:upz.ibad@yahoo.com" target="_blank">
                <i class="fa fa-envelope-open"></i>
                <p class="hidden-lg">yahoo</p>
                <md-tooltip md-direction="bottom">Email</md-tooltip>
              </md-list-item>
              <md-list-item
                href="https://www.facebook.com/lazibad/"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom">Facebook</md-tooltip>
              </md-list-item>
              <md-list-item
                href="https://www.instagram.com/lazlnwibadurrahman"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="hidden-lg">Instagram</p>
                <md-tooltip md-direction="bottom">Instagram</md-tooltip>
              </md-list-item>
              <md-list-item
                href="https://api.whatsapp.com/send?phone=628981234567&text=Assalamualaikum.."
                target="_blank"
              >
                <i class="fab fa-whatsapp"></i>
                <p class="hidden-lg">Whatsapp</p>
                <md-tooltip md-direction="bottom">Whatsapp</md-tooltip>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu,
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
        ].includes(value);
      },
    },
    colorOnScroll: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every((r) => r !== this.$route.name);
    },
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>
