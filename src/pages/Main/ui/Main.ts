import { defineComponent, ref, watch } from "vue";
import AVFormButton from "@/shared/ui/FormButton/FormButton.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AVMainPage",
  components: {
    AVFormButton,
  },
  setup() {
    const store = useStore();
    const swiperInstance = ref();

    watch(
      () => store.state.swiperInstance,
      () => {
        swiperInstance.value = ref(store.state.swiperInstance);
      }
    );

    const clickHandler = () => {
      swiperInstance?.value?.value?.slideTo?.(3);
    };

    return {
      clickHandler,
    };
  },
});
