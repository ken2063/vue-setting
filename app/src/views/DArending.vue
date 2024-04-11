<script>
import defaultHead from '@/components/head/defaultHead.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import pageContainer from '@/views/layout/pageContainer.vue'


export default {
  components: {
    defaultHead,
    HelloWorld,
    pageContainer,
  }
}
</script>

<template>
  <defaultHead />
  <pageContainer>
    <HelloWorld />
  </pageContainer>
</template>

<style>
</style>