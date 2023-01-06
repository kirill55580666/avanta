<template>
  <button :class="$style['aw-form-button']">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AVFormButton",
  setup() {},
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
  transition: filter 0.45s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
}
</style>
