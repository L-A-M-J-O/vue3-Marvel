<script setup lang="ts">
import { onMounted, ref } from "vue";

import { SuperHeroe } from "../../domain/models/SuperHeroe";
import { useData } from "../../composables/useData";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
const { fetchDataList, fetchDataListImage } = useData();
const SuperHeroes = ref<SuperHeroe[]>();
const events = ref();
const modules = ref([Autoplay, Pagination, Navigation]);
onMounted(async () => {
  SuperHeroes.value = await fetchDataList();
  events.value = await fetchDataListImage();
});
</script>
<template>
  <div class="container-fluid mt-2 position-relative">
    <div class="row justify-content-center m-0 m-md-4">
      <div class="large mvl-flyout__cta-title text-center m-2">
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
      <div class="row justify-content-center">
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
      </div>
    </div>
  </div>
</template>
