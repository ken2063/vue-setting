<script>
import PageLayout from "@/layout/PageLayout.vue";
import MainBanner from "@/components/main/MainBanner.vue";
import DefaultNav from "@/components/nav/DefaultNav.vue";

import MainTab01 from "@/components/main/MainTab01.vue";
import MainTab02 from "@/components/main/MainTab02.vue";
import MainTab03 from "@/components/main/MainTab03.vue";
import MainTab04 from "@/components/main/MainTab04.vue";

export default {
  name: "NormalLayout",
  components: {
    PageLayout,
    MainBanner,
    DefaultNav,

    MainTab01,
    MainTab02,
    MainTab03,
    MainTab04,
  },

  data() {
    return {
      Nav: ["상의", "아우터", "바지", "신발", "가방", "ACC"],

      currentTab: 0,
      tabList: [
        { name: "혜택 모아보기" },
        { name: "첫 구매 쿠폰" },
        { name: "아이코닉" },
        { name: "검색량 TOP 10" },
      ],
      employList: [
        { title: "", sub: "" }
      ],

    };
  },
};
</script>

<template>
  <PageLayout>
    <template #container>
      <DefaultNav :Nav="Nav" />

      <MainBanner />

      <!-- m_section -->
      <section class="m_section">
        <!-- LayoutLeft -->
        <div class="LayoutLeft">
          <div class="LLsction01">
            <div class="tabbutton flex">
              <button
                v-for="(tab, index) in tabList"
                :key="index"
                @click.prevent="currentTab = index"
                :class="{'active' : currentTab === index}"
              >
                {{ tab.name }}
              </button>
            </div>

            <div class="tabcon">
              <ul class="tab-content" v-if="currentTab === 0">
                <li v-for="(item, index) in employList" :key="index">
                  <MainTab01/>
                </li>
              </ul>
              <ul class="tab-content" v-if="currentTab === 1">
                <li v-for="(item, index) in employList" :key="index">
                  <MainTab02/>
                </li>
              </ul>
              <ul class="tab-content" v-if="(currentTab === 2)">
                <li v-for="(item, index) in employList" :key="index">
                  <MainTab03/>
                </li>
              </ul>
              <ul class="tab-content" v-if="(currentTab === 3)">
                <li v-for="(item, index) in employList" :key="index">
                  <MainTab04/>
                </li>
              </ul>
            </div>
          </div>

          <div></div>
        </div>
        <!-- // LayoutLeft -->

        <!-- LayoutRight -->
        <div class="LayoutRight">
          <!-- login -->
          <div class="login">
            <p class="tit">
              간편하게 로그인하고<span>편리한 기능을 사용해보세요.</span>
            </p>
            <button class="btnlogin">로그인 시작하기</button>

            <div class="findbox flex">
              <button class="idtxt">아이디</button>
              <button class="pwtxt">비밀번호 찾기</button>
              <button class="jointxt">회원가입</button>
            </div>
          </div>
          <!-- // login -->

          <div class="LRbanner">
            <a href="#">
              <div class="txtbox">
                <p class="tit">banner text<span></span></p>
                <span class="txt">banner date</span>
              </div>
            </a>
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
