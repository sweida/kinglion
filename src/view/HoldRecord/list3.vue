<template>
<div>

    <div id="list1" >
      <el-table
        :data="tableData"
        stripe
        highlight-current-row
        style="width: 100%"
        max-height="680"
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
          prop="name"
          label="客户姓名"
          >
        </el-table-column>
        <el-table-column
          prop="project"
          label="套餐名称"
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
          prop="available"
          label="可用次数"
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
        </el-table-column>
        <el-table-column
          prop="remark"
          label="作废备注"
          >
        </el-table-column>
        <el-table-column
          prop="edit"
          label="操作">
          <template slot-scope="scope">
            <!-- <span class="moredetail" @click="invalid(scope.$index)">作废</span> -->
            <el-button size="mini" type="warning" @click="invalid(scope.$index)">作废</el-button>
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
  export default {
    data() {
      return {
        remarkInput:'',
        liIndex:'',
        moredetail:false,
        tableData: [{
          name: '王语嫣1',
          project: '洗脸',
          startdate:'2017-12-12',
          enddate:'2027-12-12',
          available:1,
          origin:'购买',
          prepared: '王小虎',
          state:'作废',
          remark:'sss',
        }, {
          name: '王语嫣2',
          project: '洗脸',
          startdate:'2017-12-12',
          enddate:'2027-12-12',
          available:1,
          origin:'赠送',
          prepared: '王小虎',
          state:'作废',
          remark:'bbb',
        }, {
          name: '王语嫣3',
          project: '洗脸',
          startdate:'2017-12-12',
          enddate:'2027-12-12',
          available:1,
          origin:'购买',
          prepared: '王小虎',
          state:'正常',
          remark:'',
        }]
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      invalid(index){
        this.moredetail = true
        this.remarkInput = this.tableData[index].remark
        this.liIndex = index
      },
      confirm(){
        if(this.remarkInput == ''){
          this.$message.error('备注不能为空')
        }else{
          this.moredetail = false
          this.tableData[this.liIndex].remark = this.remarkInput
          this.tableData[this.liIndex].state = "作废"
          this.$message.success('作废成功')
        }
      }
    }
  }
</script>


<style scoped>

</style>

