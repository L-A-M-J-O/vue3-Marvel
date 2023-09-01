<script setup lang="ts">
import { onMounted, ref, } from "vue";
import { useRoute } from 'vue-router'
import { useData } from "../../composables/useData";

const route = useRoute()

const { DetailsDataList} = useData()
const SuperHeroeDetails = ref();
const idSuperHeroe = ref()
onMounted( async() => {
    const { id } = route.params;
    idSuperHeroe.value = id;
    SuperHeroeDetails.value = await DetailsDataList(idSuperHeroe.value);
})

</script>

<template>
  <h1>Details</h1>
  <div class="container">
    <div class="row" v-for="details in SuperHeroeDetails">
        <h1>{{ details.name }}</h1>
        <h1>{{ details.comics }}</h1>
    </div>
  </div>
</template>
