<script>
export default {
  name: 'DefaultFooter',
  components: {
  },
};
</script>

<template>
  <footer>
    <!-- foot -->
    <div class="foot">
      <!-- footmenu -->
      <div class="footmenu flex">
        <div class="menuitem"><button>회사소개</button></div>
        <div class="menuitem"><button>인재채용</button></div>
        <div class="menuitem"><button>이용약관</button></div>
        <div class="menuitem"><button>개인정보처리방침</button></div>
      </div>
      <!-- // footmenu -->

      <!-- footwrap -->
      <div class="footwrap flex">
        <div class="footlogo">LOGO</div>

        <div class="foottxt">
          <address>
            경기도 안산시 선부동 선부광장 서로 42 106동 1204호
          </address>

          <span>LOGO Co., Ltd.</span>
        </div>
      </div>
      <!-- // footwrap -->
    </div>
    <!-- // foot -->
  </footer>
</template>

<style>
@import "@/assets/scss/layout/DefaultFoot.scss";
</style>