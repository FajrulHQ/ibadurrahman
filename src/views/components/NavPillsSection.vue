<template>
  <div class="wrapper">
    <div id="navigation-pills">
      <md-tabs class="md-primary" md-alignment="fixed">
        <md-tab id="tab-home" md-label="LAZ">
          <md-content class="md-padding">
            <div id="program" class="section">
              <h2 class="md-title text-success">Program</h2>
              <small class="md-body-1"
                >Cari tau yuk di LAZ Ibadurrahman ada program apa aja</small
              >
              <tabs
                :tab-name="[
                  'Pendidikan',
                  'Sosial',
                  'Pemberdayaan',
                  'Dakwah',
                  'Kesehatan',
                ]"
                :tab-icon="[
                  'school',
                  'connect_without_contact',
                  'sports_kabaddi',
                  'favorite',
                  'health_and_safety',
                ]"
                plain
                flex-column
                nav-pills-icons
                color-button="warning"
              >
                <!-- here you can add your content for tab-content -->
                <div slot="tab-pane-1" class="full-control">
                  <md-list md-expand-single="true">
                    <md-list-item
                      md-expand
                      v-for="(value, idy) in LAZprogram.pendidikan"
                      :key="idy"
                      class="text-left"
                    >
                      <h6>{{ value.title }}</h6>
                      <small slot="md-expand">{{ value.content }}</small>
                    </md-list-item>
                  </md-list>
                </div>
                <div slot="tab-pane-2" class="full-control">
                  <md-list md-expand-single="true">
                    <md-list-item
                      md-expand
                      v-for="(value, idy) in LAZprogram.sosial"
                      :key="idy"
                      class="text-left"
                    >
                      <h6>{{ value.title }}</h6>
                      <small slot="md-expand">{{ value.content }}</small>
                    </md-list-item>
                  </md-list>
                </div>
                <div slot="tab-pane-3" class="full-control">
                  <md-list md-expand-single="true">
                    <md-list-item
                      md-expand
                      v-for="(value, idy) in LAZprogram.pemberdayaan"
                      :key="idy"
                      class="text-left"
                    >
                      <h6>{{ value.title }}</h6>
                      <small slot="md-expand">{{ value.content }}</small>
                    </md-list-item>
                  </md-list>
                </div>
                <div slot="tab-pane-4" class="full-control">
                  <md-list md-expand-single="true">
                    <md-list-item
                      md-expand
                      v-for="(value, idy) in LAZprogram.dakwah"
                      :key="idy"
                      class="text-left"
                    >
                      <h6>{{ value.title }}</h6>
                      <small slot="md-expand">{{ value.content }}</small>
                    </md-list-item>
                  </md-list>
                </div>
                <div slot="tab-pane-5" class="full-control">
                  <md-list md-expand-single="true">
                    <md-list-item
                      md-expand
                      v-for="(value, idy) in LAZprogram.kesehatan"
                      :key="idy"
                      class="text-left"
                    >
                      <h6>{{ value.title }}</h6>
                      <small slot="md-expand">{{ value.content }}</small>
                    </md-list-item>
                  </md-list>
                </div>
              </tabs>
            </div>
          </md-content>
        </md-tab>

        <md-tab id="tab-pages" md-label="LNW">
          <md-content class="md-padding">
            <div class="section">
              <h2 class="md-title text-success">Program</h2>
              <small class="md-body-1"
                >Cari tau yuk di LNW Ibadurrahman ada program apa aja</small
              >
              <tabs
                :tab-name="['Pendidikan', 'Sosial', 'Ekonomi', 'Dakwah']"
                :tab-icon="[
                  'school',
                  'connect_without_contact',
                  'stacked_bar_chart',
                  'favorite',
                ]"
                plain
                flex-column
                nav-pills-icons
                color-button="warning"
              >
                <!-- here you can add your content for tab-content -->
                <div slot="tab-pane-1" class="full-control">
                  <md-list md-expand-single="true">
                    <md-list-item
                      md-expand
                      v-for="(value, idy) in LNWprogram.pendidikan"
                      :key="idy"
                      class="text-left"
                    >
                      <h6>{{ value.title }}</h6>
                      <small slot="md-expand">{{ value.content }}</small>
                    </md-list-item>
                  </md-list>
                </div>
                <div slot="tab-pane-2" class="full-control">
                  <md-list md-expand-single="true">
                    <md-list-item
                      md-expand
                      v-for="(value, idy) in LNWprogram.sosial"
                      :key="idy"
                      class="text-left"
                    >
                      <h6>{{ value.title }}</h6>
                      <small slot="md-expand">{{ value.content }}</small>
                    </md-list-item>
                  </md-list>
                </div>
                <div slot="tab-pane-3" class="full-control">
                  <md-list md-expand-single="true">
                    <md-list-item
                      md-expand
                      v-for="(value, idy) in LNWprogram.ekonomi"
                      :key="idy"
                      class="text-left"
                    >
                      <h6>{{ value.title }}</h6>
                      <small slot="md-expand">{{ value.content }}</small>
                    </md-list-item>
                  </md-list>
                </div>
                <div slot="tab-pane-4" class="full-control">
                  <md-list md-expand-single="true">
                    <md-list-item
                      md-expand
                      v-for="(value, idy) in LNWprogram.dakwah"
                      :key="idy"
                      class="text-left"
                    >
                      <h6>{{ value.title }}</h6>
                      <small slot="md-expand">{{ value.content }}</small>
                    </md-list-item>
                  </md-list>
                </div>
              </tabs>
            </div>
          </md-content>
        </md-tab>
      </md-tabs>
    </div>
  </div>
</template>


<script>
import { Tabs } from "@/components";
import sourceProgram from "@/static/program.json"

export default {
  components: {
    Tabs,
  },
  data() {
    return {
      LAZprogram: sourceProgram.laz,
      LNWprogram: sourceProgram.lnw,
    };
  },
};
</script>

<style lang="scss">
$list-width: 1040px;

.full-control {
  display: inline-block;
  flex-direction: row;
}

.full-control > .md-list {
  width: $list-width;
  display: inline-block;
  overflow: auto;
  // border: 1px solid rgba(#000, 0.12);
}
</style>
