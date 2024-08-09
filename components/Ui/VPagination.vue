<template>
  <div class="pagination" v-if="props.totalPages > 1">
    <nuxt-link
      :to="getPageUrl(currentPage - 1)"
      :class="{ pagination__arrow: true, disabled: 1 === currentPage }"
      @click="emit('update', currentPage - 1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-left"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </nuxt-link>

    <nuxt-link
      :to="getPageUrl(1)"
      :class="{ pagination__item: true, current: 1 === currentPage }"
      @click="emit('update', 1)"
      >1</nuxt-link
    >

    <span class="pageination__sep" v-if="totalSubset.length > 0 && totalSubset[0] > 2"
      >...</span
    >

    <nuxt-link
      :to="getPageUrl(num)"
      :class="{ pagination__item: true, current: num === currentPage }"
      @click="emit('update', num)"
      v-for="num in totalSubset"
      :key="num"
      >{{ num }}</nuxt-link
    >

    <span
      class="pageination__sep"
      v-if="
        totalSubset.length > 0 &&
        totalSubset[totalSubset.length - 1] <= props.totalPages - 2
      "
      >...</span
    >

    <nuxt-link
      :to="getPageUrl(props.totalPages)"
      :class="{
        pagination__item: true,
        current: props.totalPages === currentPage,
      }"
      @click="emit('update', props.totalPages)"
      v-if="props.totalPages > 1"
      >{{ props.totalPages }}</nuxt-link
    >

    <nuxt-link
      class="pagination__arrow"
      :to="getPageUrl(currentPage + 1)"
      :class="{
        paginayion__arrow: true,
        disabled: props.totalPages === currentPage,
      }"
      @click="emit('update', currentPage + 1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-right"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  totalPages: {
    type: Number,
    default: 0,
  },
  query: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(["update"]);

const currentPage = computed(() => {
  return props.query.page !== undefined ? parseInt(props.query.page) : 1;
});

const totalSubset = computed(() => {
  const start = currentPage.value - 2 <= 1 ? 2 : currentPage.value - 2;
  const end =
    currentPage.value + 2 >= props.totalPages - 1
      ? props.totalPages - 1
      : currentPage.value + 2;

  let out = [];
  for (let i = start; i <= end; i++) {
    out.push(i);
  }
  return out;
});

const getPageUrl = (page) => {
  let q = JSON.parse(JSON.stringify(props.query));
  q.page = page;
  return (
    props.path +
    "?" +
    Object.keys(q)
      .map((key) => {
        return key + "=" + q[key];
      })
      .join("&")
  );
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;

  &__item {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background-color: #f3f3f3;
    color: #101010;
    text-decoration: none;

    &.current {
      background-color: #101010;
      color: #ffffff;
    }
  }

  &__sep {
    margin: 0 4px;
  }

  &__arrow {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background-color: #f3f3f3;
    color: #101010;
    text-decoration: none;

    &.disabled {
      display: none;
    }
  }
}
</style>
