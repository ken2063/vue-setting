<script>
import pageContainer from '@/views/layout/pageContainer.vue'

export default {
  name: 'layoutSetting',
  components: {
    pageContainer,
  },
};
</script>

<template>
  <div class="wrap">
  <router-view /><!-- 추가 -->
    <pageContainer>
    </pageContainer>
  </div>
</template>

<style>
@import "@/assets/scss/Uiguide/layoutSetting.scss";
</style>

