import { defineComponent, ref } from "vue";
import AVFormButton from "@/shared/ui/FormButton/FormButton.vue";

import emailjs from "@emailjs/browser";

export default defineComponent({
  name: "AVForm",
  components: {
    AVFormButton,
  },
  setup() {
    const isNameInputActive = ref<boolean>(false);
    const isSurnameInputActive = ref<boolean>(false);
    const isTextareaActive = ref<boolean>(false);

    const ref1 = ref();
    const ref2 = ref();
    const ref3 = ref();

    const textButton = ref<string>("Отправить");
    const isDisabled = ref<boolean>(false);

    const refForm = ref();
    const sendEmail = async () => {
      textButton.value = "Отправляем";
      emailjs
        .sendForm("service_2r7zt9e", "template_glmtggt", refForm.value, "ORLMCDVXN-q2j6N2V")
        .then(
          (result) => {
            isDisabled.value = true;
            textButton.value = "Отправлено";
            ref1.value = "";
            ref2.value = "";
            ref3.value = "";
          },
          (error) => {
            isDisabled.value = true;
            textButton.value = "Не отправлено";
            ref1.value = "";
            ref2.value = "";
            ref3.value = "";
          }
        );
    };

    return {
      refForm,
      sendEmail,
      isNameInputActive,
      isSurnameInputActive,
      isTextareaActive,
      ref1,
      ref2,
      ref3,
      textButton,
      isDisabled,
    };
  },
});
