<template>
  <div class="av-main">
    <div>
      <h2 class="av-main__title">Продажа электрооборудования</h2>
      <h3 class="av-main__subtitle">
        многолетний опыт реализации проектов в сфере поставок оборудования и строительства
        инженерной энергетической инфраструктуры
      </h3>
      <AVFormButton class="av-main__button" @click="clickHandler">ОСТАВЬ ЗАЯВКУ</AVFormButton>
    </div>
    <img class="av-main__image" :src="imgSrc" />
  </div>
</template>

<style lang="scss" src="./Main.scss" />
<script lang="ts" src="./Main.ts" />
