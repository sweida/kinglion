<template>

      <!-- 订单详情 -->
      <div class="box-main">
        <div class="info">
          <div class="left">
            <img :src="$store.state.admin.img" alt="">
            <p>王语嫣</p>
          </div>
          <div class="right">
            <p><span>创单日期：</span>{{detail.date}}</p>
            <p><span>订单编号：</span>{{detail.orderlist}}</p>
            <p><span>制单人：</span>{{detail.prepared}}</p>
            <p><span>销售员：</span>{{detail.prepared}}(100%)</p>
            <p><span>订单总价：</span>￥42000</p>
            <p><span>实收价格：</span>￥30000</p>
            <p><span>订单状态：</span><i class="red">{{orderstate==1 ? '未付款' : '欠款￥'+1000}}</i></p>

          </div>

        </div>
        <div v-if="paytype==1">
          <h4>购买订单</h4>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%;margin-bottom:15px;"
            tooltip-effect="dark"
            >
            <el-table-column
              type="index"
              label="序号"
              width="60px"
              >
            </el-table-column>
            <el-table-column
              prop="orderlist"
              label="明细订单编号"
              width="240px"
              >
            </el-table-column>
            <el-table-column
              prop="type"
              label="类型"
              >
              <template slot-scope="scope" >
                {{scope.row.type==1 ? '项目' : '产品'}}
              </template>
            </el-table-column>
            <el-table-column
              prop="project"
              label="名称"
              >
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量"
              >
            </el-table-column>
            <el-table-column
              prop="money"
              label="单价"
              >
            </el-table-column>
            <el-table-column
              prop="allmoney"
              label="折后价"
              >
            </el-table-column>

          </el-table>
        </div>

        <div v-else>
          <h4>充值详情</h4>
          <el-table
            :data="recharge"
            stripe
            style="width: 100%;margin-bottom:15px;"
            tooltip-effect="dark"
            >
            <el-table-column
              prop="orderlist"
              label="明细订单编号"
              width="240px"
              >
            </el-table-column>
            <el-table-column
              prop="type"
              label="类型"
              >
              <template slot-scope="scope" >
                充值
              </template>
            </el-table-column>
            <el-table-column
              prop="beforMoney"
              label="原卡上余额"
              >
              <template slot-scope="scope" >
                ￥{{scope.row.beforMoney}}
              </template>
            </el-table-column>
            <el-table-column
              prop="payMoney"
              label="充值金额"
              >
              <template slot-scope="scope" >
                ￥{{scope.row.payMoney}}
              </template>
            </el-table-column>
            <el-table-column
              prop="afterMoney"
              label="充值后金额"
              >
              <template slot-scope="scope" >
                ￥{{scope.row.beforMoney + scope.row.payMoney}}
              </template>
            </el-table-column>
            <el-table-column
              prop="level"
              label="原会员等级"
              >
              <template slot-scope="scope" >
                {{level[scope.row.level]}}
              </template>
            </el-table-column>
            <el-table-column
              prop="afterLevel"
              label="充值后等级"
              >
              <template slot-scope="scope" >
                {{level[scope.row.afterLevel]}}
              </template>
            </el-table-column>

          </el-table>
        </div>


        <!-- 优惠赠送 -->
        <div>
          <h4>优惠赠送</h4>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            tooltip-effect="dark"
            >
            <el-table-column
              type="index"
              label="序号"
              width="60px"
              >
            </el-table-column>
            <el-table-column
              prop="orderlist"
              label="明细订单编号"
              width="240px"
              >
            </el-table-column>
            <el-table-column
              prop="type"
              label="类型"
              >
              <template slot-scope="scope" >
                {{scope.row.type==1 ? '项目' : '产品'}}
              </template>
            </el-table-column>
            <el-table-column
              prop="project"
              label="名称"
              >
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量"
              >
            </el-table-column>
            <el-table-column
              prop="money"
              label="价值"
              >
            </el-table-column>

          </el-table>
        </div>

      </div>

</template>

<script>

  export default {
    data() {
      return {
        paytype:1,//订单类型 1购买 2充值
        level:this.$store.state.level,
        orderstate:1,
        detail:{
          name:'蒙奇奇',
          orderlist:'CERCS123232345224523344',
          date:'2016-05-02',
          project:'',
          money:'',
          prepared:'琪琪',
        },
        recharge: [{
          orderlist: 'CERCS123232345224523344',
          beforMoney:2000,//余额
          payMoney:30000,
          level:1,
          afterLevel:2,
        }],
        tableData: [{
          orderlist: 'CERCS123232345224523344',
          date: '2016-05-02',
          name: '王语嫣',
          type:1,
          project: '洗脸',
          money: '￥'+23545,
          prepared: '王小虎',
          state:'正常',
        }, {
          date: '2016-05-02',
          orderlist: '223',
          name: '杨颖',
          type:2,
          project: '洗脚',
          money: '￥'+23545,
          prepared: '王小虎',
          state:'正常',
        }, {
          date: '2016-05-02',
          orderlist: '223',
          name: '杨颖',
          project: '洗脚',
          money: '￥'+23545,
          prepared: '王小虎',
          state:'正常',
        }]
      }
    },
    methods:{

    },

  }
</script>


<style scoped>
.box-main{
  padding: 10px;
}


.info{
  display: flex;
  margin-bottom:20px;
  justify-content: space-around;
}
.info .left{
  flex:0 0 200px;
  text-align: center;
}
.info .left img{
  width: 100px;
  height: 100px;
  border-radius:50%;
}
.info .right{
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 620px;
}
.info .right p{
  flex:0 0 300px;
  color: #000
}
.info .right span{
  color: #888;
}


</style>  