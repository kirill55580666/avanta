<template>
  <div class="av-sidebar">
    <div>
      <h1 class="av-sidebar__title" @click="toClickHandler(0)">АВАНТА</h1>
      <div class="av-sidebar__links">
        <a
          v-for="(link, index) in links"
          :key="link"
          class="av-sidebar__link"
          :class="{
            'av-sidebar__link_active': isActiveIndex(index),
          }"
          @click="toClickHandler(index)"
        >
          {{ link }}
        </a>
      </div>
    </div>
    <div class="av-sidebar__buttons">
      <AVArrowButton
        class="av-sidebar__button av-sidebar__button_first"
        :direction="Directions.DOWN"
        :disabled="!(activeIndex < links.length - 1)"
        @click="nextClickHandler"
      />
      <AVArrowButton
        :disabled="activeIndex === 0"
        class="av-sidebar__button av-sidebar__button_second"
        :direction="Directions.UP"
        @click="prevClickHandler"
      />
    </div>
  </div>
</template>

<style lang="scss" src="./Sidebar.scss"></style>
<script lang="ts" src="./Sidebar.ts" />
