<template>
  <div>
    <md-table
      v-model="articles"
      md-sort="date"
      md-sort-order="desc"
      :table-header-color="tableHeaderColor"
    >
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <table-pagination
            :articles="allArticle"
            v-on:page:update="updatePage"
            :currentPage="currentPage"
            :pageSize="pageSize"
          >
          </table-pagination>
        </div>

        <md-field class="md-toolbar-section-end">
          <md-input
            placeholder="Cari dari judul..."
            v-model="search"
            @input="searchOnTable"
          />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="Artikel tidak ditemukan"
        :md-description="
          `Pencarian '${search}' tidak tersedia. Silahkan cari kata kunci yang sesuai`
        "
      >
        <md-button @click="updatePage(currentPage)" class="md-primary"
          >Kembali</md-button
        >
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-sort-by="date" md-label=""
          ><img
            :src="require(`@/assets/img/articles/${item.img}`)"
            class="img-raised"
            style="
              object-fit: cover;
              width: 100%;
              height: 15vh;
              max-width: 15vh;
            "
        /></md-table-cell>
        <md-table-cell md-label=""
          ><a :href="`#/article/${item.link}`" style="float: left">{{
            item.title
          }}</a
          ><br /><small style="float: left">{{ item.highlight }}..</small
          ><br /><br /><small style="float: right">{{
            moment(item.date).fromNow()
          }}</small></md-table-cell
        >
        <md-table-cell md-label=""
          ><small
            ><md-button
              class="md-simple just-icon md-warning md-sm"
              :href="`#/article/${item.link}`"
              ><md-icon>read_more</md-icon></md-button
            ></small
          ></md-table-cell
        >
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import sourceArticle from "@/static/article.json";
import TablePagination from "./TablePagination.vue";
import moment from "moment";

const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.title).includes(toLower(term)));
  }
  return items;
};

export default {
  name: "simple-table",
  components: {
    TablePagination
  },
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      moment: moment,
      search: null,
      articles: [],
      currentPage: 0,
      pageSize: 2,
      allArticle: sourceArticle.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )
    };
  },
  beforeMount: function() {
    this.updateVisibleTable();
  },
  methods: {
    searchOnTable() {
      this.articles = searchByName(this.allArticle, this.search);
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTable();
    },
    updateVisibleTable() {
      this.articles = this.allArticle.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );

      // if don't have visibile table, go back a page
      if (this.articles.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  },
  created() {
    // this.articles = this.allArticle;
  }
};
</script>
