<template>
  <div class="av-about">
    <p class="av-about__title">О нас</p>
    <p class="av-about__description">
      Группа компаний <span class="av-about__highlight">«АВАНТА»</span> вобрала в себя многолетний
      опыт реализации проектов в сфере строительства инженерной энергетической инфраструктуры и
      предлагает Вам рассмотреть возможность взаимовыгодного сотрудничества в области
      <span class="av-about__highlight">проектирования</span>,
      <span class="av-about__highlight">производства</span> и
      <span class="av-about__highlight">поставок</span><span>&nbsp;</span>
      <span class="av-about__highlight">электрооборудования</span> 0,4-6-10-20 кВ (КСО-366, КСО-298,
      КРУ-Т, ШРНН 0,4кВ, бетонных трансформаторных подстанций БКТП до 2500 кВа, распределительных
      подстанций БРТП) для наружных и внутренних сетей электроснабжения,
      <span class="av-about__highlight">светотехнической продукции</span>, полиэтиленовых и
      гофрированных <span class="av-about__highlight">труб</span> для систем водоснабжения,
      канализации и газификации диаметром до 800мм, а также выполнения комплекса
      <span class="av-about__highlight">строительно-монтажных</span> и
      <span class="av-about__highlight">пусконаладочных работ</span>
    </p>
    <AVTicker class="av-about__ticker av-about__ticker_first" :words="words1" :duration="40" />
    <AVTicker class="av-about__ticker av-about__ticker_second" :words="words2" :duration="40" />
  </div>
</template>

<style lang="scss" src="./About.scss" />
<script lang="ts" src="./About.ts" />
