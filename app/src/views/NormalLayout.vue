<script>
import PageLayout from '@/layout/PageLayout.vue';
import DefaultNav from '@/components/nav/DefaultNav.vue';

export default {
  name: "NormalLayout",
  components: {
    PageLayout,
    DefaultNav,
  },

  data (){
    return {
      Nav : ['소주','맥주' ,'와인', '위스키', '럼', '보드카', '꼬냑'],
    }
  }
}
</script>

<template>
  <PageLayout>
    <template #container>
      <DefaultNav :Nav="Nav"/>

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