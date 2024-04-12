<script>
export default {
  name: 'DefaultLayout',
  components: {
  }
};
</script>

<template>
  <!-- wrap -->
  <div id="wrap">
    <router-view /><!-- 추가 -->
  </div>
  <!-- // wrap -->
</template>

<style>
@import "@/assets/scss/layout/DefaultLayout.scss";
</style>

