<script>
export default {
  
};
</script>

<template>
  <!-- list_header -->
  <div class="list_header">
    <h1>VUE - SETTING</h1>
    <p class="info">Publishing List</p>
    <div class="proc_wrap"></div>
	</div>
	<!-- //list_header -->
<!-- wrap -->
<div id="wrap">
  <h2 id="notice">공통</h2>
  <div class="cont">
  <table>
    <colgroup>
      <col span="1" width="10%">
      <col span="1" width="10%">
      <col span="1" width="10%">
      <col span="1" width="*">
      <col span="1" width="10%">
      <col span="1" width="10%">
      <col span="1" width="10%">
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
          <router-link to="/indexGuide" target="_blank">가이드 인덱스</router-link>
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
          <router-link to="/HelloWorld" target="_blank">헬로월드</router-link>
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
  * { margin: 0; padding: 0; }
   a{color:#444;text-decoration:none;}
   a:hover{color:#444;}
   a:visited,a:focus,a:active{color:#444;}
   .list_header{/*position:fixed;left:0;top:0;*/width:100%;height:100px;padding:40px;background:#fff;box-sizing:border-box;z-index:10;}
   h1{font-size:30px;letter-spacing:-1px;font-weight:800;}
   .guide{margin:10px 0 5px 0;text-align:right;}
   #wrap{padding:40px;}
   .red{color:#e80000 !important}
   .blue td.blue{color:#0b00c7 !important}
   h2{padding:10px 0 10px 15px;font-size:15px;border:1px solid #444;border-bottom:none;background:#595959;color:#fff;font-weight:500;}
   caption{display:none;}
   div.cont{border-top:1px solid #444;}
   table{border-collapse:collapse;width:100%;border-spacing:0;}
   table thead th{padding:7px 3px;border:1px solid #ccc;background:#eee;font-size:15px;}
   table tbody td{padding:7px 3px;background:#e5e5e5;border:1px solid #ccc;text-align:left;color:#898989;font-size:14px;color:rgba(0,0,0,0.2); padding: 0 10px; }
   table tbody td:first-child { text-align:center; }
   table tbody td a{color:rgba(0,0,0,0.2);}
   table tbody td.center{padding:7px 10px;text-align:center;}
   table tbody td.left{padding:7px 10px;text-align:left;}
   table tbody td.url{padding:7px 10px;text-align:left;}
   table tbody tr.hidden td{display:table-cell;background:#f5f5f5;color:#898989;text-decoration:line-through;opacity:1;}
   table tbody tr.temp td{display:table-cell;background:#dbe7e1;color:#444;opacity:1;}
   table tbody tr.ing td{display:table-cell;background:#fffbe6;color:#444;}
   table tbody tr.ed td{display:table-cell;background:#fff;color:#444;transition:all 0.4s}
   table tbody tr.ed.blue td.blue:hover{color:#fff !important}
   table tbody tr.ed.add td{display:table-cell;background:#d9eafd;color:#444;}
   table tbody tr.ed.mod td{display:table-cell;background:#d9eafd;color:#e80000!important}
   table tbody tr.temp.mod td{display:table-cell;background:#d9eafd;color:#e80000!important}
   table tbody tr.ed.cfm{text-decoration:line-through;}
   table tbody tr.hidden a,table tbody tr.temp a,table tbody tr.ing a,table tbody tr.ed a{color:#444;}
   .proc_wrap{margin:0 0 20px; text-align:right}
   .proc_wrap strong{color:#0d643a;font-weight:bold;}

   /* tab */
   .tab{margin-bottom:10px;overflow:hidden;}
   .tab ul{overflow:hidden;}
   .tab ul li{float:left;}
   .tab ul li a{position:relative;float:left;padding:10px 30px;background:#eee;border-right: 1px solid #fff;font-size:13px;color:#666;text-align:center;transition:all 0.3s;}
   .tab ul li:last-child a{border:none;}
   .tab ul li a:hover{background:#ccc;}
   .tab ul li.on a{background:#2ab6ad;color:#fff;}
   .tab ul li.on a:hover{background:#2ab6ad;}

   /* marker */
   .marker{position:relative;text-align:right;margin-bottom: 20px;}
   .marker li{position:relative;display:inline-block;margin-right:15px;padding-left:17px;color:#666;list-style:none;}
   .marker li.dep{padding-right:25px;}
   .marker li:before{position:absolute;left:0;top:0;width:12px;height:12px;content:"";}
   .marker li.m1:before{background:#999;}
   .marker li.s1:before{background:#53b100;}
   .marker li.s2:before{background:#0142b3;}
   .marker li.s3:before{background:#e30101;animation:over_a both linear infinite 1.3s;}
   .marker li.s4:before{background:#9622d2;}
   .marker li.s5:before{background:#f68500;}
   .marker:after{display:block;clear:both;height:0;content:"";overflow:hidden;}

   /* state */
   .state{}
   .state i{display:inline-block;position:relative;margin-right:1px;border-radius:1px;vertical-align:middle;}
   .state i.m1{background:#999;}
   .state i.s1{background:#53b100;}
   .state i.s2{background:#0142b3;}
   .state i.s3{background:#e30101;animation:over_a both linear infinite 1.3s}
   .state i.s4{background:#9622d2;}
   .state i.s5{background:#f68500;}
   @keyframes over_a{
      0%{opacity:1;}
      40%{opacity:0.2;}
      60%{opacity:0.2;}
      100%{opacity:1;}
   }
</style>