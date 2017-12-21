<template>
  <div>
      <div class="title">项目订单 <i class='el-icon-arrow-right'></i> 订单详情</div>
      <!-- 订单详情 -->
      <div class="main">
        <div>
          
        </div>
        <div>
          项目订单
        </div>
        <div>
          优惠赠送
        </div>
        <p>创单日期：{{detail.date}}</p>
        <p>订单编号：{{detail.orderlist}}</p>
        <p>客户名称：{{detail.name}}</p>
        <p>制单人：{{detail.prepared}}</p>
      </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>

