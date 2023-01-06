import { defineComponent, ref } from "vue";
import AVBenefitCard from "@/shared/ui/BenefitCard/BenefitCard.vue";
import AVArrowButton from "@/shared/ui/ArrowButton/ArrowButton.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

interface IBenefit {
  title: string;
  description: string;
}

const benefitsList: IBenefit[] = [
  {
    title: "Поддержка",
    description: "полная техническая и информационная поддержка, реализация проектов «ПОД КЛЮЧ»",
  },
  {
    title: "Замещение",
    description:
      "при необходимости, полноценное замещение продукции ведущих европейских производителей по вашей спецификации и проекту",
  },
  {
    title: "Подход",
    description: "индивидуальный подход к каждому клиенту",
  },
  {
    title: "Цены",
    description: "поставка оборудования по ценам завода-изготовителя",
  },
  {
    title: "Честность",
    description:
      "честное ведение бизнеса нацеленное на долгосрочное взаимовыгодное сотрудничество, высокий профессионализм коллектива",
  },
  {
    title: "Повод",
    description: "не придумали",
  },
];

export default defineComponent({
  name: "AVBenefitsPage",
  components: {
    AVBenefitCard,
    AVArrowButton,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      benefitsList,
      modules: [Navigation],
      prev,
      next,
    };
  },
});
