<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: "primary",
      secondary: "secondary",
    },
    size: {
      small: "small",
      medium: "medium",
    },
    disabled: {
      true: "disabled",
      false: "enabled",
    },
  },
});
</script>

<template></template>
