import { defineComponent, ref } from "vue";
import AVFormButton from "@/shared/ui/FormButton/FormButton.vue";
import axios from "axios";

export default defineComponent({
  name: "AVForm",
  components: {
    AVFormButton,
  },
  setup() {
    const isNameInputActive = ref<boolean>(false);
    const isSurnameInputActive = ref<boolean>(false);
    const isTextareaActive = ref<boolean>(false);

    async function sendEmail(name: string, email: string, subject: string, message: string) {
      const data = JSON.stringify({
        Messages: [
          {
            From: { Email: "info@avanta-ufa.ru", Name: "Дмитрий" },
            To: [{ Email: email, Name: name }],
            Subject: subject,
            TextPart: message,
          },
        ],
      });

      axios
        .post("mail.php", data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      sendEmail,
      isNameInputActive,
      isSurnameInputActive,
      isTextareaActive,
    };
  },
});
