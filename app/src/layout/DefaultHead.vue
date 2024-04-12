<script>
import DefaultMenu from '@/components/head/DefaultMenu.vue'

export default {
  name: 'DefaultHead',
  components: {
    DefaultMenu,
  },
};
</script>

<template>
  <header>
    <h1>
      <a href="#"></a>
    </h1>
    <DefaultMenu class="hamButton"></DefaultMenu>
  </header>
</template>

<style>
@import "@/assets/scss/Uiguide/DefaultHead.scss";
</style>