<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useData } from "../../composables/useData";
const name = ref("");
const comics = ref([]);
const { fetchDataComics } = useData();
const handleSearch = async () => {};
onMounted(async () => {
  comics.value = await fetchDataComics();
  console.log(comics.value);
});
</script>
<template>
  <div class="row">
    <div class="col-12 my-4">
      <hr class="sep-3" />
      <div class="logo">Comics</div>
      <div class="row justify-content-center">
        <div class="col-6 text-center">
          <el-input
            clearable
            v-model="name"
            class="element-input w-50 mb-2 bg-transparent"
            size="large"
            placeholder="Search Enter.."
          />
          <button class="button-50 mx-4" role="button" @click="handleSearch">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row gx-5">
    <div class="void" id="void">
      <div class="crop">
        <ul id="card-list" style="--count: 6">
          <li v-for="comic in comics">
            <div class="card">
              <div class="row justify-content-center card-img-comics text-center">
                <img
                  class="card-img-comics__img-card"
                  :src="comic.thumbnail.path + `.` + comic.thumbnail.extension"
                  alt="character"
                />
              </div>
              <a href=""
                ><span class="model-name">{{ comic.title }}</span>
              </a>
            </div>
          </li>
        </ul>
        <div class="last-circle"></div>
        <div class="second-circle"></div>
      </div>
      <div class="mask"></div>
      <div class="center-circle"></div>
      <div></div>
    </div>
    <!-- <div class="col" v-for="comic in comics">
      <div class="border">
        {{ comic.title }}
        <img
          class="img-super-details"
          :src="comic.thumbnail.path + `.` + comic.thumbnail.extension"
          alt="character"
        />
      </div>
    </div> -->
  </div>
</template>
