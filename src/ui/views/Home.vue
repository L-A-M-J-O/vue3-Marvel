<script setup lang="ts">
import { onMounted, ref } from "vue";

import { SuperHeroe } from "../../domain/models/SuperHeroe";
import { useData } from "../../composables/useData";

const { sendFormData, fetchDataList, DetailsDataList } = useData();
const SuperHeroes = ref<SuperHeroe[]>();

onMounted(async () => {
  SuperHeroes.value = await fetchDataList();
});
</script>
<template>
  <h1>Home</h1>
  <div class="container">
    <div class="row" v-for="Heroe in SuperHeroes">
      <h4>{{ Heroe.name }}</h4>
      <button
        @click="$router.push({path: `/super-details/${Heroe.id}`})"
      >
        Detalles
      </button>
    </div>
  </div>
</template>
