<template>
  <div class="flex-grid-container">
    <div
      v-for="(dimension, index) in gridDimensions"
      :key="index"
      class="grid-item"
      :style="getItemStyle(dimension)"
    >
      <slot :name="`item-${index}`">
        Item {{ index + 1 }}: {{ dimension[0] }}x{{ dimension[1] }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

type GridDimension = [number, number]; // [width, height]

export default defineComponent({
  name: "FlexGrid",
  props: {
    gridDimensions: {
      type: Array as PropType<GridDimension[]>,
      required: true,
    },
    baseSize: {
      type: Number,
      default: 100, // Base size in pixels for a 1x1 grid cell
    },
    gap: {
      type: Number,
      default: 10, // Gap between grid items in pixels
    },
  },
  methods: {
    getItemStyle(dimension: GridDimension) {
      const [width, height] = dimension;
      return {
        width: `calc(${width * this.baseSize}px + ${(width - 1) * this.gap}px)`,
        height: `calc(${height * this.baseSize}px + ${
          (height - 1) * this.gap
        }px)`,
        margin: `${this.gap / 2}px`,
        flexGrow: 0,
        flexShrink: 0,
      };
    },
  },
});
</script>

<style scoped>
.flex-grid-container {
  display: flex;
  flex-wrap: wrap;
  margin: -5px; /* Half the gap to offset the margin on items */
  width: 100%;
}

.grid-item {
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
