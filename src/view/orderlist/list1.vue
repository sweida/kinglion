<template>
<div>

    <div id="list1" >
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          type="index"
          label="序号"
          width="60px"
          >
        </el-table-column>
        <el-table-column
          prop="orderlist"
          label="项目单号"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="客户姓名"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="开单日期"
          >
        </el-table-column>
        <el-table-column
          prop="project"
          label="项目"
          >
        </el-table-column>
        <el-table-column
          prop="money"
          label="金额"
          >
        </el-table-column>

        <el-table-column
          prop="prepared"
          label="建单人">
        </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              >
            </el-table-column>
        <el-table-column
          prop="td7"
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="morebtn(scope.$index)" >查看</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <el-dialog :visible.sync="moredetail" width="1150px">
      <div class="title">项目订单 <i class='el-icon-arrow-right'></i> 订单详情</div>
      <!-- 订单详情 -->
      <div class="main">
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
            <p><span>订单状态：</span>订单完成</p>
            <p><span>作废备注：</span>我是备注。</p>
          </div>
          <div class="paybox">
            <p>支付方式</p>
            <div class="payli">
              <li>会员卡<span>￥10000</span></li>
              <li>支付宝<span>￥10000</span></li>
              <li>微信<span>￥10000</span></li>
            </div>
          </div>
        </div>
        <div>
          <h4>项目订单</h4>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%;margin-bottom:15px;"
            tooltip-effect="dark"
            @selection-change="handleSelectionChange"
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
              prop="orderlist"
              label="项目编号"
              width="240px"
              >
            </el-table-column>
            <el-table-column
              prop="project"
              label="项目名称"
              >
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量"
              >
            </el-table-column>
            <el-table-column
              prop="money"
              label="项目单价"
              >
            </el-table-column>
            <el-table-column
              prop="allmoney"
              label="总价"
              >
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
            @selection-change="handleSelectionChange"
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
              prop="orderlist"
              label="项目编号"
              width="240px"
              >
            </el-table-column>
            <el-table-column
              prop="project"
              label="项目名称"
              >
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量"
              >
            </el-table-column>
            <el-table-column
              prop="money"
              label="项目单价"
              >
            </el-table-column>
            <el-table-column
              prop="allmoney"
              label="总价"
              >
            </el-table-column>
          </el-table>
        </div>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="invalid" size="small">作 废</el-button>
        <el-button type="primary" size="small">打 印</el-button>

      </span>
    </el-dialog>


</div>  
</template>

<script>
import detail from './detail'
  export default {
    data() {
      return {
        moredetail:false,
        detail:{
          name:'',
          orderlist:'',
          date:'',
          project:'',
          money:'',
          prepared:'',
        },
        tableData: [{
          orderlist: 'CERCS123232345224523344',
          date: '2016-05-02',
          name: '王语嫣',
          project: '洗脸',
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
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      morebtn:function(index){
        this.moredetail = true
        this.detail = this.tableData[index]
      },
      invalid:function(){
        this.$confirm('是否作废该订单?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '作废成功!'
          });        
        });
      }
    },
    components:{
      detail
    },
  }
</script>


<style scoped>
.el-dialog .title{
  position: absolute;
  top: 10px;
  /*width: 100%;*/
  /*border-bottom: 1px solid #eee;*/
  line-height: 40px;
  left: 0;
  padding-left: 20px;
  box-sizing: border-box;
}

.main h4{
   margin-bottom: 5px;
}
.info{
  display: flex;
  margin:20px 0;
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
  /*margin-bottom: 10px;*/
}
.info .right{
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 620px;
  border-right: 1px solid #ddd;
}
.info .right p{
  flex:0 0 300px;
  color: #000
}
.info .right span{
  color: #888;
}
.paybox{
  flex: 0 0 200px;
}
.paybox .payli{
  width: 100%;
  height: 100px;
  font-size: 12px;
  background: #f1f8ff;
  border-radius: 5px;
  padding:5px 10px;
  margin-top: 5px;
  box-sizing:border-box;
}
.paybox .payli span{
  float: right;
  color: #000;
  font-weight: bold;
}
.beizhu{
  display: flex;
  align-items: center;
  flex:0 0 400px;
}
.beizhu span{
  flex: 0 0 60px;
}
</style>

