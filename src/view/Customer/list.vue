<template>
<div>

  <div class="box-main">
    <p class="title">客户列表</p>
    <div id="customerli" >
      <el-table
        :data="customerli"
        stripe
        style="width: 100%"
         height="600"
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
          prop="box1"
          label="客人姓名"
          width="100px"
          >
        </el-table-column>
        <el-table-column
          prop="box2"
          label="性别"
          width="100px"
          >
        </el-table-column>
        <el-table-column
          prop="box3"
          label="会员等级"
          width="130px">
        </el-table-column>

        <el-table-column
          prop="box4"
          label="账户余额"
          width="130px"
          >
        </el-table-column>
        <el-table-column
          prop="box5"
          label="联系方式"
          width="150px"
          >
        </el-table-column>
        <el-table-column
          prop="box6"
          label="专属顾问"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="box7"
          label="持有项目"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="box8"
          label="最近到店"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="box9"
          label="备注">
	      <template slot-scope="scope">
	        <i class="el-icon-edit-outline" ></i>
	        <span style="margin-left: 10px">{{ scope.row.box9 }}</span>
	      </template>
        </el-table-column>
        <el-table-column
          prop="box10"
          label="操作"
          width="150px">
	      <template slot-scope="scope">

	        <el-button  type="primary" size="mini" @click="godetail">查看</el-button>
	      </template>
        </el-table-column>
<!--         <el-table-column
          prop="box8"
          label="服务人员">
        </el-table-column>
        <el-table-column
          prop="box9"
          label="预约人">
        </el-table-column> -->
      </el-table>
    </div>

  </div>

</div>  
</template>

<script>
  export default {
    data() {
      return {
      	beizhu:false,
      	visible2: false,
        customerli: [{
    	  id:12,
          box1: '王小虎',
          box2: '女',
          box3: '经理等级1',
          box4: '￥'+'20000',
          box5: '13798661922',
          box6: '婷婷',
          box7: 8,
          box8: '2017-11-30',
          box9: 'asdf',
          box10: ''
        }, {
          box1: '王小虎',
          box2: '女',
          box3: '经理等级1',
          box4: '￥'+'20000',
          box5: '13798661922',
          box6: '婷婷',
          box7: 8,
          box8: '2017-11-30',
          box9: 'asdfasfdsfasfasfsafs',
          box10: ''
        }, {
          box1: '王小虎',
          box2: '女',
          box3: '经理等级1',
          box4: '￥'+'20000',
          box5: '13798661922',
          box6: '婷婷',
          box7: 8,
          box8: '2017-11-30',
          box9: '阿斯顿发生范德萨发斯蒂芬阿斯蒂芬三分按时',
          box10: ''
        }, {
          box1: '王小虎',
          box2: '女',
          box3: '经理等级1',
          box4: '￥'+'20000',
          box5: '13798661922',
          box6: '婷婷',
          box7: 8,
          box8: '2017-11-30',
          box9: '',
          box10: ''
        }, {
          box1: '王小虎',
          box2: '女',
          box3: '经理等级1',
          box4: '￥'+'20000',
          box5: '13798661922',
          box6: '婷婷',
          box7: 8,
          box8: '2017-11-30',
          box9: '',
          box10: ''
        }, {
          box1: '王小虎',
          box2: '女',
          box3: '经理等级1',
          box4: '￥'+'20000',
          box5: '13798661922',
          box6: '婷婷',
          box7: 8,
          box8: '2017-11-30',
          box9: '',
          box10: ''
        }, {
          box1: '王小虎',
          box2: '女',
          box3: '经理等级1',
          box4: '￥'+'20000',
          box5: '13798661922',
          box6: '婷婷',
          box7: 8,
          box8: '2017-11-30',
          box9: '',
          box10: ''
        }]
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      godetail:function(){
      	this.$router.push('/:id')
      }
    }
  }
</script>

<style>
#customerli .el-table .cell {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>

<style scoped>
.box-main .title{
  line-height: 32px;
  font-size: 16px;
}
.el-icon-edit-outline{
	font-size: 18px;
	cursor: pointer;
/*	left: -35px;
	top:13px;
    position: absolute;*/
}

</style>

