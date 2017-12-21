<template>
  <div>
  	<div class="reserva">
	    <!-- 表格 -->
	    <div>
    	  <!-- 切换表格 -->
		  <el-tabs v-model="activeName" >
		    <el-tab-pane label="查看房间" name="first"></el-tab-pane>
        <el-tab-pane label="服务人员" name="second"></el-tab-pane>
		    <el-tab-pane label="预约列表" name="third"></el-tab-pane>
		  </el-tabs>

	      <!-- 房间详情 -->
	      <div class="reservaTable">
	        <!-- 左侧 -->
	        <div class="lefttable">
	          <!-- 时间选择 -->
	          <div>
	            <div class="block timeBlock" style="height: 56px">
	              <el-date-picker
	                v-model="reservaDate"
	                type="date"
	                default-value="2012-12-14"
	                placeholder="选择日期" style="width: 100%;margin-top: 8px; border: 0px;" class="selectDate">
	              </el-date-picker>
	            </div>
	          </div>
	          <!-- 时间列表 -->
	          <div>
	            <table>
	              <tbody>
	                <tr v-for="(value,index) in time_point_list" class="timeli">
	                  <td>{{time_point_list[index]}}</td>
	                </tr>
	              </tbody>
	            </table>
	          </div>
	        </div>
	        <!-- 右侧 -->
	        <div class="righttable">
	          <!-- 房号和床号-->
	          <div class="righttop">
	            <table >
	              <tbody>
	                <tr  v-if="activeName=='first'"> 
	                  <td v-for="(value,index) in rooms_list" >{{rooms_list[index]}}</td>
	                </tr>
	                <tr v-if="activeName=='second'"> 
	                  <td>服务人员</td>
	                </tr>
	              </tbody>
	            </table>
	            <table>
	              <tbody>
	                <tr>
	                  <td v-for="(value,index) in beds_list" style="width: 60px;background:#e6ebf5;" v-if="activeName=='first'">{{beds_list[index]}}</td>
	                   <td v-for="(value,index) in serviceList" style="width: 80px;background:#e6ebf5;" v-if="activeName=='second'">{{serviceList[index]}}</td>
	                </tr>
	              </tbody>
	            </table>
	          </div>
	          <!-- 单个房间 -->
	          <div>
	            <table>
	              <tbody >  
	                <tr v-for="(value,indexTime) in time_point_list" class="roomtable">
						<!-- 床位查看 -->
	                  <td v-for="(value,index) in beds_list" v-if="activeName=='first'">
						<el-tooltip placement="bottom">
							<!-- 床位信息显示 -->
							<div slot="content">
							  <p>{{beds_list[index]}}</p>
							  <p>{{time_point_list[indexTime]}}</p>
							  <p style="color:orange" v-if="usebed">当前可用</p>
							  <p style="color:red" v-else>已有预约</p>
							</div>
							<!-- 床位 -->
							<div class="tdShow" @click="toReserva(beds_list[index],time_point_list[indexTime],$event)">
								<!-- <div v-if="hasreserva">{{reserva.name}}</div> -->
							</div>
						</el-tooltip>
	                  </td>

						<!-- 查看服务人员 -->
	                  <td v-for="(value,index) in serviceList" v-if="activeName=='second'">
						<el-tooltip placement="bottom">
							<div slot="content">
							  <p>{{beds_list[index]}}</p>
							  <p>{{time_point_list[indexTime]}}</p>
							  <p style="color:orange" v-if="usebed">无预约</p>
							  <p style="color:red" v-else>有预约人</p>
							</div>
							<div class="tdShow"></div>
						</el-tooltip>
	                  </td>
	                </tr>
	              </tbody>
	            </table>
	          </div>
	        </div>
	      </div>
	    </div>
<!-- <div class="clear"></div> -->
    <!-- 弹框 -->
    <el-dialog title="预约" :visible.sync="reservaForm" width="1150px">
      <formbox></formbox>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reservaForm = false">取 消</el-button>
        <el-button type="primary" @click="ensureReserva()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
<reservationlist v-if="activeName=='third'"></reservationlist>

  </div>
</template>

<script>
import reservationlist from './reservationlist'
import formbox from './formbox'

  export default {
    data() {
      return {
      	activeName:'first',
      	usebed:true,
        time_point_list:[], //时刻表
        reservaDate:"",  //预约时间
        rooms_list:[],  //房间号
        beds_list:[],  //床号
        serviceList:[], //服务人员列表
        seeRoom:true, //查看房间
        seeService:false, //查看服务人员
        reservaForm: false,
        formLabelWidth:"120px",
        //预约弹框form
        reserva: {
          number:'1234',
          name: '王语嫣',
          time: '',
          duration:'一个小时',//时长
          bed:'',
          project:'',//预约项目
          doctor: '',//医生
          waiter:'',//服务员
          remark:'',//备注
        },
      }
    },
    created:function(){
        for(var i=9;i<=19;i++){
          for(var j=0;j<2;j++){
            var tt;
            var time;
            if(i == 9){tt="0"+i}else{tt=i;}
            j=j*30;
            if(j<1){j="0"+j}
            time=tt+":"+j;
            this.time_point_list.push(time);
          }
        }
        for(var i=1;i<=10;i++){
          var roomNo = i + "房";
          this.rooms_list.push(roomNo);
        }
        for(var i=1;i<=10;i++){
          var service = i + "服务员";
          this.serviceList.push(service);
        }
        for(var i=1;i<=20;i++){
          var bedNo = i + "床";
          this.beds_list.push(bedNo);
        }
    },
    methods: {

      toReserva:function(param1,param2,param3,$event){
        // debugger
        this.reservaForm = true;
        this.reserva.time = param2; 
        this.reserva.bed = param1;

      },
      // 提交预约
      ensureReserva:function($event){
      	this.reservaForm = false
      	this.$message.success('预约成功')
        // $($event.currentTarget).append("<span class='hasSelectedspan'>"+param3+"</span>");
        // $($event.currentTarget).addClass("hasSelected");
      }
    },
    components:{
      reservationlist,
      formbox
    },
  }
</script>
<style >
.lefttable .el-input__inner{
	border:0;
}
</style>
<style scoped>
.reserva{
    margin-left:10px;
    background: #fff;
    min-height: 100%;
    /*margin-bottom: 20px;*/
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 20px 20px;
}
.reserva .title{
  line-height: 32px;
  font-size: 16px;
}
.reservaTable{
	display: flex;
    font-size: 14px;
}
.lefttable{
	width: 140px;
	display: inline-block;
	float: left;
	line-height: 28px;

	/*border-right:1px solid #ccc; */
}
.timeli{
	height: 28px;
}
.timeli:nth-child(2n){
	background: #f2f5fb;
}
.righttable .righttop{
	width: 100%;
    background: #d3d8e1;
    line-height: 28px;
	/*border-bottom:1px solid #ccc;*/
	height: 56px;
}
/*.righttable{
	width: calc(90% - 1px);
	display: inline-block;
}*/
table{
  width: 100%;
  border:0px; 
  border-collapse:collapse;
  border-spacing:0;
}
td{text-align: center;}
.roomtable:nth-child(2n){
	background: #f2f5fb;
}
.tdShow{
  height: 28px;
  width: 100%;
  border-left: 1px solid #e6eefd;
}

.hasSelectedspan{
  width: 70px;
    height: 24px;
    display: inline-block;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    background: #ccc;
}
.tdShow:hover{
  background: #d3e7ff;
}
.el-input{width: 50%;}

</style>
