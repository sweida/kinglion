<template>
<div>

  <div class="box-main">
    <template>
      <el-tabs v-model="orderlist" @tab-click="handleClick">
        <el-tab-pane label="持有项目" name="first"></el-tab-pane>
        <el-tab-pane label="持有产品" name="second"></el-tab-pane>
        <el-tab-pane label="持有套餐" name="third"></el-tab-pane>
        <el-tab-pane label="持有代金券" name="fourth"></el-tab-pane>
      </el-tabs>
    </template>
    <list1 v-if="orderlist=='first'" class="hold"></list1>
    <list2 v-if="orderlist=='second'" class="hold"></list2>
    <list3 v-if="orderlist=='third'" class="hold"></list3>
    <list4 v-if="orderlist=='fourth'" class="hold"></list4>

  </div>

</div>  
</template>

<script>

import list1 from './list1'
import list2 from './list2'
import list3 from './list3'
import list4 from './list4'
  export default {
    data() {
      return {
        orderlist: 'first',

      }
    },
    components:{
      list1,
      list2,
      list3,
      list4
    },

    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style >
.hold td {
    padding: 6px 0;
}
</style>

