<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Layout from './ui/layout/Layout.vue';
import { SuperHeroe } from "./domain/models/SuperHeroe";
import { useData } from "./composables/useData";

const { sendFormData, fetchDataList } = useData();
const SuperHeroes = ref<SuperHeroe[]>();

onMounted(async () => {
  SuperHeroes.value = await fetchDataList();
  console.log(SuperHeroes.value);
});
</script>

<template>
  <layout />
</template>
