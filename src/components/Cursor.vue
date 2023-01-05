<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const size = 60;

const position = ref({ x: 0, y: 0 });

onMounted(() => {
  window.addEventListener("mousemove", handleMousemove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMousemove);
});

function handleMousemove(event: MouseEvent) {
  position.value = { x: event.clientX, y: event.clientY };
}
</script>

<template>
  <div
    class="circle-outer"
    :style="{
      left: position.x - size / 2 + 'px',
      top: position.y - size / 2 + 'px',
      width: size + 'px',
      height: size + 'px',
    }"
  >
    <div
      class="circle-inner"
      :style="{
        width: size / 3 + 'px',
        height: size / 3 + 'px',
      }"
    ></div>
  </div>
</template>

<style scoped>
.circle-outer {
  position: absolute;
  border-radius: 50%;
  border: 2px solid white;
  transition: left 0.1s, top 0.1s;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.2);
  pointer-events: none;
}
.circle-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  border-radius: 50%;
  border: 2px solid white;
  animation: pulse 1s ease-in-out infinite;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.2);
}

@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(2);
  }
}
</style>
