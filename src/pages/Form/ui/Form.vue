<template>
  <div class="av-form">
    <p class="av-form__title">Оставьте заявку</p>
    <div class="av-form__container">
      <div class="av-form__left-block">
        <form class="av-form__form-block" method="post">
          <input type="hidden" name="project_name" value="AVANTA" />
          <input type="hidden" name="admin_email" value="info@avanta-ufa.ru" />
          <input type="hidden" name="form_subject" value="Заявка" />

          <input
            class="av-form__input av-form__form-item"
            :class="{ 'av-form__form-item_focused': isNameInputActive }"
            type="text"
            name="AV-Name"
            placeholder="Ваше имя..."
            @focus="isNameInputActive = true"
            @blur="isNameInputActive = false"
          />
          <input
            class="av-form__input av-form__form-item"
            :class="{ 'av-form__form-item_focused': isSurnameInputActive }"
            type="text"
            name="AV-Phone"
            placeholder="Ваш телефон..."
            @focus="isSurnameInputActive = true"
            @blur="isSurnameInputActive = false"
          />
          <textarea
            :class="{ 'av-form__form-item_focused': isTextareaActive }"
            contenteditable="true"
            class="av-form__textarea av-form__form-item"
            rows="4"
            name="Message"
            placeholder="Есть вопрос?..."
            @focus="isTextareaActive = true"
            @blur="isTextareaActive = false"
          ></textarea>
          <AVFormButton class="av-form__button" @click="sendEmail">Отправить</AVFormButton>
        </form>
      </div>
      <div class="av-form__right-block">
        <div class="av-form__right-block_contacts">Контакты</div>
        <div class="av-form__right-block_streets">
          <p class="av-form__right-block_streets_first">г. Уфа, ул. Коммунистическая, 80 оф. 324</p>
          <p class="av-form__right-block_streets_second">avanta_info@mail.ru</p>
        </div>
        <a class="av-form__telephone av-form__telephone_first" href="tel:+73472625868"
          >+7-347-262-58-68</a
        >
      </div>
    </div>
    <div class="av-form__footer">
      <div class="av-form__footer_item">
        <p>avanta_info@mail.ru</p>
      </div>
      <div class="av-form__footer_item av-form__footer_telephone">
        <a href="tel:+73472625868">+7-347-262-58-68</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Form.scss" />
<script lang="ts" src="./Form.ts" />
