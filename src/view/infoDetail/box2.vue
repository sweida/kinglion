<template>
<div>
  <div class="box-main">
    <p class="title">今日预约 <a href="#/reservationlist" style="float:right">查看更多</a></p>

    <div id="appointment" >
      <el-table
        :data="appointment"
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
          prop="time"
          label="客人预约时间"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="客人名称"

          >
        </el-table-column>
        <el-table-column
          prop="ordernumber"
          label="预约号"

          >
        </el-table-column>
        <el-table-column
          prop="subbranch"
          label="预约分店"
          width="130px">
        </el-table-column>

        <el-table-column
          prop="project"
          label="预约项目">
        </el-table-column>
        <el-table-column
          prop="room"
          label="预约床号">
        </el-table-column>
        <el-table-column
          prop="doctor"
          label="预约医生">
        </el-table-column>
        <el-table-column
          prop="service"
          label="服务人员">
        </el-table-column>
<!--         <el-table-column
          label="状态">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="arrival(scope.$index)" >已预约</el-button>
          </template>
        </el-table-column> -->
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <!-- <el-button size="mini" type="primary" @click="arrival(scope.$index)" >到店</el-button> -->
            <el-button size="mini" type="warning" @click="edit(scope.$index)">修改</el-button>
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
        appointment: [{
          time: '2016-05-02 15:30',
          name: '关晓彤',
          ordernumber:'23423444',
          project: '洗脸',
          subbranch:'罗湖分店',
          room: '3号房2号床',
          doctor: '老王医生',
          service: '婷婷',
        }, {
          time: '2016-05-02 15:30',
          name: '关晓彤',
          ordernumber:'23423444',
          project: '洗脸',
          subbranch:'罗湖分店',
          room: '3号房2号床',
          doctor: '老王医生',
          service: '婷婷',
        }, {
          time: '2016-05-02 15:30',
          name: '关晓彤',
          ordernumber:'23423444',
          project: '洗脸',
          subbranch:'罗湖分店',
          room: '3号房2号床',
          doctor: '老王医生',
          service: '婷婷',
        }, {
          time: '2016-05-02 15:30',
          name: '关晓彤',
          ordernumber:'23423444',
          project: '洗脸',
          subbranch:'罗湖分店',
          room: '3号房2号床',
          doctor: '老王医生',
          service: '婷婷',
        }, {
          time: '2016-05-02 15:30',
          name: '关晓彤',
          ordernumber:'23423444',
          project: '洗脸',
          subbranch:'罗湖分店',
          room: '3号房2号床',
          doctor: '老王医生',
          service: '婷婷',
        }, {
          time: '2016-05-02 15:30',
          name: '关晓彤',
          ordernumber:'23423444',
          project: '洗脸',
          subbranch:'罗湖分店',
          room: '3号房2号床',
          doctor: '老王医生',
          service: '婷婷',
        }, {
          time: '2016-05-02 15:30',
          name: '关晓彤',
          ordernumber:'23423444',
          project: '洗脸',
          subbranch:'罗湖分店',
          room: '3号房2号床',
          doctor: '老王医生',
          service: '婷婷',
        }]
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      arrival(){

      },
      edit(){

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