<template>
  <AVSidebar />
  <AVSwiper :pages="pages" />
</template>

<style lang="scss" src="./styles/index.scss" />
<script lang="ts">
import { defineComponent, ref } from "vue";

import { AVSidebar } from "@/widgets/Sidebar";
import AVSwiper from "@/shared/ui/AVSwiper/AVSwiper.vue";

import { AVMainPage } from "@/pages/Main/index";
import { AVBenefitsPage } from "@/pages/Benefits/index";
import { AVAboutPage } from "@/pages/About/index";
import { AVFormPage } from "@/pages/Form/index";

export default defineComponent({
  name: "App",
  components: {
    AVSidebar,
    AVSwiper,
  },
  setup() {
    const pages = [AVMainPage, AVBenefitsPage, AVAboutPage, AVFormPage];

    return {
      pages,
    };
  },
});
</script>
