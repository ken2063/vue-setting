<script>
export default {
  name: "DefaultNav",
  components: {},
  props: {
    Nav: Array,
  },

  data() {
    return {
      show: false,
    };
  },
};
</script>

<template>
  <div class="menuwrap">
    <ul class="menu">
      <li class="menu--item" v-for="(item, i) in Nav" :key="i">
        <a :href="'/' + item">
          <div class="items"></div>
          <span class="txt">{{ item }}</span>
        </a>
      </li>

      <li class="menu--item" @click="$event.target.classList.toggle('active')">
        <button class="btnetc" @click="show = !show"></button>
      </li>
    </ul>

    <div class="etcwrap" v-if="show">
      <div class="etcbox">
        <div>
        </div>
      </div>
      <!-- <div class="etcback"></div> -->
    </div>
  </div>
</template>

<style>
@import "@/assets/scss/components/nav/DefaultNav.scss";
</style>
