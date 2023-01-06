import { defineComponent } from "vue";
import AVTicker from "@/shared/ui/Ticker/Ticker.vue";

const words1 = [
  "Партнёры",
  "Элтехника",
  "Партнёры",
  "МИТСАН ЛАЙТИНГ",
  "Партнёры",
  "КМИ",
  "Партнёры",
  "Чинт Электрик",
  "Партнёры",
  "Форэнерджи",
  "Партнёры",
  "Казаньгидропласт",
  "Партнёры",
  "ЭКОКАБЕЛЬ",
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
