<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="
              md-layout-item
              md-size-70
              md-small-size-100
              md-xsmall-size-140
              md-medium-size-80
              mx-auto
            "
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">
                Portal Donasi Ibadurrahman
              </h4>
              <md-button
                slot="buttons"
                href="https://api.whatsapp.com/send?phone=6282391400366&text=Assalamualaikum wr.wb., saya ingin jemput wakaf/ziswaf"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-whatsapp"></i>
                <md-tooltip md-direction="left"
                  >Jemput Zakat / Ziswaf <br />(08.00-16.00)</md-tooltip
                >
              </md-button>
              <md-button
                slot="buttons"
                href="https://api.whatsapp.com/send?phone=6281275753275&text=Assalamualaikum wr.wb., saya ingin jemput wakaf/ziswaf"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-whatsapp"></i>
                <md-tooltip md-direction="right"
                  >Konsultasi Zakat / Ziswaf</md-tooltip
                >
              </md-button>
              <p slot="description" class="description">
                Fasilitas pembayaran di Ibadurrahman telah menyediakan mesin EDC
                di kantor pelayanan bagi yang tidak ingin repot tarik tunai.
                <br />Kami juga memiliki layanan auto debet di Bank Mandiri dan
                BSI serta mesin penghitung uang untuk menghindari adanya uang
                palsu
              </p>
              <!-- left content -->
              <left slot="inputs-left">
                <h6>donatur</h6>
                <md-field class="validate">
                  <md-icon>waving_hand</md-icon>
                  <md-select
                    md-dense
                    v-model="called"
                    name="called"
                    id="called"
                    placeholder="   Sapaan"
                  >
                    <md-option value="Bapak">Bapak</md-option>
                    <md-option value="Ibu">Ibu</md-option>
                    <md-option value="Saudara">Saudara</md-option>
                  </md-select>
                </md-field>
                <md-field class="validate">
                  <md-icon>face</md-icon>
                  <label>Nama Lengkap..</label>
                  <md-input v-model="fullname"></md-input>
                </md-field>
                <md-field class="validate">
                  <md-icon>email</md-icon>
                  <label>Email...</label>
                  <md-input v-model="email" type="email"></md-input>
                  <span class="md-suffix">@gmail.com</span>
                </md-field>
                <md-field class="validate">
                  <md-icon>phone</md-icon>
                  <label>Telepon/HP...</label>
                  <md-input v-model="phone"></md-input>
                </md-field>
              </left>

              <!-- right content -->
              <right slot="inputs-right">
                <h6>pilihan donasi</h6>
                <md-field v-show="fullname.length" class="validate">
                  <!-- <md-icon>money</md-icon> -->
                  <label>Jumlah uang yang ingin didonasikan...</label>
                  <span class="md-prefix"><b>Rp.</b></span>
                  <md-input v-model="amount"></md-input>
                </md-field>
                <md-field v-show="amount.length" class="validate">
                  <md-icon>dashboard</md-icon>
                  <md-select
                    md-dense
                    v-model="selectionType"
                    name="selectionType"
                    id="selectionType"
                    placeholder="   Jenis Donasi.."
                  >
                    <md-option
                      v-for="(type, idx) in donationType"
                      :value="idx"
                      :key="idx"
                    >
                      {{ type }}
                    </md-option>
                  </md-select>
                </md-field>
                <md-field v-show="amount.length" class="validate">
                  <md-icon>list</md-icon>
                  <md-select
                    md-dense
                    v-model="selectionDetail"
                    name="selectionDetail"
                    id="selectionDetail"
                    placeholder="   Rincian Donasi.."
                  >
                    <md-option
                      v-for="(detail, idx) in donationDetail[selectionType]"
                      :value="detail"
                      :key="idx"
                    >
                      {{ detail }}
                    </md-option>
                  </md-select>
                </md-field>

                <div>
                  <md-dialog :md-active.sync="showDialog">
                    <md-dialog-title>Pembayaran</md-dialog-title>

                    <tabs
                      :tab-active="1"
                      :tab-name="['Mandiri', 'BSI']"
                      plain
                      color-button="info"
                    >
                      <!-- here you can add your content for tab-content -->
                      <div class="container" slot="tab-pane-1">
                        <action>
                          <div
                            class="alert alert-warning"
                            v-if="selectionType === null"
                          >
                            <div class="container">
                              <div class="alert-icon">
                                <md-icon>warning</md-icon>
                              </div>
                              <b> WARNING ALERT </b>: Silahkan isi form dengan
                              lengkap terlebih dahulu.
                            </div>
                          </div>

                          <div v-else>
                            <div class="alert alert-success">
                              <div class="container">
                                <div class="alert-icon">
                                  <md-icon>task_alt</md-icon>
                                </div>
                                {{ called }}. {{ fullname }} donasi
                                {{ donationType[selectionType] }} yang ditujukan
                                untuk {{ selectionDetail }} dapat ditransfer
                                sejumlah
                                <b>{{
                                  Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR"
                                  }).format(amount)
                                }}</b>
                                melalui
                                <b
                                  >Bank Mandiri -
                                  {{ donationPayment[selectionType][0].num }}
                                  a.n. LAZ IBADURRAHMAN
                                </b>
                              </div>
                            </div>

                            <md-button
                              class="md-simple md-block md-success"
                              :href="
                                'https://api.whatsapp.com/send?phone=6281275753275&text=Assalamualaikum wr.wb, saya ' +
                                  fullname +
                                  ' ingin mengkonfirmasi terkait donasi ' +
                                  donationType[selectionType] +
                                  ' sejumlah Rp. ' +
                                  amount +
                                  ', berikut bukti transfer saya ke rekening Mandiri LAZ Ibadurrahman.'
                              "
                              ><md-icon>whatsapp</md-icon> konfirmasi melalui
                              whatsapp</md-button
                            >
                          </div>
                        </action>
                      </div>
                      <div class="container" slot="tab-pane-2">
                        <action>
                          <div
                            class="alert alert-warning"
                            v-if="selectionType === null"
                          >
                            <div class="container">
                              <div class="alert-icon">
                                <md-icon>warning</md-icon>
                              </div>
                              <b> WARNING ALERT </b>: Silahkan isi form dengan
                              lengkap terlebih dahulu.
                            </div>
                          </div>

                          <div
                            class="alert alert-info"
                            v-else-if="
                              donationPayment[selectionType].length < 2
                            "
                          >
                            <div class="container">
                              <div class="alert-icon">
                                <md-icon>info_outline</md-icon>
                              </div>
                              <b> INFO ALERT </b>: Saat ini belum ada rekening
                              untuk pembayaran ini.
                            </div>
                          </div>

                          <div v-else>
                            <div class="alert alert-success">
                              <div class="container">
                                <div class="alert-icon">
                                  <md-icon>task_alt</md-icon>
                                </div>
                                {{ called }}. {{ fullname }} donasi
                                {{ donationType[selectionType] }} yang ditujukan
                                untuk {{ selectionDetail }} dapat ditransfer
                                sejumlah
                                <b
                                  >Rp.
                                  {{
                                    Intl.NumberFormat("id-ID", {
                                      style: "currency",
                                      currency: "IDR"
                                    }).format(amount)
                                  }}</b
                                >
                                melalui
                                <b
                                  >Bank BSI -
                                  {{ donationPayment[selectionType][1].num }}
                                  a.n. LAZ IBADURRAHMAN
                                </b>
                              </div>
                            </div>
                            <md-button
                              class="md-simple md-block md-success"
                              :href="
                                'https://api.whatsapp.com/send?phone=6281275753275&text=Assalamualaikum wr.wb, saya ' +
                                  fullname +
                                  ' ingin mengkonfirmasi terkait donasi ' +
                                  donationType[selectionType] +
                                  ' sejumlah Rp. ' +
                                  amount +
                                  ', berikut bukti transfer saya ke rekening BSI LAZ Ibadurrahman.'
                              "
                              ><md-icon>whatsapp</md-icon> konfirmasi melalui
                              whatsapp</md-button
                            >
                          </div>
                        </action>
                      </div>
                    </tabs>

                    <md-button
                      class="md-simple md-danger md-block"
                      @click="showDialog = false"
                      ><md-icon>close</md-icon></md-button
                    >
                  </md-dialog>
                </div>
              </right>

              <!-- submit button -->
              <md-button
                :disabled="!amount.length"
                slot="footer"
                @click="showDialog = true"
                class="md-simple md-success md-lg md-block"
              >
                Donasi
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import { Tabs } from "@/components";

let type = ["Zakat", "Infaq", "DDS", "Wakaf", "Rumah Yatim"];
let detail = [
  [
    "Zakat Fitrah",
    "Zakat Penghasilan",
    "Zakat Perdagangan",
    "Zakat Pertanian",
    "Zakat Emas dan Perak",
    "Zakat Investasi",
    "Zakat Tabungan",
    "Zakat Rikaz"
  ],
  ["Shadaqah", "Bantuan Kemanusiaan", "Bantuan Berupa Barang"],
  ["DDS"],
  [
    "Perkebunan",
    "Tiketing dan travel",
    "Warung Maqdis",
    "Maqdis",
    "IDBS",
    "Koperasi Syari'ah",
    "Ma'had Alqur'an Tahfidz Belading",
    "TK Maqdis",
    "SDIT Maqdis",
    "Catering LNW",
    "Laundry LNW",
    "Depot Air Minum AMI",
    "Renovasi rumah Singgah Pekanbaru",
    "Alqur'an dan Iqro'"
  ],
  ["Rumah Yatim"]
];
let payment = [
  [
    { name: "Mandiri", num: "172-00-0029905-9", img: "mandiri.png" },
    { name: "BSI", num: "7099887782", img: "bsi.png" }
  ],
  [
    { name: "Mandiri", num: "172-00-0029903-4", img: "mandiri.png" },
    { name: "BSI", num: "7099887798", img: "bsi.png" }
  ],
  [{ name: "Mandiri", num: "172-00-0029900-0", img: "mandiri.png" }],
  [
    { name: "Mandiri", num: "172-00-0029896-0", img: "mandiri.png" },
    { name: "BSI", num: "7099885593", img: "bsi.png" }
  ],
  [
    { name: "Mandiri", num: "172-00-0029896-0", img: "mandiri.png" },
    { name: "BSI", num: "7099885593", img: "bsi.png" }
  ]
];

export default {
  components: {
    LoginCard,
    Tabs
  },
  bodyClass: "login-page",
  data() {
    return {
      donationType: type,
      donationDetail: detail,
      donationPayment: payment,
      showDialog: false,
      fullname: "",
      email: "",
      phone: "",
      called: "",
      amount: "",
      selectionType: null,
      selectionDetail: null
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg2.jpg")
    },
    bsi: {
      type: String,
      default: require("@/assets/img/payment/bsi.png")
    },
    mandiri: {
      type: String,
      default: require("@/assets/img/payment/mandiri.png")
    }
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

<style lang="css"></style>
