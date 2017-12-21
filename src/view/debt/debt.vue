<template>
<div>
  <div class="box-main scroll">

        <el-table
          :data="debtlist"
          stripe
          style="width: 100%"
          class="debt"
          max-height="680"
          tooltip-effect="dark"
          
          >
          <el-table-column
            type="index"
            label="序号"
            width="60px"
            >
          </el-table-column>
          <el-table-column
            prop="bi_customer_name"
            label="客户姓名"
            >
          </el-table-column>
          <el-table-column
            prop="order_id"
            label="订单编号"
            width="250px"
            >
          </el-table-column>
          <el-table-column
            prop="order_type"
            label="类型"
            >
            <!-- 4：充值订单，2、3购买订单 -->
            <template slot-scope="scope">{{ scope.row.order_type ==4 ? '充值订单' : '购买订单'}}</template>
          </el-table-column>
          <el-table-column
            prop="payment_price"
            label="订单金额"
            >
            <template slot-scope="scope">￥{{ scope.row.payment_price}}</template>
          </el-table-column>
          <el-table-column
            prop="rest_amount"
            label="欠款金额"
            >
            <template slot-scope="scope">￥{{ scope.row.rest_amount}}</template>
          </el-table-column>
          <el-table-column
            prop="prepared"
            label="建单人"
            >
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="开单日期"
            >
          </el-table-column>
          <el-table-column
            prop="edit"
            label="操作">
            <template slot-scope="scope" >
              <el-button size="mini" type="warning" @click="gopay">去付款</el-button>
            </template>
          </el-table-column>

        </el-table>

  </div>

</div>  
</template>

<script>
import {debt} from '@/api/order';
  export default {
    data() {
      return {
        param:{
          customer_id:this.$store.state.customer_id,
          branch_num:"10",
          condition_str:"10"
        },
        debtlist:[],
        remarkInput:'',
        liIndex:'',
        moredetail:false,
      }
    },
    created:function() {
      debt(this.param).then(res=>{
        this.debtlist = res.data.data.list
        console.log(res.data.data.list)
      })
    },
    methods:{
      gopay(){
        this.$router.push('/payment')
      }

    }
  }
</script>


<style scoped>
.debt{
  margin-top:20px;
}
</style>






