<script>
import PageLayout from '@/layout/PageLayout.vue';

export default {
  name: "NormalLayout",
  components: {
    PageLayout,
  },

  data (){
    return {
    }
  }
}
</script>

<template>
  <PageLayout>
    <template #container>
      <section>
        컨테이너 바꾼 내용<br/>
        최석 정신차려라<br/>
        뷰 셋팅 해보즈아
      </section>
    </template>
  </PageLayout>
</template>

<style>
</style>