<script>
import DefaultMenuContent from '@/components/head/DefaultMenuContent.vue'

export default {
  name: 'defaultMenu',
  components : {
    DefaultMenuContent
  },
  data() {
    return {
      isModalViewed: false,
    }
  },
};
</script>

<template>
  <div>
    <button class="menuBtn" @click="isModalViewed = true">
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </button>
    <DefaultMenuContent v-if="isModalViewed" @close-modal="isModalViewed = false" />
  </div>
</template>

<style>
</style>