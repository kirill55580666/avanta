import { defineComponent, onUnmounted, ref, watch } from "vue";
import { useStore } from "vuex";
import AVArrowButton from "@/shared/ui/ArrowButton/ArrowButton.vue";
import { Directions } from "@/shared/ui/ArrowButton/ArrowButton.vue";

const links: string[] = ["Главная", "Преимущества", "О нас", "Оформите заявку"];

export default defineComponent({
  name: "AVSidebar",
  components: {
    AVArrowButton,
  },
  setup() {
    const store = useStore();

    const swiperInstance = ref();

    const isActiveIndex = (currentIndex: number) => currentIndex === activeIndex.value;

    const activeIndex = ref(0);

    watch(
      () => store.state.swiperInstance,
      () => {
        swiperInstance.value = ref(store.state.swiperInstance);
      }
    );

    const idInterval = setInterval(
      () => (activeIndex.value = swiperInstance.value?.value?.activeIndex),
      200
    );
    onUnmounted(() => {
      clearInterval(idInterval);
    });

    const prevClickHandler = () => {
      swiperInstance?.value?.value?.slidePrev?.();
    };
    const nextClickHandler = () => {
      swiperInstance?.value?.value?.slideNext?.();
    };
    const toClickHandler = (index: number) => {
      swiperInstance?.value?.value?.slideTo?.(index);
    };

    return {
      nextClickHandler,
      prevClickHandler,
      toClickHandler,
      links,
      isActiveIndex,
      Directions,
      activeIndex,
    };
  },
});
