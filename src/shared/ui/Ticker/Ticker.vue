<template>
  <div class="av-ticker">
    <div
      v-for="index in 3"
      :key="'list' + index"
      class="av-ticker__list"
      :style="{ animation: `ticker ${duration}s infinite linear` }"
    >
      <template v-for="(word, index) in words" :key="word + index">
        <div class="av-ticker__word">{{ word }}</div>
        <span class="av-ticker__decorator"></span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AVTicker",
  props: {
    words: {
      type: Array as PropType<string[]>,
      default: () => ["Слова", "Для", "Теста"],
    },
    duration: {
      type: Number as PropType<number>,
      default: 15,
    },
  },
});
</script>

<style lang="scss">
.av-ticker {
  display: flex;
}
.av-ticker__list {
  flex: 1 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.av-ticker__word {
  font-size: 24px;
  font-weight: 500;
  color: var(--secondary-color);
  text-transform: uppercase;
  white-space: nowrap;
}

.av-ticker__decorator {
  display: block;
  width: 40px;
  height: 5px;
  background-color: var(--secondary-color);
  margin: 0 30px;
}

@keyframes ticker {
  100% {
    transform: translateX(-100%);
  }
}
</style>
