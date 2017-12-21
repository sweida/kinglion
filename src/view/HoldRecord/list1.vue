<template>
<div>



    <div id="list1" >
      <el-table
        :data="projectlist"
        stripe

        style="width: 100%"
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
          prop="project_name"
          label="项目名称"
          >
        </el-table-column>
        <el-table-column
          prop="incoming_date"
          label="获取日期"
          >
        </el-table-column>
        <el-table-column
          prop="use_date_limit"
          label="使用截止日期"
          >
        </el-table-column>
        <el-table-column
          prop="project_amount"
          label="可用次数"
          width="90px"
          >
        </el-table-column>
        <el-table-column
          prop="source_type"
          label="来源类型"
          >
        </el-table-column>
        <el-table-column
          prop="user_name"
          label="建单人"
          width="90px">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="90px"
          >
        </el-table-column>
        <el-table-column
          prop="cancel_remark"
          label="作废备注"
          >
        </el-table-column>
        <el-table-column
          prop="status_type"
          label="操作">
          <template slot-scope="scope">
            <!-- <span class="moredetail" @click="invalid(scope.$index)">作废</span>:disabled="scope.row.status_type==9" -->
            <el-button size="mini" type="warning" @click="invalid(scope.$index)" :disabled="scope.row.status_type==9">作废</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

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
import {holdRecord,remarkHoldOrder} from '@/api/order';
  export default {
    data() {
      return {
        // 列表接口
        param:{
          page:'1',
          rows:'100',
          bi_customer_id:this.$store.state.customer_id,
          query_type:'1',
        },
        // 作废接口
        remark:{
          hold_id:'',//作废目标编号
          cancel_type:'',//1 - 持有项目 2 - 持有产品 3 - 持有代金券 4 - 持有套餐预充值'
          cancel_operation_type:'1',//作废操作类型 :1- 手工作废 2-订单作废
          cancel_remark:'', //作废备注
        },
        projectlist:[],//列表数据
        remarkInput:'',
        liIndex:'',
        moredetail:false,

      }
    },
    created:function() {
      holdRecord(this.param).then(res=>{
        this.projectlist = res.data.data.rows
        console.log(res.data.data.rows)
      })
    },
    methods:{

      invalid(index){
        this.moredetail = true
        this.remarkInput = this.projectlist[index].cancel_remark
        this.liIndex = index
      },

      confirm(){
        if(this.remarkInput == null){
          this.$message.error('备注不能为空')
        }else{
          this.remark.cancel_type = '1'
          this.remark.hold_id = this.projectlist[this.liIndex].hold_project_id
          this.remark.cancel_remark = this.remarkInput

          remarkHoldOrder(this.remark).then(res=>{
            
            console.log(res.data)
            this.moredetail = false
            this.$message.success('作废成功')
            // Vue.set(this.projectlist)
          })
        }

        // if(this.remarkInput == ''){
        //   this.$message.error('备注不能为空')
        // }else{
        //   this.moredetail = false
        //   // this.tableData[this.liIndex].remark = this.remarkInput
        //   // this.tableData[this.liIndex].state = "作废"
        //   this.$message.success('作废成功')
        // }
      }
    }
  }
</script>


<style scoped>

</style>

