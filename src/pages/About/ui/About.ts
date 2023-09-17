import { defineComponent } from "vue";
import AVTicker from "@/shared/ui/Ticker/Ticker.vue";

const words1 = [
  "PARKER",
  "АО ПО “Элтехника”",
  "АВВ",
  "Schneider Electric",
  "Siemens",
  "Wago",
  "Weidmueller",
  "Danfoss",
  "Legrand",
  "ATEKON",
  "HollySys",
  "FESTO",
  "YOKOGAWA",
  "Phoenix Contact",
  "Cummins",
  "WIKA",
  "МОХА",
  "Энергоарсенал",
];
const words2 = [
  "Аванта",
  "Поддержка",
  "Аванта",
  "Подход",
  "Аванта",
  "Цены",
  "Аванта",
  "Честность",
  "Аванта",
  "Замещение",
  "Аванта",
  "Открытость",
  "Аванта",
  "Профессионализм",
];

export default defineComponent({
  name: "AVAboutPage",
  components: {
    AVTicker,
  },
  setup() {
    return {
      words1,
      words2,
    };
  },
});
