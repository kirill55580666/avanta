<template>
  <button
    :class="[$style['aw-arrow-button'], { [$style['aw-arrow-button_disabled']]: disabled }]"
    @click.stop="disabled && empty()"
  >
    <img :class="[$style['aw-arrow-button__icon']]" :src="iconSrc" />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export enum Directions {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export default defineComponent({
  name: "AVArrowButton",
  props: {
    direction: {
      type: String as PropType<Directions>,
      default: Directions.UP,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    const iconSrc = computed(() => {
      switch (props.direction) {
        case Directions.UP: {
          return require("@/shared/assets/icons/arrow-up.svg");
        }
        case Directions.DOWN: {
          return require("@/shared/assets/icons/arrow-down.svg");
        }
        default: {
          return require("@/shared/assets/icons/arrow-up-solid.svg");
        }
      }
    });

    const empty = () => {};

    return {
      empty,
      iconSrc,
    };
  },
});
</script>

<style lang="scss" module>
.aw-arrow-button {
  width: var(--arrow-button-width);
  height: var(--arrow-button-width);
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &_disabled {
    opacity: 0.5;
  }
}
.aw-arrow-button__icon {
  width: 60%;
  height: 60%;
}
</style>
