<template>
  <header class="container container-wide header__container">
    <nuxt-link :to="'/'">
      <img :src="'/img/logo.svg'" alt="QTIM logo" />
    </nuxt-link>
    <div class="header__content">
      <nav>
        <ul class="nav">
          <li class="nav__item" v-for="link in links" :key="link.name">
            <nuxt-link class="nav__link" :to="link.to">{{ link.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="header__buttons">
        <button class="header__locale">
          <IconEn class="header__locale-icon" />
        </button>
        <button class="header__btn">Let’s work</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconEn from "~/components/TheHeader/IconEn.vue";
const links = [
  {
    to: "/works",
    name: "Works",
  },
  {
    to: "/about",
    name: "About",
  },
];
</script>

<style lang="scss" scoped>
.header {
  &__container {
    display: flex;
    align-items: center;
    padding-top: 35px;
    padding-bottom: 35px;
  }

  &__content {
    display: flex;
    gap: 90px;
    margin-left: auto;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &__btn {
    font-size: 1.25rem;
    line-height: 1;
    padding: 16px 32px;
    background-color: #101010;
    color: white;
    border-radius: 32px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #868686;
    }
  }

  &__locale {
    width: 52px;
    height: 52px;
    padding: 12px;
    background-color: white;
    border: 2px solid #868686;
    border-radius: 100%;

    &-icon {
      width: 24px;
      height: 24px;
    }
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 60px;

  &__link {
    font-size: 1.25rem;
    line-height: 1;
    text-decoration: none;
    color: #101010;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #868686;
    }
  }
}

@media (max-width: 768px) {
  .header {
    &__buttons {
      display: none;
    }
  }
}
</style>
