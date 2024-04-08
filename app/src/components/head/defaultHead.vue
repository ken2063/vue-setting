<script>
import defaultMenu from '@/components/head/defaultMenu.vue'

export default {
  name: 'defaultHead',
  components: {
    defaultMenu,
  },
};
</script>

<template>
  <header>
    <h1>
      <a href="#"></a>
    </h1>
    <defaultMenu class="hamButton"></defaultMenu>
  </header>
</template>

<style>
@import "@/assets/scss/Uiguide/defaulthead.scss";
</style>