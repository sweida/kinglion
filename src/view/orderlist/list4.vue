<template>
<div>
    <div id="list4" >
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
          label="耗卡单号"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="客户姓名"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="耗卡日期"
          >
        </el-table-column>
        <el-table-column
          prop="project"
          label="耗卡项目"
          >
        </el-table-column>
        <el-table-column
          prop="prepared"
          label="建单人">
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

    <el-dialog
      title="订单详情"
      :visible.sync="moredetail"
      width="600px"
      >
      <!-- 订单详情 -->
      <div>
        <p>订单编号：{{detail.orderlist}}</p>
        <p>客户名称：{{detail.name}}</p>
        <p>创单日期：{{detail.date}}</p>
        <p>制单人：{{detail.prepared}}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small">打 印</el-button>
        <el-button type="primary" @click="moredetail = false" size="small">确 定</el-button>
      </span>
    </el-dialog>

</div>  
</template>

<script>
  export default {
    data() {
      return {
        moredetail:false,
        detail:{
          name:'',
          orderlist:'',
          date:'',
          project:'',
          prepared:'',
        },
        tableData: [{
          orderlist: '123',
          date: '2016-05-02',
          name: '王语嫣',
          project: '洗脸',
          prepared: '王小虎',
        }, {
          orderlist: '123',
          date: '2016-05-02',
          name: '王语嫣',
          project: '洗脸',
          prepared: '王小虎',
        }, {
          orderlist: '123',
          date: '2016-05-02',
          name: '王语嫣',
          project: '洗脸',
          prepared: '王小虎',
        }, {
          orderlist: '123',
          date: '2016-05-02',
          name: '王语嫣',
          project: '洗脸',
          prepared: '王小虎',
        }, {
          orderlist: '123',
          date: '2016-05-02',
          name: '王语嫣',
          project: '洗脸',
          prepared: '王小虎',
        }, {
          orderlist: '123',
          date: '2016-05-02',
          name: '王语嫣',
          project: '洗脸',
          prepared: '王小虎',
        }, {
          orderlist: '123',
          date: '2016-05-02',
          name: '王语嫣',
          project: '洗脸',
          prepared: '王小虎',
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
      }
    }
  }
</script>

<style scoped>

</style>


