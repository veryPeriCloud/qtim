import { defineStore } from "pinia";
import type { IFilter, IArticle } from "~/types/article";

const BASE_URL = "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work";

export const useArticleStore = defineStore("articleStore", {
  state: () => ({
    articles: null as IArticle[] | null,
    article: null as IArticle | null,
    pagination: {
      perPage: 8,
      totalPages: 1,
    },
    filter: {
      page: 1,
    } as IFilter,
  }),
  getters: {
    getArticle: (state) => state.article,
    getArticles: (state) => {
      if (state.articles === null) return [];

      return state.articles;
    },
    getTotalPages: (state) => {
      if (state.articles === null) return 1;

      return state.pagination.totalPages;
    },
    getFilter: (state) => state.filter,
    getFiltersAsUrl: (state) => {
      return useSerialize(state.filter);
    },
  },
  actions: {
    setFilter(page: number): void {
      this.filter.page = page;
    },
    async fetchArticles(): Promise<void> {
      await $fetch(`${BASE_URL}/posts`)
        .then((res)=> {
          const start = (+this.filter.page - 1) * this.pagination.perPage;
          const end = +this.filter.page * this.pagination.perPage;

          this.pagination.totalPages = Math.ceil(
            res.length / this.pagination.perPage
          );

          this.articles = res.slice(start, end);
          return this.articles;
        });
    },
    async fetchArticle(id: number): Promise<void> {
      await $fetch(`${BASE_URL}/posts/${id}`)
        .then((res) => {
          this.article = res;
        });
    },
  },
});
