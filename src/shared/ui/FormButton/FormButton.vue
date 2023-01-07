<template>
  <button
    :disabled="disabled"
    :class="[$style['aw-form-button'], { [$style['aw-form-button__disabled']]: disabled }]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AVFormButton",
  props: {
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
});
</script>

<style lang="scss" module>
.aw-form-button {
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  font-weight: 400;
  border-radius: 35px;
  width: 300px;
  height: 70px;
  background-color: transparent;
  transition: filter 0.45s, opacity 0.45s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
}
.aw-form-button__disabled {
  opacity: 0.5;
  &:hover {
    filter: brightness(1);
  }
}
</style>
