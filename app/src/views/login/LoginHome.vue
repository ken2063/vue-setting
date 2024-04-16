<script>
export default {
  name: "LoginHome",
  components: {},

  data() {
    return {};
  },
};
</script>

<template>
  <section class="loginwrap">
    <div class="txtbox">
      <h1><a href="#" title="logo">LOGO</a></h1>
      <p class="txt">로그인으로 {LOGO} 서비스를 이용하실 수 있습니다.</p>
    </div>

    <div>
      <input type="text" class="intxt loginid" />
      <input type="text" class="intxt loginpw" />
    </div>

    <button class="btnlogin">로그인</button>

    <div class="findbox flex">
      <button class="idtxt">아이디</button>
      <button class="pwtxt">비밀번호 찾기</button>
      <button class="jointxt">회원가입</button>
    </div>
  </section>
</template>

<style>
@import "@/assets/scss/components/login/LoginHome.scss";
</style>
