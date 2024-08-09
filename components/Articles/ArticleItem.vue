<template>
  <li
    class="article__item"
  >
    <div class="article__img">
      <img :src="item.image" :alt="item.title" />
    </div>
    <p class="article__text">{{ item.preview }}</p>
    <div class="article__more">
      <nuxt-link :to="`articles/${item.id}`" class="article__link"
        >Read more</nuxt-link
      >
    </div>
  </li>
</template>

<script setup lang="ts">
import type { IArticle } from "~/types/article";

const props = defineProps<{
  item: IArticle;
}>();
</script>

<style lang="scss" scoped>
.article {
  &__item {
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-36px);
    }

    &:hover > .article__more {
      visibility: visible;
      opacity: 1;
    }
  }

  &__img {
    margin-bottom: 24px;
    height: 280px;
    object-fit: cover;
    background-color: #E2BEFF;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__text {
    margin: 0;
    font-size: 1.25rem;
    line-height: 120%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    box-orient: vertical;
  }

  &__more {
    margin-top: 12px;
    visibility: hidden;
    opacity: 0;
    height: 0;
    transition: all 0.3s ease-in-out;
  }

  &__link {
    font-size: 1.25rem;
    line-height: 120%;
    color: #E2BEFF;
  }
}
</style>
