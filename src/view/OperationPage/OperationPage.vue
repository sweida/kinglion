<template>
<div class="">
  <div class="recharge">
    <div class="boxli1 ">
        
          <el-tabs v-model="activeName">
            <el-tab-pane label="持有项目" name="first">
              <el-table
                :data="projectli"
                stripe
                style="width: 100%"
                max-height='300'
                tooltip-effect="dark"
                @selection-change="Selection1"
                >
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="项目名称"
                  >
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="数量"
                  >
                </el-table-column>
                <el-table-column
                  prop="indate"
                  label="有效期">
                </el-table-column>
              </el-table>
            </el-tab-pane>

            <el-tab-pane label="持有套餐" name="second">
              <el-table
                :data="setmealli"
                stripe
                style="width: 100%"
                max-height='300'
                tooltip-effect="dark"
                @selection-change="Selection2"
                >
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="套餐名称" 
                  >
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="数量"
                  >
                </el-table-column>
                <el-table-column
                  prop="indate"
                  label="有效期">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>


    </div>


    <div class="boxli2">

      <el-tabs >
        <el-tab-pane label="已　选　　">
              <el-table
                :data="hasget"
                stripe
                style="width: 100%"
                max-height='300'
                tooltip-effect="dark"
              >
              <el-table-column
                prop="type"
                label="类型"
                >
                <template slot-scope="scope">{{ scope.row.type==1 ? '项目' : '套餐' }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="名称"
                >
              </el-table-column>
              <el-table-column
                prop="count"
                label="数量">
                <template slot-scope="scope" >
                  <el-input-number v-model="scope.row.add" :min="1" :max="scope.row.count" ></el-input-number>
                </template>
              </el-table-column>
            </el-table>

        </el-tab-pane>

      </el-tabs>
    </div>


    <div class="boxli3">

      <el-tabs >
        <el-tab-pane label="耗卡相关　　">
          <div class="formbox">
            <li>
              <label>服务时间</label>  
              <el-date-picker v-model="date" type="date" placeholder="选择日期"> </el-date-picker>
              <span class="span">-</span>
              <el-time-select v-model="time" :picker-options="{start: '09:00', step: '00:30', end: '19:30'}" placeholder="选择时间"> </el-time-select>
            </li>
            <li>
              <label>房间</label>
              <el-select v-model="sever" placeholder="请选择活动区域" >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </li>
            <li>
              <label>预约号</label>
              <span>651215544</span>
            </li>
            <li>
              <label>预约人</label>
              <el-select v-model="sever" placeholder="请选择活动区域" >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </li>
            <li>
              <label>服务人员</label>
              <el-select v-model="sever" placeholder="请选择活动区域" >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </li>
            <el-button type="primary" size="small" class="right">提　交</el-button>
          </div>

        </el-tab-pane>

      </el-tabs>
    </div>


  </div>

  <div class="buttonbox ">
    <p class="title">已添加耗卡项目</p>
    <div class="operation">
      <li class="animate03" v-for="(item,index) in operationli">
        <div class="head">{{item.name}}<span @click="burdeningFun">编辑配料</span>
          <i class="el-icon-delete" @click="deleteOperation(index)"></i>
        </div>
        <p><label >服务时间</label><span>{{item.serviceTime}}</span></p>
        <p><label >床号</label><span>{{item.bedNumber}}</span></p>
        <p><label >数量</label><span>{{item.count}}</span></p>
        <p><label >服务人员</label><span>{{item.waiter}}</span></p>
      </li>


    </div>
    <div class=button>
      <el-button type="primary" size="small">打 印</el-button>
      <el-button type="success" size="small">开始服务</el-button>
    </div>
  </div>

<el-dialog
  title="提示"
  :visible.sync="burdening"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="burdening = false">取 消</el-button>
    <el-button type="primary" @click="burdening = false">确 定</el-button>
  </span>
</el-dialog>


</div>  
</template>

<script>

  export default {
    data() {
      return {
        num1:1,
        date:'',
        time:'',
        sever:'',
        tabPosition: 'top',
        activeName: 'first',
        burdening: false, // 弹框
        // 持有项目
        projectli:[
          {type:1,name:'本草精华1',add:1,count:2,indate:'2019-12-14'},
          {type:1,name:'本草精华2',add:1,count:3,indate:'2019-12-14'},
          {type:1,name:'本草精华3',add:1,count:4,indate:'2019-12-14'},
          {type:1,name:'本草精华4',add:1,count:5,indate:'2019-12-14'},
          {type:1,name:'本草精华1',add:1,count:2,indate:'2019-12-14'},
          {type:1,name:'本草精华2',add:1,count:3,indate:'2019-12-14'},
          {type:1,name:'本草精华3',add:1,count:4,indate:'2019-12-14'},
          {type:1,name:'本草精华4',add:1,count:5,indate:'2019-12-14'},
        ],
        // 持有套餐
        setmealli:[
          {type:2,name:'套餐-本草精华1',add:1,count:4,indate:'2019-12-14'},
          {type:2,name:'套餐-本草精华2',add:1,count:3,indate:'2019-12-14'},
          {type:2,name:'套餐-本草精华3',add:1,count:2,indate:'2019-12-14'},
          {type:2,name:'套餐-本草精华4',add:1,count:2,indate:'2019-12-14'},
        ],
        hasget:[],  // 已选的项目和套餐
        hasget1:[], // 添加的预约项目
        hasget2:[], // 添加的预约套餐
        operationli:[
          {type:2,name:'本草精华1',serviceTime:'2017-12-14 16:30',bedNumber:'3号房2号床',count:1,waiter:'娜娜'},
          {type:2,name:'本草精华2',serviceTime:'2017-12-14 16:30',bedNumber:'3号房2号床',count:1,waiter:'娜娜'},
          {type:2,name:'本草精华3',serviceTime:'2017-12-14 16:30',bedNumber:'3号房2号床',count:1,waiter:'娜娜'},
        ],
      }
    },

    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      Selection1(val) {
        this.hasget1 = val;
        this.hasget = this.hasget1.concat( this.hasget2 )
      },
      Selection2(val) {
        this.hasget2 = val;
        this.hasget = this.hasget1.concat( this.hasget2 )
      },
      // 删除耗卡项目
      deleteOperation(index) {
        this.$confirm('确认删除该耗卡吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.operationli.splice(index,1)
        }).catch(() => {

        }); 
      },
      //配料弹框
      burdeningFun() {
        this.burdening = true
      }
    }
  }
</script>




<style scoped>


.recharge{
  width: 100%;
  background: #fff;
  height: 400px;
  margin-left: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding:10px 20px;
  display: flex;
}
.buttonbox{
  background: #fff;
  height: calc(100% - 420px);
  min-height: 365px;
  margin-left: 10px;
  box-sizing: border-box;
  padding:20px 30px;
}
.boxli1{
  /*flex:0 0 500px;*/
  width: 500px;
/*  padding-right: 20px;
  margin-right: 10px;*/
}
.boxli3{
  /*flex:0 0 400px;*/
  width: 400px;
}
.boxli2{
  /*flex:0 0 450px;*/
  width: 450px;
  padding: 0 20px;
  margin: 0 20px;
  border-right: 1px solid #F7F7F7;
  border-left: 1px solid #F7F7F7;
}
.countbox i{
  background: #409eff;
  padding: 3px;
  border-radius: 50%;
  color: #fff;
  margin: 0 3px;
  cursor: pointer;
  font-size: 14px;
}
.formbox{

}
.formbox li{
  display: flex;
  justify-content: space-between;
  line-height: 52px;
}
.formbox li .span{
  padding: 0 10px;
}
.formbox label{
  width: 100px;
  color:#5E6D82;
  display: inline-block;
}
.formbox .right{
  margin-top:10px;
}
.operation{
  width: 100%;
  margin-top: 20px;
  height: 240px;
  background: #F7F7F7;
  padding: 20px;
  box-sizing: border-box;
}
.operation li{
  width: 300px;
  height: 100%;
  background: #fff;
  box-shadow: 2px 2px 4px #ccc;
  float: left;
  margin-right: 30px;
  padding: 15px 20px;
  box-sizing: border-box;
}
.operation li:hover{
  box-shadow: 2px 2px 12px #b5b4b4;
}
.operation li .head{
  padding-bottom:20px;
  border-bottom: 1px solid #eee; 
  margin-bottom: 12px;
}
.operation li .head span{
  color: #20A0FF;
  background: #E9F9FF;
  padding: 4px 15px;
  border-radius: 15px;
  font-size: 12px;
  margin-left: 20px;
  cursor: pointer;
}
.operation li .head i{
  float: right;
  color: #ccc;
  font-size: 18px;
  cursor: pointer;
}
.operation li p{
  font-size: 14px;
  line-height: 28px;
}
.operation li p label{
  width: 80px;
  display: inline-block;
}
.operation li p span{
  color: #999;
}
.button{
  margin-top:20px;
  float: right;
}
</style>

