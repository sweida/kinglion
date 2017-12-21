<template>
<div>

    <div id="list2" >
      <el-table
        :data="productlist"
        stripe
        style="width: 100%"
        max-height="680"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        >
<!--         <el-table-column
          type="selection"
          width="55">
        </el-table-column> -->
        <el-table-column
          type="index"
          label="序号"
          width="60px"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="客户姓名"
          >
        </el-table-column>
        <el-table-column
          prop="product"
          label="产品名称"
          >
        </el-table-column>
        <el-table-column
          prop="startdate"
          label="获取日期"
          >
        </el-table-column>
        <el-table-column
          prop="enddate"
          label="使用截止日期"
          >
        </el-table-column>
        <el-table-column
          prop="count"
          label="数量"
          width="90px"
          >
        </el-table-column>
        <el-table-column
          prop="origin"
          label="来源类型"
          >
        </el-table-column>
        <el-table-column
          prop="prepared"
          label="建单人"
          width="90px">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="90px"
          >
          <template slot-scope="scope">
            <span>{{tableData[scope.$index].state==1 ? '正常' : '作废'}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="作废备注"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="getProudct(scope.$index)" :disabled="tableData[scope.$index].state==1 ? false : true">领取</el-button>
            <el-button size="mini" type="warning" @click="invalid(scope.$index)">作废</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <el-dialog title="请输入领取数量" :visible.sync="getdetail" width="400px" >
      <!-- 计数框 -->
      <div class="countBox">
        <el-input-number v-model="countInput" :min="1" :max="maxcount" label="描述文字"></el-input-number>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="getdetail = false">取 消</el-button>
        <el-button size="small" type="primary" @click="getConfirm()">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="请输入作废备注" :visible.sync="moredetail" width="400px" >
      <div>
        <el-input v-model="remarkInput"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="moredetail = false">取 消</el-button>
        <el-button size="small" type="primary" @click="confirm()">确 定</el-button>
      </span>
    </el-dialog>

</div>  
</template>

<script>
import {holdRecord} from '@/api/order';
  export default {
    data() {
      return {
        param:{
          page:'1',
          rows:'100',
          bi_customer_id:this.$store.state.customer_id,
          query_type:'2',
        },
        productlist:[],
        maxcount:0,
        countInput:'',  //领取弹框输入框
        remarkInput:'', //作废弹框输入框
        liIndex:'',     //点击弹框的index
        getdetail:false,  //领取弹框
        moredetail:false, //作废弹框
      }
    },
    created:function() {
      holdRecord(this.param).then(res=>{
        this.productlist = res.data.data.rows
        console.log(res.data.data.rows)
      })
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 作废弹框
      invalid(index){
        this.moredetail = true
        this.remarkInput = this.tableData[index].remark
        this.liIndex = index
      },
      // 确认作废
      confirm(){
        if(this.remarkInput == ''){
          this.$message.error('备注不能为空')
        }else{
          this.moredetail = false
          this.tableData[this.liIndex].remark = this.remarkInput
          this.tableData[this.liIndex].state = "作废"
          this.tableData[this.liIndex].disabled = true
          this.$message.success('作废成功')
        }
      },
      // 领取弹框
      getProudct(index){
        this.getdetail = true
        this.countInput = this.tableData[index].count
        this.liIndex = index
        this.maxcount = this.tableData[index].count
      },
      // 领取确认按钮
      getConfirm(){
          this.tableData[this.liIndex].count = this.tableData[this.liIndex].count - parseInt(this.countInput)
          this.getdetail = false
          this.$message.success('领取成功')
          // 当数量为0删除该列表
          if(this.tableData[this.liIndex].count == 0){
            this.tableData.splice(this.liIndex, 1);
          }

      }
    }
  }
</script>


<style scoped>
.countBox{
  text-align: center;
}
</style>

