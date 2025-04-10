<script setup lang="ts">
import { computed } from "vue";

// Define the props for the button component
// using TypeScript for type safety
type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
};

// Set up the props with default values
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "medium",
  disabled: false,
});

// Computed property to generate the class names based on props
// This will help in applying different styles based on the variant and size
const classes = computed(() => {
  const baseClasses = "px-4 py-2 rounded focus:outline-none";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    tertiary:
      "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-50",
  };
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };
  const disabledClasses = "opacity-50 cursor-not-allowed";

  // Combine the base classes with variant, size, and disabled classes
  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.disabled ? disabledClasses : "",
  ].join(" ");
});
</script>

<template>
  <!-- Use the computed classes in the button element -->
  <button :class="classes"><slot></slot></button>
</template>
