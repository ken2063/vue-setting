<script>
export default {
  name: "DefaultNav",
  components: {
  },
  props : {
    Nav : Array
  },
};
</script>

<template>
  <ul class="menu">
    <li class="menu--item" v-for="(item, i) in Nav" :key="i">
      <a :href="'/' + item">
        <div class="items"></div>
        <span class="txt">{{ item }}</span>
      </a>
    </li>
  </ul>
</template>

<style>
@import "@/assets/scss/components/nav/DefaultNav.scss";
</style>
