<template>
  <div class="overflow-x-auto">
    <p class="indent-8 border-2 border-black m-4 p-4 pl-6 text-left">
          ubike實作時間
      <ol class="list-decimal">
        <li>
          呼叫ubike列表電文 (時間點隨意) 並顯示在畫面上
        </li>
        <li>
          做出分頁功能 可選擇在頁面實現 或在 vuex實現
        </li>
        <li>
          ubike更新頻率為每分鐘一次 如何時間到就呼叫更新呢？ 請記得離開頁面時要取消 可抽成mixin
        </li>
        <li>
          我的最愛功能 的新增與刪除
        </li>
        <li>
          刷新後我的最愛的車輛數量也要跟著更新
        </li>
      </ol>
    </p>
    <div class="divider"> 我的最愛</div>
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>站點名</th>
          <th>剩餘數/總數</th> 
          <th></th> 

        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>大安站</td>
          <td>11/20</td>
          <th>移除</th> 
        </tr>
      </tbody>
    </table>
    
    <div class="divider">一覽表</div>
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>站點名</th>
          <th>剩餘數/總數</th> 
          <th></th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>大安站</td>
          <td>11/20</td>
          <th>加入最愛</th> 
        </tr>
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <th>加入最愛</th> 
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>  
          <th>加入最愛</th> 

        </tr>
        <tr>
          <th>4</th>
          <td>Marjy Ferencz</td>
          <td>Office Assistant I</td>   
          <th>加入最愛</th> 
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>