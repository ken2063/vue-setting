<script>
export default {
  name: "indexGuide",
};
</script>

<template>
  <!-- wrap -->
  <div id="wrap">
    <!-- list_header -->
    <div class="list_header">
      <h1>VUE - SETTING</h1>
      <p class="info">Publishing List</p>
      <div class="proc_wrap"></div>
    </div>
    <!-- //list_header -->

    <ul class="guideNav on">
      <li class="la">
        <router-link to="/indexGuide"
                >가이드 인덱스</router-link
              >
      </li>
      <li class="la">
        <router-link to="/indexGuide"
                >가이드 인덱스</router-link
              >
      </li>
      <li class="la">
        <router-link to="/indexGuide"
                >가이드 인덱스</router-link
              >
      </li>
    </ul>

    <h2 id="notice">공통</h2>
    <div class="cont">
      <table>
        <colgroup>
          <col span="1" width="10%" />
          <col span="1" width="10%" />
          <col span="1" width="10%" />
          <col span="1" width="*" />
          <col span="1" width="10%" />
          <col span="1" width="10%" />
          <col span="1" width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">1 Depth</th>
            <th scope="col">2 Depth</th>
            <th scope="col">3 Depth</th>
            <th scope="col">파일명</th>
            <th scope="col">Date</th>
            <th scope="col">상태</th>
            <th scope="col">Log</th>
          </tr>
        </thead>
        <tbody>
          <tr class="ed">
            <td class="center">가이드 인덱스</td>
            <td class="center"></td>
            <td class="center"></td>
            <!-- <td class="url"><a href="/DArending" target="_blank">랜딩</a></td> -->
            <td class="url">
              <router-link to="/indexGuide"
                >가이드 인덱스</router-link
              >
            </td>
            <td class="center">날짜</td>
            <td class="center state"><i class="red">완료</i></td>
            <td></td>
          </tr>

          <tr class="ed">
            <td class="center">헬로월드</td>
            <td class="center"></td>
            <td class="center"></td>
            <!-- <td class="url"><a href="/DArending" target="_blank">랜딩</a></td> -->
            <td class="url">
              <router-link to="/HelloWorld"
                >헬로월드</router-link
              >
            </td>
            <td class="center">날짜</td>
            <td class="center state">80%</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
@import "@/assets/scss/Uiguide/guideIndex.scss";
</style>
