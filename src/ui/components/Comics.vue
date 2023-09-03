<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
const name = ref("");
const handleSearch = async () => {};
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
</template>
