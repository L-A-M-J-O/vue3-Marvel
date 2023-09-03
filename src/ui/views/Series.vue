<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useData } from "../../composables/useData";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative } from "swiper/modules";
const name = ref("");
const series = ref([]);
const modules = [EffectCreative];
const seriesName = ref([]);
const nameVacio = ref<boolean>(false);
const { fetchDataSeries } = useData();
onMounted(async () => {
  series.value = await fetchDataSeries();
  console.log(series.value);
});
</script>
<template>
  <section>
    <div class="row">
      <div class="col-12 my-4">
        <hr class="sep-3" />
        <div class="logo">Series</div>
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
      <div class="col-12">
        <swiper
          :grabCursor="true"
          :effect="'creative'"
          :creativeEffect="{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="serie in series">
            <div class="cardS-container">
              <div class="row justify-content-end d-flex align-items-center">
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <div class="large mvl-flyout__cta-title text-center my-3">
                    {{ serie.title }}
                  </div>
                  <p class="mvl-flyout__cta-p__d m-3">
                    <span>
                      {{ serie.endYear }}
                    </span>
                  </p>
                  <p class="mvl-flyout__cta-p__d m-3">
                    <span>
                      {{ serie.modified }}
                    </span>
                  </p>
                  <button class="button-49">
                    <p class="mvl-flyout__cta-p__d">
                      <span> Detalles </span>
                    </p>
                  </button>
                </div>
                <div class="col-sm-8 col-md-8 col-lg-8 col-xl-6">
                  <img
                    class="img-series"
                    :src="
                      serie.thumbnail.path + `.` + serie.thumbnail.extension
                    "
                    alt="character"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
