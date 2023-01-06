<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(page, index) in pages" :key="`swiper${index}`">
      <component :is="page" />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";
import { useStore } from "vuex";

export default defineComponent({
  name: "AVSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    pages: {
      type: Array as PropType<any[]>,
    },
  },
  setup(props) {
    const swiper = ref();
    const store = useStore();

    onMounted(() => {
      //@ts-ignore
      swiper.value = document.querySelector(".mySwiper")?.swiper;
      store.dispatch("setSwiperInstance", swiper);
    });
    return {
      modules: [Mousewheel, Pagination],
    };
  },
});
</script>

<style lang="scss">
.mySwiper {
  width: calc(100% - var(--sidebar-width));
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
}
</style>
