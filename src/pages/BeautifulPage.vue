<script setup lang="ts">
import Aside from '@/components/beautifulComponents/Aside.vue'
import Footer from '@/components/beautifulComponents/Footer.vue'
import Header from '@/components/beautifulComponents/Header.vue'
import Main from '@/components/beautifulComponents/Main.vue'
</script>

<template>
  <div class="container">
    <Header class="container--header" />
    <Aside class="container--aside" />
    <Main class="container--main" />
    <Footer class="container--footer" />
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'header header'
    'aside main'
    'footer footer';
  grid-template-rows: 80px 1fr minmax(100px, max-content);
  grid-template-columns: 200px 1fr;
}

.container--header {
  grid-area: header;
  background: #004ed6;
}

.container--aside {
  grid-area: aside;
  background: #f91155;
}

.container--main {
  grid-area: main;
  background: #3ac267;
  width: 600px;
  justify-self: center;
}

.container--footer {
  grid-area: footer;
  background: #001a34;
}
</style>
