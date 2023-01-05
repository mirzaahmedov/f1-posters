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
  gap: 10px;
  padding: 10px;
  grid-template-columns: repeat(6, 1fr);
}
@media (max-width: 500px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.poster {
  cursor: none;
}
.poster h1 {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: normal;
  text-transform: uppercase;
}
.poster h1:hover {
  text-decoration: underline;
}
.poster img {
  width: 100%;
  filter: grayscale(1);
  transition: filter 1s;
}
.poster img:hover {
  filter: grayscale(0);
}
</style>
