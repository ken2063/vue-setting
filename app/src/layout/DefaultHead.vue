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
    <div class="head">
      <h1>
        <a href="#" title="LOGO">LOGO</a>
      </h1>
      <DefaultMenu class="hamButton"></DefaultMenu>
    </div>
  </header>
</template>

<style>
@import "@/assets/scss/layout/DefaultHead.scss";
</style>