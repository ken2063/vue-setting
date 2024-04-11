<script>
export default {
  name: 'defaultMenuContent',
};
</script>

<template>
  <div class="defaultMenuContent">
    <div class="pop_head">
      <p class="pop_tit">메뉴</p>
      <button type="button" @click="$emit('close-modal')" class="closeBtn">
        <img src="@/assets/images/common/close.svg" alt="close" />
      </button>
    </div>
    
    <div class="pop_cont">
      데이터
    </div>
  </div>
</template>

<style>
</style>