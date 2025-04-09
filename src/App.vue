<script setup lang="ts">
import dsButton from "./components/ui/dsButton.vue";
</script>

<template>
  <div>
    <div class="text-red-500">Hello</div>
    <dsButton variant="primary" size="large" :disabled="false">
      Primary Button
    </dsButton>
  </div>
</template>
