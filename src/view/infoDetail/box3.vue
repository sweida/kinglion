<template>
<div>
  <div class="box-main">
    <p class="title">今日耗卡</p>
    <div id="box3" >
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
          prop="name"
          label="客人名称"
          >
        </el-table-column>
        <el-table-column
          prop="project"
          label="耗卡项目"
          >
        </el-table-column>
        <el-table-column
          prop="time"
          label="消耗时间"
          >
        </el-table-column>
        <el-table-column
          prop="number"
          label="耗卡单号">
        </el-table-column>
        <el-table-column
          prop="doctor"
          label="预约医生">
        </el-table-column>
        <el-table-column
          prop="service"
          label="服务人员">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态">
          <template slot-scope="scope">
<!--             <el-button size="mini" type="primary" @click="arrival(scope.$index)" >查看</el-button> -->
            <span>服务中</span>
            <span>服务完成</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="arrival(scope.$index)" >查看</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>


  </div>
</div>  
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '卢本伟',
          project: '微整容',
          time: '2016-05-02 16:30',
          number: '521452',
          prepared: '我是前台',
          doctor:'老王医生',
          service:'小甜甜',
        }, {
          name: '卢本伟',
          project: '微整容',
          time: '2016-05-02 16:30',
          number: '521452',
          prepared: '我是前台',
          doctor:'老王医生',
          service:'小甜甜',
        }, {
          name: '卢本伟',
          project: '微整容',
          time: '2016-05-02 16:30',
          number: '521452',
          prepared: '我是前台',
          doctor:'老王医生',
          service:'小甜甜',
        }, {
          name: '卢本伟',
          project: '微整容',
          time: '2016-05-02 16:30',
          number: '521452',
          prepared: '我是前台',
          doctor:'老王医生',
          service:'小甜甜',
        }]
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>


<style scoped>
.box-main{
  padding: 8px 20px 20px;
}
.box-main .title{
  line-height: 32px;
  font-size: 14px;
}

</style>