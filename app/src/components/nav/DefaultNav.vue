<script>
export default {
  name: "DefaultNav",
  components: {},
  props: {
    Nav: Array,
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

    <li class="menu--item">
      <button
        class="btnetc"
        @click="$event.target.classList.toggle('active')"
      ></button>

      <div class="etcwrap">
        <div class="etcbox">
          <div>
            <p class="tit">안녕하십쇼</p>
          </div>
        </div>
        <div class="etcback"></div>
      </div>
    </li>
  </ul>
</template>

<style>
@import "@/assets/scss/components/nav/DefaultNav.scss";
</style>
