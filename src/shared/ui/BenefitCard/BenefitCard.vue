<template>
  <div :class="$style['av-benefit-card']">
    <p :class="$style['av-benefit-card__title']">{{ title }}</p>
    <p :class="$style['av-benefit-card__description']">{{ description }}</p>
    <div :class="$style['av-benefit-card__index']">
      {{ index }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AVBenefitCard",
  props: {
    title: {
      type: String as PropType<string>,
      default: "",
    },
    description: {
      type: String as PropType<string>,
      default: "",
    },
    index: {
      type: String as PropType<string>,
      default: "01",
    },
  },
});
</script>

<style lang="scss" module>
.av-benefit-card {
  width: 200px;
  height: 150px;
  position: relative;
  z-index: 1;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
}
.av-benefit-card__title {
  color: var(--secondary-color);
  font-size: 32px;
  margin-bottom: 10px;
  line-height: 1.75;
}
.av-benefit-card__description {
  font-weight: 400;
  line-height: 1.75;
  font-size: 14px;
}
.av-benefit-card__index {
  color: var(--background-font-color);
  position: absolute;
  left: -125px;
  bottom: 0;
  font-size: 250px;
  z-index: -1;
  @media (max-width: 576px) {
    left: -75px;
    bottom: 0;
  }
}
</style>
