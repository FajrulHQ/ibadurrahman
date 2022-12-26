<template>
  <div v-if="totalPages() > 0" class="paggination-wrapper">
    <span
      v-if="showPreviousLink()"
      class="paggination-btn"
      @click="updatePage(currentPage - 1)"
      ><md-button class="md-primary md-sm md-just-icon md-round"
        ><md-icon>navigate_before</md-icon></md-button
      ></span
    >
    <md-button class="md-simple"
      ><b>Page {{ currentPage + 1 }} / {{ totalPages() }}</b></md-button
    >
    <span
      v-if="showNextLink()"
      class="paggination-btn"
      @click="updatePage(currentPage + 1)"
      ><md-button class="md-primary md-sm md-just-icon md-round"
        ><md-icon>navigate_next</md-icon></md-button
      ></span
    >
  </div>
</template>

<script>
export default {
  name: "table-pagination",
  props: ["articles", "currentPage", "pageSize"],
  methods: {
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
    },
    totalPages() {
      return Math.ceil(this.articles.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == this.totalPages() - 1 ? false : true;
    }
  }
};
</script>

<style>
.pagination-btn {
  cursor: pointer;
}
</style>
