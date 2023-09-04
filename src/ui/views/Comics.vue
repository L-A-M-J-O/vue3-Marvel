<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useStore } from "../../stores/index";
import { useData } from "../../composables/useData";
const name = ref("");
const comics = ref([]);
const comicsName = ref([]);
const store = useStore();
const nameVacio = ref<boolean>(false);
const { fetchDataComics, fetchDataComicsName } = useData();
const handleSearch = async () => {
  comicsName.value = await fetchDataComicsName(name.value);
  comics.value = await fetchDataComics();
  if (comicsName.value?.length == 0) {
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
watch(
  () => name.value,
  async () => {
    if (name.value.length == 0) {
      comics.value = await fetchDataComics();
      nameVacio.value = false;
    }
  }
);
watch(
  () => comics.value,
  () => {
    store.change();
  }
);
onMounted(async () => {
  comics.value = await fetchDataComics();
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
  <div class="container m-5">
    <div class="row justify-content-center m-5">
      <div class="row justify-content-center" v-if="store.stat">
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
      <div class="row" v-else>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
          <div class="row justify-content-center">
            <div class="col-12 m-5">
              <div class="box-comics">
                <div class="carousel">
                  <div class="carousel__item" v-for="comic in comics">
                    <div class="row"></div>
                    <div class="carousel__item-head">
                      <img
                        width="140"
                        :src="
                          comic.thumbnail.path + `.` + comic.thumbnail.extension
                        "
                        alt="character"
                      />
                    </div>
                    <div class="carousel__item-body text-end">
                      <p class="title">{{ comic.title }}</p>
                      <p>{{ comic.pageCount }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 my-5"
          v-for="comic in comics"
        >
          <div class="flyout-col mvl-flyout-card-container">
            <div class="mvl-card mvl-card--explore">
              <a class="explore__link" @click="$router.push({ path: `/` })"
                ><div class="card-thumb-frame">
                  <figure class="img__wrapper">
                    <img
                      class="img-super"
                      :src="
                        comic.thumbnail.path + `.` + comic.thumbnail.extension
                      "
                      alt="character"
                    />
                  </figure>
                </div>
                <div class="card-body is-sliding p-4">
                  <p class="card-body__headline text-center">
                    {{ comic.title }}
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
