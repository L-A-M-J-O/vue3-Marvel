<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { SuperHeroe } from "../../domain/models/SuperHeroe";
import { useData } from "../../composables/useData";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Comics from "../components/Comics.vue";

// import required modules
const { fetchDataList, fetchDataListImage, fetchDataName } = useData();
const SuperHeroes = ref<SuperHeroe[]>();
const SuperHeroesName = ref<SuperHeroe[]>();
const events = ref();
const name = ref("");
const nameVacio = ref<boolean>(false);
const modules = ref([Autoplay, Pagination, Navigation]);

watch(
  () => name.value,
  async () => {
    if (name.value.length == 0) {
      SuperHeroes.value = await fetchDataList();
      nameVacio.value = false;
    }
  }
);
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});
const handleSearch = async () => {
  SuperHeroesName.value = await fetchDataName(name.value);
  SuperHeroes.value = await fetchDataName(name.value);
  if (SuperHeroesName.value?.length == 0) {
    nameVacio.value = true;
  } else {
    nameVacio.value = false;
  }
};
onMounted(async () => {
  // SuperHeroes.value = await fetchDataList();
  events.value = await fetchDataListImage();
});
</script>
<template>
  <div class="container-flu id mt-2 position-relative">
    <div class="row justify-content-center m-0 m-md-4">
      <div class="large mvl-flyout__cta-title text-center my-3">
        Trending in the universe
      </div>
      <div class="col-12">
        <swiper
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :slidesPerView="3"
          :spaceBetween="30"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="image in events"
            ><img :src="image.image"
          /></swiper-slide>
        </swiper>
      </div>
      <!-- <div class="row justify-content-center">
        <div class="col-12 my-4">
          <hr class="sep-3" />
          <div class="logo">Characters</div>
          <div class="row justify-content-center">
            <div class="col-6 text-center">
              <el-input
                clearable
                v-model="name"
                class="element-input w-50 mb-2 bg-transparent"
                size="large"
                placeholder="Search Enter.."
              />
              <button
                class="button-50 mx-4"
                role="button"
                @click="handleSearch"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div
          v-if="nameVacio"
          class="col-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 m-2"
        >
          <h6>No encontramos tu Super Heroe</h6>
        </div>
        <div
          class="col-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 m-2"
          v-for="Heroe in SuperHeroes"
        >
          <div class="flyout-col mvl-flyout-card-container">
            <div class="mvl-card mvl-card--explore">
              <a
                class="explore__link"
                @click="$router.push({ path: `/super-details/${Heroe.id}` })"
                ><div class="card-thumb-frame">
                  <figure class="img__wrapper">
                    <img
                      class="img-super"
                      :src="
                        Heroe.thumbnail.path + `.` + Heroe.thumbnail.extension
                      "
                      alt="character"
                    />
                  </figure>
                </div>
                <div class="card-body is-sliding p-4">
                  <p class="card-body__headline text-center">
                    {{ Heroe.name }}
                  </p>
                  <div class="card-footer">
                    <p class="card-footer__secondary-text"></p>
                    <p class="card-footer__micro-description"></p>
                  </div></div
              ></a>
            </div>
          </div>
        </div>
      </div> -->
      <Comics />
    </div>
  </div>
</template>
