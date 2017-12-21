<template>
<div>

  <div class="box-main ">
    <template>
      <el-tabs v-model="orderlist" @tab-click="handleClick">
        <el-tab-pane label="购买订单" name="first"></el-tab-pane>
        <el-tab-pane label="充值订单" name="second"></el-tab-pane>
        <el-tab-pane label="已耗卡订单" name="third"></el-tab-pane>
      </el-tabs>
    </template>
    <list1 v-if="orderlist=='first'"></list1>
    <list2 v-if="orderlist=='second'"></list2>
    <list3 v-if="orderlist=='third'"></list3>
    <!-- <list4 v-if="orderlist=='fourth'"></list4> -->

  </div>

</div>  
</template>

<script>
import list1 from './list1'
import list2 from './list2'
import list3 from './list3'
// import list4 from './list4'

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
      // list4
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>

