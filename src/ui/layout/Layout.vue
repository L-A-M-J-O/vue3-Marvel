<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./Headers/Header.vue";
import Footer from "./Footers/Footer.vue";
</script>
<template>
  <Header />
  <RouterView />
  <Footer />
</template>
