<template>
  <main class="article">
    <div v-if="isLoaded && article">
      <h1 class="page-title article__title">{{ article.title }}</h1>
      <div class="article__img">
        <img :src="article.image" :alt="article.title" />
      </div>

      <div class="article__text">
        <h2 class="article__subtitle">About</h2>
        <p class="article__descr">{{ article.description }}</p>
      </div>
    </div>
    <div v-else class="loader">Loading...</div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const articleStore = useArticleStore();
const article = computed(() => articleStore.getArticle);
const isLoaded = ref(false);

onMounted(async () => {
  const id = Number(route.params.id);
  await articleStore.fetchArticle(id);
  isLoaded.value = true;
});
</script>

<style lang="scss" scoped>
.article {
  padding-top: 120px;
  padding-bottom: 80px;

  &__title {
    margin-bottom: 70px;
  }

  &__img {
    margin-bottom: 80px;
    height: 700px;
    background-color: #9effbf;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__text {
    max-width: 695px;
  }

  &__subtitle {
    font-weight: 400;
    font-size: 1rem;
  }

  &__descr {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .article {
    padding-top: 80px;

    &__img {
      height: 400px;
    }
  }
}
</style>
