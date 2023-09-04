<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { SuperHeroe } from "../../domain/models/SuperHeroe";
import { useData } from "../../composables/useData";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useStore } from "../../stores/index";
import "swiper/css";
import "swiper/css/pagination";
import Comics from "../views/Comics.vue";
import Series from "../views/Series.vue";
// import required modules
const { fetchDataList, fetchDataListImage, fetchDataName } = useData();
const SuperHeroes = ref<SuperHeroe[]>();
const SuperHeroesName = ref<SuperHeroe[]>();
const events = ref();
const name = ref("");
const store = useStore();
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
watch(
  () => SuperHeroes.value,
  () => {
    store.change();
  }
);
const handleSearch = async () => {
  SuperHeroesName.value = await fetchDataName(name.value);
  SuperHeroes.value = await fetchDataName(name.value);
  if (SuperHeroesName.value?.length == 0) {
    nameVacio.value = true;
  } else {
    nameVacio.value = false;
  }
};
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});
onMounted(async () => {
  SuperHeroes.value = await fetchDataList();
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
      <div class="row justify-content-center">
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
        <div class="row row justify-content-center" v-if="store.stat">
          <div class="cardH col-4 flex-grow m-2">
          <div class="cardH__header flex flex-wrap justify-center">
            <div class="cardH__title mx-3 my-3">
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
          <div class="cardH__body flex flex-wrap my-5 justify-center">
            <div class="skeleton skeleton-text mx-2"></div>
            <div class="skeleton skeleton-text mx-2"></div>
          </div>
          <div
            class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
          >
            <div class="skeleton skeleton-btn mx-2"></div>
            <div class="skeleton skeleton-btn mx-2"></div>
          </div>
        </div>
          <div class="cardH col-4 flex-grow m-2">
            <div class="cardH__header flex flex-wrap justify-center">
              <div class="cardH__title mx-3 my-3">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
              </div>
            </div>
            <div class="cardH__body flex flex-wrap my-5 justify-center">
              <div class="skeleton skeleton-text mx-2"></div>
              <div class="skeleton skeleton-text mx-2"></div>
            </div>
            <div
              class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
            >
              <div class="skeleton skeleton-btn mx-2"></div>
              <div class="skeleton skeleton-btn mx-2"></div>
            </div>
          </div>
          <div class="cardH col-4 flex-grow m-2">
            <div class="cardH__header flex flex-wrap justify-center">
              <div class="cardH__title mx-3 my-3">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
              </div>
            </div>
            <div class="cardH__body flex flex-wrap my-5 justify-center">
              <div class="skeleton skeleton-text mx-2"></div>
              <div class="skeleton skeleton-text mx-2"></div>
            </div>
            <div
              class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
            >
              <div class="skeleton skeleton-btn mx-2"></div>
              <div class="skeleton skeleton-btn mx-2"></div>
            </div>
          </div>
          <div class="cardH col-4 flex-grow m-2">
            <div class="cardH__header flex flex-wrap justify-center">
              <div class="cardH__title mx-3 my-3">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
              </div>
            </div>
            <div class="cardH__body flex flex-wrap my-5 justify-center">
              <div class="skeleton skeleton-text mx-2"></div>
              <div class="skeleton skeleton-text mx-2"></div>
            </div>
            <div
              class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
            >
              <div class="skeleton skeleton-btn mx-2"></div>
              <div class="skeleton skeleton-btn mx-2"></div>
            </div>
          </div>
          <div class="cardH col-4 flex-grow m-2">
            <div class="cardH__header flex flex-wrap justify-center">
              <div class="cardH__title mx-3 my-3">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
              </div>
            </div>
            <div class="cardH__body flex flex-wrap my-5 justify-center">
              <div class="skeleton skeleton-text mx-2"></div>
              <div class="skeleton skeleton-text mx-2"></div>
            </div>
            <div
              class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
            >
              <div class="skeleton skeleton-btn mx-2"></div>
              <div class="skeleton skeleton-btn mx-2"></div>
            </div>
          </div>
          <div class="cardH col-4 flex-grow m-2">
            <div class="cardH__header flex flex-wrap justify-center">
              <div class="cardH__title mx-3 my-3">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
              </div>
            </div>
            <div class="cardH__body flex flex-wrap my-5 justify-center">
              <div class="skeleton skeleton-text mx-2"></div>
              <div class="skeleton skeleton-text mx-2"></div>
            </div>
            <div
              class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
            >
              <div class="skeleton skeleton-btn mx-2"></div>
              <div class="skeleton skeleton-btn mx-2"></div>
            </div>
          </div>
          <div class="cardH col-4 flex-grow m-2">
            <div class="cardH__header flex flex-wrap justify-center">
              <div class="cardH__title mx-3 my-3">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
              </div>
            </div>
            <div class="cardH__body flex flex-wrap my-5 justify-center">
              <div class="skeleton skeleton-text mx-2"></div>
              <div class="skeleton skeleton-text mx-2"></div>
            </div>
            <div
              class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
            >
              <div class="skeleton skeleton-btn mx-2"></div>
              <div class="skeleton skeleton-btn mx-2"></div>
            </div>
          </div>
          <div class="cardH col-4 flex-grow m-2">
            <div class="cardH__header flex flex-wrap justify-center">
              <div class="cardH__title mx-3 my-3">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
              </div>
            </div>
            <div class="cardH__body flex flex-wrap my-5 justify-center">
              <div class="skeleton skeleton-text mx-2"></div>
              <div class="skeleton skeleton-text mx-2"></div>
            </div>
            <div
              class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
            >
              <div class="skeleton skeleton-btn mx-2"></div>
              <div class="skeleton skeleton-btn mx-2"></div>
            </div>
          </div>

          <div class="cardH col-4 flex-grow m-2">
            <div class="cardH__header flex flex-wrap justify-center">
              <div class="cardH__title mx-3 my-3">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
              </div>
            </div>
            <div class="cardH__body flex flex-wrap my-5 justify-center">
              <div class="skeleton skeleton-text mx-2"></div>
              <div class="skeleton skeleton-text mx-2"></div>
            </div>
            <div
              class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
            >
              <div class="skeleton skeleton-btn mx-2"></div>
              <div class="skeleton skeleton-btn mx-2"></div>
            </div>
          </div>
          <div class="cardH col-4 flex-grow m-2">
            <div class="cardH__header flex flex-wrap justify-center">
              <div class="cardH__title mx-3 my-3">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
              </div>
            </div>
            <div class="cardH__body flex flex-wrap my-5 justify-center">
              <div class="skeleton skeleton-text mx-2"></div>
              <div class="skeleton skeleton-text mx-2"></div>
            </div>
            <div
              class="cardH__body-btn flex flex-wrap justify-content-center mb-5"
            >
              <div class="skeleton skeleton-btn mx-2"></div>
              <div class="skeleton skeleton-btn mx-2"></div>
            </div>
          </div>
        </div>
        <div
          v-else
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
      <Comics />
      <Series />
    </div>
  </div>
</template>
