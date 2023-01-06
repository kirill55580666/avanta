<template>
  <div class="av-benefits">
    <p class="av-benefits__title">Преимущества работы с нами</p>
    <div class="av-benefits__container">
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
