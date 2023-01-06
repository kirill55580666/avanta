import { defineComponent } from "vue";
import AVBenefitCard from "@/shared/ui/BenefitCard/BenefitCard.vue";

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
    description:
      "не придумали",
  },
];

export default defineComponent({
  name: "AVBenefitsPage",
  components: {
    AVBenefitCard,
  },
  setup() {
    return {
      benefitsList,
    };
  },
});
