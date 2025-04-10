<script setup lang="ts">
import { useSlots, ref, onMounted } from "vue";
import type { VNode } from "vue";
// import { useResizeObserver } from "@vueuse/core";
// import { useDraggable } from "@vueuse/core";
// import { useDroppable } from "@vueuse/core";

type PanelSize = [number, number];

type DockLayoutProps = {
  initialColCount?: number;
  initialRowCount?: number;
  initialPanelSizes?: PanelSize[];
};

const props = withDefaults(defineProps<DockLayoutProps>(), {
  initialColCount: 3,
  initialRowCount: 2,
});

const slots = useSlots();
const slotElements = ref<VNode[]>([]);

let baseWidthPercentage: string;
let baseHeightPercentage: string;

onMounted(() => {
  slotElements.value = slots.default?.() || [];
  baseWidthPercentage = `${100 / (props.initialColCount || 1)}%`;
  baseHeightPercentage = `${100 / (props.initialRowCount || 1)}%`;
});
</script>

<template>
  <div class="flex h-full w-full flex-wrap bg-emerald-200 p-4">
    <div
      v-for="(slotElement, index) in slotElements"
      :key="index"
      class="`w-[${baseWidthPercentage}] h-[${baseHeightPercentage}]`"
    ></div>
  </div>
</template>
