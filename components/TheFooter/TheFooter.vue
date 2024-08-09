<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__title">
          <p class="footer__text">Is there a project?</p>
          <p class="footer__text-big">Let’s work together</p>
        </div>
        <div class="footer__contacts">
          <div>
            <div>For all questions</div>
            <div>
              <a href="tel:89202780068" class="footer__contact"
                >+7 (920) 278—00—68</a
              >
            </div>
            <div>
              <a href="mailto:qtim@agency.com" class="footer__contact"
                >qtim@agency.com</a
              >
            </div>
          </div>
          <ul>
            <li v-for="(address, index) in addresses" :key="index">
              <p>{{ address.title }}</p>
              <p>{{ address.descr }}</p>
              <nuxt-link :to="address.link">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#101010" />
                  <path
                    d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z"
                    stroke="#E2BEFF"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const addresses = [
  {
    title: "Office in Russia",
    descr: "139 Ruben Station Lake Drew, NM 52678",
    link: "/",
  },
  {
    title: "Office in Dubai",
    descr: "139 Ruben Station Lake Drew, NM 52678",
    link: "/",
  },
];
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 140px;
  padding-bottom: 30px;
  background: #e2beff;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__contacts {
    max-width: 160px;
  }

  &__title {
    max-width: 510px;
  }

  &__text {
    margin: 0;
    margin-bottom: 50px;
    font-size: 1rem;

    &-big {
      margin: 0;
      font-size: 112px;
    }
  }

  &__contact {
    font-size: 1rem;
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

@media (max-width: 768px) {
  .footer {
    &__content {
      flex-direction: column;
      gap: 50px;
    }

    &__text-big {
      font-size: 60px;
    }
  }
}
</style>
