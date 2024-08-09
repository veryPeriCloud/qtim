<template>
  <div>
    <TheHeader />
    <main class="container">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader/TheHeader.vue';
</script>

<style scoped>

</style>