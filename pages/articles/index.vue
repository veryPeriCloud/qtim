<template>
  <section class="articles">
    <h1 class="page-title">Articles</h1>

    <ul class="articles__list" v-if="isLoaded && articles.length > 0">
      <article-item
        v-for="article in articles"
        :key="article.id"
        :item="article"
      />
    </ul>
    <div v-if="isLoaded && articles.length === 0">Articles not found</div>
    <div v-if="!isLoaded" class="loader">Loading ...</div>

    <v-pagination
      class="articles__pagination"
      :path="route.path"
      :total-pages="totalPages"
      :query="route.query"
      @update="updatePage"
    />
  </section>
</template>

<script setup lang="ts">
import ArticleItem from "~/components/Articles/ArticleItem.vue";
import VPagination from "~/components/Ui/VPagination.vue";
import { useArticleStore } from "~/store/article";
import type { IArticle, IFilter } from "~/types/article";

const route = useRoute();
const router = useRouter();
const articleStore = useArticleStore();

const isLoaded = ref<boolean>(false);
const articles = computed(() => articleStore.getArticles);
const totalPages = computed(() => articleStore.getTotalPages);

onMounted(async () => {
  try {
    const page = route.query.page ? Number(route.query.page) : 1;
    articleStore.setFilter(page);

    await articleStore.fetchArticles();
    isLoaded.value = true;
  } catch (error) {
    console.log("error", error);
  }
});

const updatePage = async (page: number): Promise<void> => {
  isLoaded.value = false;

  articleStore.setFilter(page);
  await updateArticles(articleStore.getFilter);
};

const updateArticles = async (filter: IFilter): Promise<void> => {
  articleStore.setFilter(filter.page);
  router.push(route.path + "?" + articleStore.getFiltersAsUrl);

  setTimeout(async () => {
    await articleStore.fetchArticles().then((res) => {
      isLoaded.value = true;
    }, 100);
  });
};
</script>

<style lang="scss" scoped>
.articles {
  padding-top: 120px;
  padding-bottom: 140px;

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 280px);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 32px;
    row-gap: 40px;
  }

  &__pagination {
    margin-top: 50px;
  }
}

@media (max-width: 1280px) {
  .articles__list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .articles__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .articles__list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
