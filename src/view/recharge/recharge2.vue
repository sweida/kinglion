<template>
  <div>
    <p class="main-title">会员充值</p>
    <div class="content-box">
		<div class="frombox">
			<li><span>会员名</span><input type="text"></li>
			<li><span>会员号</span><input type="text"></li>
			<li>
				<span>会员等级</span>
<!-- 				<select>
				  <option value ="volvo">青铜</option>
				  <option value ="saab">白银</option>
				  <option value="opel">黄金</option>
				  <option value="audi">白金</option>
				  <option value="zuanshi">钻石</option>
				</select> -->
				<el-select v-model="levelvalue" placeholder="请选择会员等级">
				    <el-option
				      v-for="item in memberlevel"
				      :key="item.value"
				      :label="item.level"
				      :value="item.value">
				    </el-option>
	  			</el-select>
			</li>
			<li><span>销售人员</span><input type="text"></li>
			<li>
				<span>销售人员</span>  
				<el-select v-model="salesvalue" placeholder="请选择销售人员">
				    <el-option
				      v-for="item in sales"
				      :key="item.value"
				      :label="item.personnel"
				      :value="item.value">
				    </el-option>
	  			</el-select>
  			</li>
			<li>
				<span>支付方式</span>  
				<el-select v-model="payvalue" placeholder="请选择支付方式">
				    <el-option
				      v-for="item in paytype"
				      :key="item.value"
				      :label="item.type"
				      :value="item.value">
				    </el-option>
	  			</el-select>
  			</li>
			<li><span>充值金额</span><input type="text"></li>
			<li><span>实付金额</span><input type="text"></li>

		</div>
		<el-button type="primary" class="present" @click="dialogFormVisible = true">+赠送</el-button>


<el-dialog title="添加优惠赠送" :visible.sync="dialogFormVisible" >


<el-row class="tac">
  <el-col :span="6">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>项目</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">面部</el-menu-item>
          <el-menu-item index="1-2">胸部</el-menu-item>
          <el-menu-item index="1-3">手部</el-menu-item>
          <el-menu-item index="1-4">腰腹</el-menu-item>
          <el-menu-item index="1-5">全身</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">产品</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">优惠券</span>
      </el-menu-item>
    </el-menu>
  </el-col>
<div>
  <li>
    <span>苹果肌重塑</span>
    <span>￥3800</span>
  </li>
  <li>
    <span>美白针一次性美白</span>
    <span>￥9800</span>
  </li>
  <li>
    <span>瓷白面部护理</span>
    <span>￥15800</span>
  </li>
  <li>
    <span>白瓷面部(体验)护</span>
    <span>￥21800</span>
  </li>      

</div>
</el-row>




<!--   <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="项目">项目</el-tab-pane>
    <el-tab-pane label="产品">产品</el-tab-pane>
    <el-tab-pane label="赠送方案">赠送方案</el-tab-pane>
  </el-tabs> -->



<!--   <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form> -->
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>








</el-dialog>

    <el-table
      :data="goods"
      style="width: 1000px;background: #000">
      <el-table-column
        prop="id"
        label="赠送编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="赠送商品"
        width="180">
      </el-table-column>
      <el-table-column
        
        label="数量">
          <template>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </template>
      </el-table-column>
      <el-table-column
        prop="money"
        label="价值">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="small" >删除</el-button>
        </template>
      </el-table-column>

    </el-table>

<!-- 
		<div class="presentbox">
			<li>
				<span>赠送编号</span>
				<span>赠送商品</span>
				<span>数量</span>
				<span>价值</span>
				<span>操作</span>
			</li>
			<li>
				<span>1201</span>
				<span>草本精华</span>
				<span>1</span>
				<span>120</span>
			</li>
			<li>
				<span>1203</span>
				<span>美白</span>
				<span>1</span>
				<span>220</span>
				<span>删除</span>
			</li>
		</div> -->

    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        num1: 1,
          goods: [{
            id: '1001',
            name: '苹果肌重塑',
            amount:2,
            money: 3800
          }, {
            id: '1001',
            name: '苹果肌重塑',
            amount:2,
            money: 3800
          }, {
            id: '1001',
            name: '苹果肌重塑',
            amount:2,
            money: 3800
          }],
        tabPosition: 'left',
      	dialogFormVisible: false,
        sales: [{
          value: '选项1',
          personnel: '销售人员1号'
        }, {
          value: '选项2',
          personnel: '销售人员2号'
        }, {
          value: '选项3',
          personnel: '销售人员3号'
        }, {
          value: '选项4',
          personnel: '销售人员4号'
        }],
        memberlevel:[{
          value: '选项1',
          level: '青铜'
        }, {
          value: '选项2',
          level: '白银'
        }, {
          value: '选项3',
          level: '黄金'
        }, {
          value: '选项4',
          level: '白金'
        }, {
          value: '选项5',
          level: '钻石'
        }],
        paytype:[{
          value: '选项1',
          type: '支付宝'
        }, {
          value: '选项2',
          type: '微信'
        }, {
          value: '选项3',
          type: '银联刷卡'
        }, {
          value: '选项4',
          type: '现金'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        levelvalue: '',
        salesvalue: '',
        payvalue:''
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleChange(value) {
        console.log(value);
      }
    }
    // ,
    // methods:{
    // 	      // 删除当前
    //   deleteform: function(index){
    //     this.$confirm('是否删除该信息?', '提示', {
    //       confirmButtonText: '确定',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       this.$store.state.tableData.splice(index, 1); 
    //       this.$message({
    //         type: 'success',
    //         message: '删除成功!'
    //       });
    //     }).catch(() => {

    //     });
    //   }
    // }
  }
</script>





<style scoped>
.main-title{
	font-size: 16px;
	line-height: 34px;
}
.content-box{
	width:100%;
	/*margin:auto;*/
	height: 93%;
	background: #f6f8f8;
	padding: 20px;
    box-sizing: border-box;
}
.frombox{
	width: 400px;
	margin:auto;
	font-size: 14px;
	/*text-align: center;*/
}
.frombox li span{
	width: 90px;
	display: inline-block;
	text-align: left;
}
.present{
	margin-left: 100px;
}
.presentbox{
	width:800px;
	margin:auto;
}
.presentbox li{
	border-bottom: 1px solid #ccc;
	line-height: 34px;
	font-size: 14px;
}
.presentbox li:first-child{
	border:none;
}
.presentbox li span{
	width:150px;
	text-align: center;
	display: inline-block;
}
input{
    border: none;
    border-bottom: 1px solid #5384b4;
    background: transparent;
    padding: 4px 10px;
}
input{outline:none;}
.el-table{
  margin:auto;
}

</style>
