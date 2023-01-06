<template>
  <div class="av-benefits">
    <p class="av-benefits__title">Преимущества работы с нами</p>
    <div class="av-benefits__container">
      <swiper
        class="av-benefits__swiper"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
        :modules="modules"
      >
        <swiper-slide
          v-for="(benefit, index) in benefitsList"
          :key="benefit.title"
          class="av-benefits__slide"
        >
          <AVBenefitCard
            :title="benefit.title"
            :description="benefit.description"
            :index="`0${index + 1}`"
            class="av-benefits__card"
          />
        </swiper-slide>
      </swiper>
      <div ref="prev" class="swiper-button-prev"></div>
      <div ref="next" class="swiper-button-next"></div>
      <div class="av-benefits__cards">
        <div
          v-for="(benefit, index) in benefitsList"
          :key="benefit.title"
          class="av-benefits__wrapper"
        >
          <AVBenefitCard
            :title="benefit.title"
            :description="benefit.description"
            :index="`0${index + 1}`"
            class="av-benefits__card"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Benefits.scss" />
<script lang="ts" src="./Benefits.ts" />
