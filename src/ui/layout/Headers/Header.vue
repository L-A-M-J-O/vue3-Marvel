<script setup lang="ts">
const modeDark = () => {
  document.querySelector("body")?.setAttribute("data-bs-theme", "dark");
  document
    .querySelector("#dl-icon")
    ?.setAttribute("class", "bi bi-moon-stars-fill");
};
const modeLight = () => {
  document.querySelector("body")?.setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon")?.setAttribute("class", "bi bi-sun-fill");
};
const alterMode = () => {
  document.querySelector("body")?.getAttribute("data-bs-theme") === "light"
    ? modeDark()
    : modeLight();
};
</script>
<template>
  <header>
    <nav>
      <div class="container-fluid box-main_upper position-absolute-top">
        <div class="box_upper">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-12 col-md-2 col-lg-2 col-xl-2 text-center">
              <div class="box-mode-upper">
                <button @click="alterMode" class="btn btn-mode">
                  <i id="dl-icon" class="bi bi-moon-stars-fill"></i>
                </button>
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-4 col-xl-4 text-center">
              <img
                width="230"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/2560px-Marvel_Studios_2016_logo.svg.png"
                alt="marvel"
              />
            </div>
            <div class="col-12 col-md-2 col-lg-2 col-xl-2">
              <div class="row justify-content-center">
                <div class="box-mode-upper">
                  <div class="col-auto align-self-center text-center">
                    <img
                      width="20"
                      height="20"
                      class="searchPromo__image"
                      src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
                      alt="Marvel Unlimited logo"
                    />
                  </div>
                  <div
                    class="col-auto align-self-end searchPromo__wrap text-center"
                  >
                    <p class="m-0">Marvel Unlimited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
