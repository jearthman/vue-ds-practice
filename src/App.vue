<script setup lang="ts">
import ResizeablePanelLayout from "./components/ResizablePanelLayout.vue";
</script>

<template>
  <div class="w-screen h-screen">
    <!-- <div class="text-red-500">Hello</div>
    <dsButton variant="primary" size="large" :disabled="false">
      Primary Button
    </dsButton> -->
    <ResizeablePanelLayout>
      <div class="bg-red-500"></div>
      <div class="bg-blue-500"></div>
      <div class="bg-orange-500"></div>
      <div class="bg-yellow-500"></div>
      <div class="bg-green-500"></div>
    </ResizeablePanelLayout>
  </div>
</template>
