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
      </ol>
    </p>
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
        <tr>
          <th>4</th>
          <td>Marjy Ferencz</td>
          <td>Office Assistant I</td>
          <td>Crimson</td>
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