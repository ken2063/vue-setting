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
    </div>
    <!-- //list_header -->
    <!-- guideNav -->
    <ul class="guideNav">
      <li class="la">
        <router-link to="/indexGuide">가이드 인덱스</router-link>
      </li>
      <li class="la">
        <router-link to="/indexGuide">가이드 인덱스</router-link>
      </li>
      <li class="la">
        <router-link to="/indexGuide">가이드 인덱스</router-link>
      </li>
    </ul>
    <!-- // guideNav -->

    <!-- cont -->
    <div class="cont">
      <h2>공통</h2>
      <table>
        <colgroup>
          <col span="1" width="7%" />
          <col span="1" width="7%" />
          <col span="1" width="7%" />
          <col span="1" width="7%" />
          <col span="1" width="*" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
          <col span="1" width="10%" />
          <col span="1" width="5%" />
          <col span="1" width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th class="thead">1 Depth</th>
            <th class="thead">2 Depth</th>
            <th class="thead">3 Depth</th>
            <th class="thead">4 Depth</th>
            <th class="thead">files</th>
            <th class="thead">start-Date</th>
            <th class="thead">end-Date</th>
            <th class="thead">state</th>
            <th class="thead">up-Date</th>
            <th class="thead">Log</th>
          </tr>
        </thead>
        <tbody>
          <!-- tr -->
          <tr>
            <td>1 Depth</td>
            <td>2 Depth</td>
            <td>3 Depth</td>
            <td>4 Depth</td>
            <td class="file">
              <router-link to="/indexGuide">@/views/indexGuide.vue</router-link>
            </td>
            <td>2024.04.05</td>
            <td>2024.04.08</td>
            <td>
              <div class="state">
                <p class="txt">30%</p>
                <span style="width:30%;"></span>
              </div>
            </td>
            <td>2024.04.08</td>
            <td>
              <ul class="log">
                <!-- log - li -->
                <li class="flex">
                  <p class="date">2024.04.05</p>
                  <div class="txt">그냥 수정해봄 그냥 수정해봄 그냥 수정해봄 그냥 수정해봄</div>
                </li>
                <!-- // log - li -->
                
                <!-- log - li -->
                <li class="flex">
                  <p class="date">2024.04.08</p>
                  <div class="txt">오늘도 수정해봄 오늘도 수정해봄 오늘도 수정해봄 오늘도 수정해봄</div>
                </li>
                <!-- // log - li -->
              </ul>
            </td>
          </tr>
          <!-- // tr -->
        </tbody>
      </table>
    </div>
    <!-- // cont -->

    <!-- cont -->
    <div class="cont">
      <h2>페이지</h2>
      <table>
        <colgroup>
          <col span="1" width="7%" />
          <col span="1" width="7%" />
          <col span="1" width="7%" />
          <col span="1" width="7%" />
          <col span="1" width="*" />
          <col span="1" width="5%" />
          <col span="1" width="5%" />
          <col span="1" width="10%" />
          <col span="1" width="5%" />
          <col span="1" width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th class="thead">1 Depth</th>
            <th class="thead">2 Depth</th>
            <th class="thead">3 Depth</th>
            <th class="thead">4 Depth</th>
            <th class="thead">files</th>
            <th class="thead">start-Date</th>
            <th class="thead">end-Date</th>
            <th class="thead">state</th>
            <th class="thead">up-Date</th>
            <th class="thead">Log</th>
          </tr>
        </thead>
        <tbody>
          <!-- tr -->
          <tr>
            <td>1 Depth</td>
            <td>2 Depth</td>
            <td>3 Depth</td>
            <td>4 Depth</td>
            <td class="file">
              <router-link to="/HelloWorld" target="_blank">@/views/layout/HelloWorld.vue</router-link>
            </td>
            <td>2024.04.05</td>
            <td>2024.04.08</td>
            <td>
              <div class="state">
                <p class="txt">10%</p>
                <span style="width:10%;"></span>
              </div>
            </td>
            <td>2024.04.08</td>
            <td>
              <ul class="log">
                <!-- log - li -->
                <li class="flex">
                  <p class="date">2024.04.05</p>
                  <div class="txt">그냥 수정해봄 그냥 수정해봄 그냥 수정해봄 그냥 수정해봄</div>
                </li>
                <!-- // log - li -->
              </ul>
            </td>
          </tr>
          <!-- // tr -->

          <!-- tr -->
          <tr>
            <td>1 Depth</td>
            <td>2 Depth</td>
            <td>3 Depth</td>
            <td>4 Depth</td>
            <td class="file">
              <router-link to="/DArending" target="_blank">@/views/DArending.vue</router-link>
            </td>
            <td>2024.04.08</td>
            <td>2024.04.08</td>
            <td>
              <div class="state">
                <p class="txt">100%</p>
                <span style="width:100%;"></span>
              </div>
            </td>
            <td>-</td>
            <td>
              <ul class="log">
                <!-- log - li -->
                <li class="flex">
                  <!-- 
                    <p class="date"></p>
                    <div class="txt"></div> 
                  -->
                  -
                </li>
                <!-- // log - li -->
              </ul>
            </td>
          </tr>
          <!-- // tr -->
        </tbody>
      </table>
    </div>
    <!-- // cont -->
  </div>
</template>

<style>
@import "@/assets/scss/Uiguide/guideIndex.scss";
</style>
