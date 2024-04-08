<script>
import defaultMenuContent from '@/components/head/defaultMenuContent.vue'

export default {
  name: 'defaultMenu',
  components : {
    defaultMenuContent
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
    <defaultMenuContent v-if="isModalViewed" @close-modal="isModalViewed = false" />
  </div>
</template>

<style>
</style>