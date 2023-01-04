<script setup lang="ts">
import { ref } from "vue";

const posters = ref([
  {
    grandPrix: "Abu Dhabi",
    season: "2021/2022",
    image:
      "https://api.ferrari.com/cms/network/medias//resize/6374af45f6f433002330d390-2022-ferrari-abu-dhabi-grand-prix-cover-art-full?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=768&height=0",
  },
]);
</script>

<template>
  <div v-for="poster in posters" class="poster">
    <img :src="poster.image" />
    <h1>{{ poster.grandPrix }}</h1>
  </div>
</template>
