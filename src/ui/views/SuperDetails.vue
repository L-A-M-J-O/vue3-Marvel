<script setup lang="ts">
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Pagination } from "swiper/modules";
import { useData } from "../../composables/useData";

const route = useRoute();
const modules = [FreeMode, Pagination];
const { DetailsDataList, DetailsComics, DetailsSeries } = useData();
const SuperHeroeDetails = ref();
const idSuperHeroe = ref();
const comicsHeroe = ref();
const seriesHeroe = ref();
onMounted(async () => {
  const { id } = route.params;
  idSuperHeroe.value = id;
  SuperHeroeDetails.value = await DetailsDataList(idSuperHeroe.value);
  comicsHeroe.value = await DetailsComics(idSuperHeroe.value);
  seriesHeroe.value = await DetailsSeries(idSuperHeroe.value);
  console.log(SuperHeroeDetails.value);
  console.log(seriesHeroe.value);
});
</script>

<template>
  <div class="container-fluid" v-for="details in SuperHeroeDetails">
    <div class="row mb-sm-5 mb-md-0 m-md-3">
      <div
        class="col-sm-12 col-md-12 col-lg-12 col-xl-4 box-main-details-img p-0"
      >
        <div class="d-flex justify-content-center">
          <div class="col-12 box-border">
            <h3 class="header-sprite-p text-center m-2">
              Ranking #{{ details.id }}
            </h3>
            <img
              class="img-super-details"
              :src="details.thumbnail.path + `.` + details.thumbnail.extension"
              alt="character"
            />
          </div>
        </div>
      </div>
      <div
        class="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 box-main-details m-0 m-lg-5"
      >
        <div class="row mt-0 mt-sm-2">
          <div class="col-12">
            <h1 class="mvl-flyout__cta-title__d">
              <span class="mvl-flyout__cta-span__d"> # {{ details.id }} </span>
              {{ details.name }}
            </h1>
          </div>
        </div>
        <div class="row box-details d-flex align-items-center">
          <div
            class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 box-details_col box-border"
          >
            <p class="mvl-flyout__cta-p__d m-3">
              <span>
                {{
                  details.description.length
                    ? details.description
                    : "I can't find the description, sorry. ⛔"
                }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="comics"
      class="row justify-content-center box-main-comics mt-sm-5 mt-md-0"
    >
      <div class="col-12 my-4">
        <hr class="sep-3" />
        <div class="logo">Comics - {{ details.name }}</div>
      </div>
      <swiper
        :slidesPerView="4"
        :spaceBetween="0"
        :freeMode="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item in comicsHeroe">
          <div
            class="box-details_col col-sm-12 col-md-12 col-ld-12 col-xl-10 col-xxl-10 p-sm-2"
          >
            <img
              class="img-super-details"
              :src="item.thumbnail.path + `.` + item.thumbnail.extension"
              alt="comics"
            />
            <button class="button-49 position-absolute top-0 start-0">
              <p class="mvl-flyout__cta-p__d">
                <span> Detalles </span>
              </p>
            </button>
            <p class="mvl-flyout__cta-p__d_d m-3">
              <span>
                {{ item.title }}
              </span>
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div id="series" class="row justify-content-center">
      <div class="col-12 my-4">
        <hr class="sep-3" />
        <div class="logo">Series - {{ details.name }}</div>
      </div>
      <div
        class="col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3"
        v-for="serie in seriesHeroe"
      >
        <img
          class="img-super-details"
          :src="serie.thumbnail.path + `.` + serie.thumbnail.extension"
          alt="comics"
        />
        <p class="mvl-flyout__cta-p__d m-3">
          <span>
            {{ serie.title }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
