<script setup lang="ts">
import { ref } from "vue";

const posters = ref([
  {
    grandPrix: "Portuguese Grand Prix",
    season: "2021/2022",
    image:
      "https://www.sauber-group.com/wp-content/uploads/2021/05/pz-830x1475.jpg",
  },
  {
    grandPrix: "San Paolo",
    season: "2021/2022",
    image:
      "https://www.sauber-group.com/wp-content/uploads/2021/07/Baku_21_750x1334.jpg",
  },
  {
    grandPrix: "Portuguese Grand Prix",
    season: "2021/2022",
    image:
      "https://www.sauber-group.com/wp-content/uploads/2021/05/pz-830x1475.jpg",
  },
  {
    grandPrix: "San Paolo",
    season: "2021/2022",
    image:
      "https://www.sauber-group.com/wp-content/uploads/2021/07/Baku_21_750x1334.jpg",
  },
]);
</script>

<template>
  <div class="grid">
    <div v-for="poster in posters" class="poster">
      <img :src="poster.image" />
      <h1>{{ poster.grandPrix }}</h1>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.poster {
  cursor: pointer;
}
.poster h1 {
  font-size: 1.3rem;
}
.poster img {
  width: 100%;
}
</style>
