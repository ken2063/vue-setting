<script>
import PageLayout from '@/layout/PageLayout.vue';
import MainBanner from '@/components/main/MainBanner.vue';
import DefaultNav from '@/components/nav/DefaultNav.vue';

export default {
  name: "NormalLayout",
  components: {
    PageLayout,
    MainBanner,
    DefaultNav,
  },

  data (){
    return {
      Nav : ['상의','아우터','바지','신발','가방','ACC'],
    }
  }
}
</script>

<template>
  <PageLayout>
    <template #container>
      <DefaultNav :Nav="Nav"/>

      <MainBanner/>

      <!-- m_section -->
      <section class="m_section">
        <!-- LayoutLeft -->
        <div class="LayoutLeft">
          <div class="LLsction01">
            <ul class="flex">
              <li>혜택 모아보기</li>
              <li>첫 구매 쿠폰</li>
              <li>아이코닉</li>
              <li>검색량 TOP 10</li>
            </ul>
          </div>

          <div></div>
        </div>
        <!-- // LayoutLeft -->

        <!-- LayoutRight -->
        <div class="LayoutRight">
          <div class="login">
            <p class="tit">간편하게 로그인하고<span>편리한 기능을 사용해보세요.</span></p>
            <button class="btnlogin">로그인 시작하기</button>

            <div class="findbox flex">
              <button class="idtxt">아이디</button>
              <button class="pwtxt">비밀번호 찾기</button>
              <button class="jointxt">회원가입</button>
            </div>
          </div>

        </div>
        <!-- // LayoutRight -->
      </section>
      <!-- // m_section -->

    </template>
  </PageLayout>
</template>

<style>
@import "@/assets/scss/components/main/DefaultMain.scss";
</style>