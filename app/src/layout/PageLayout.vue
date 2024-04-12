<script>
import DefaultHead from '@/layout/DefaultHead.vue'
import DefaultFooter from '@/layout/DefaultFooter.vue'

export default {
  name: 'PageLayout',
  components: {
    DefaultHead,
    DefaultFooter,
  }
};
</script>

<template>
    <DefaultHead/>

    <div class="container">
      <slot name="container">
        컨테이너에 들어갈 내용
      </slot>
    </div>

    <DefaultFooter/>
</template>

<style>
@import "@/assets/scss/layout/PageLayout.scss";
</style>

