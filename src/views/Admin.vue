<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout" v-if="!checkLogin" id="login">
          <div
            class="
              md-layout-item
              md-size-50
              md-small-size-100
              md-xsmall-size-100
              md-medium-size-50
              mx-auto
            "
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Halaman Admin</h4>
              <md-button
                slot="buttons"
                href="https://api.whatsapp.com/send?phone=6289637824843&text=saya ingin dapat akses admin"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-whatsapp"></i>
                <md-tooltip md-direction="left"
                  >Minta akses (Fajrul)</md-tooltip
                >
              </md-button>
              <p slot="description" class="description">
                Login untuk mengakses fitur yang hanya bisa ditambahkan oleh
                admin
              </p>

              <div slot="inputs-full">
                <md-field>
                  <md-icon>login</md-icon>
                  <label>Admin ID</label>
                  <md-input v-model="id"></md-input>
                </md-field>
                <md-field>
                  <md-icon>password</md-icon>
                  <label>Password</label>
                  <md-input v-model="pass" type="password"></md-input>
                </md-field>
              </div>
              <div slot="inputs-right">
                <md-button
                  class="md-primary md-block"
                  :disabled="isExist"
                  @click="checkLogin = !checkLogin"
                  >Login</md-button
                >
              </div>
            </login-card>
          </div>
        </div>

        <div class="main main-raised md-layout" v-if="checkLogin" id="admin">
          <div class="md-layout-item md-size-80 mx-auto md-small-size-100">
            <div class="section text-center">
              <h2 class="md-title text-success ">Admin Page</h2>
              <small class="md-body-1"
                >Dashboard yang hanya bisa diakses oleh admin</small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
    // Tabs,
  },
  data() {
    return {
      id: null,
      pass: null,
      account: [{ id: "admin", pass: "admin" }],
      checkLogin: false
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg4.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    isExist() {
      return this.account.some(
        item => (item.id !== this.id) | (item.pass !== this.pass)
      );
    }
  }
};
</script>

<style></style>
