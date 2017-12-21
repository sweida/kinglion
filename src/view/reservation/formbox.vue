<template>
  <div class="dialog-box">
      <div class="boxli1 rechargeli">

        <!-- 第一步 -->
          <div class="top"></div>
          <p class="title">预约信息*</p>
          <div class="user-img">
            <img :src="$store.state.admin.img" alt="">
          </div>

          <el-form ref="form" :model="reserva" label-width="80px">
            <el-form-item label="客户姓名">
              <el-input v-model="reserva.name" size="mini" ></el-input>
            </el-form-item>
            <el-form-item label="预约号">
              <el-input v-model="reserva.id" size="mini" disabled></el-input>
            </el-form-item>
            <el-form-item label="预约时间">
              <el-date-picker
                v-model="reserva.date"
                type="date"
                placeholder="选择日期" 
                size="mini">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="预约房间">
              <el-input v-model="reserva.id" size="mini" disabled></el-input>
            </el-form-item>
            <el-form-item label="预约医生" >
              <el-select v-model="reserva.doctor" placeholder="请选择预约医生" size="medium">
                <el-option label="主持医生" value="1"></el-option>
                <el-option label="主任医生" value="2"></el-option>
                <el-option label="副主任医生" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="服务人员">
              <el-select v-model="reserva.waiter" placeholder="请选择预约服务人员" size="medium">
                <el-option label="人员1" value="1"></el-option>
                <el-option label="人员2" value="2"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="备注">
              <el-input v-model="reserva.remark" auto-complete="off" size="medium"></el-input>
            </el-form-item>

          </el-form>

      </div>

      <!-- 持有项目 -->
      <div class="boxli2">
        <el-tabs v-model="orderlist">
          <el-tab-pane label="持有项目" name="first">
            <el-table
              :data="projectli"
              stripe
              style="width: 100%"
              max-height='450'
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
              max-height='450'
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

      <!-- 已选的 -->
      <div class="boxli3">

      <el-tabs >
        <el-tab-pane label="已选　　">
              <el-table
                :data="hasget"
                stripe
                style="width: 100%"
                max-height='450'
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



</div>  
</template>

<script>

  export default {
    data() {
      return {
        true:true,
        orderlist: 'first',
        
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
        // 持有项目
        projectli:[
          {type:1,name:'本草精华1',add:1,count:2,indate:'2019-12-14'},
          {type:1,name:'本草精华32',add:1,count:3,indate:'2019-12-14'},
          {type:1,name:'本草精华3',add:1,count:4,indate:'2019-12-14'},
          {type:1,name:'本草精华4',add:1,count:5,indate:'2019-12-14'},
          {type:1,name:'本草精华1',add:1,count:2,indate:'2019-12-14'},
          {type:1,name:'本草精华32',add:1,count:3,indate:'2019-12-14'},
          {type:1,name:'本草精华3',add:1,count:4,indate:'2019-12-14'},
          {type:1,name:'本草精华4',add:1,count:5,indate:'2019-12-14'},
          {type:1,name:'本草精华1',add:1,count:2,indate:'2019-12-14'},
          {type:1,name:'本草精华32',add:1,count:3,indate:'2019-12-14'},
          {type:1,name:'本草精华3',add:1,count:4,indate:'2019-12-14'},
          {type:1,name:'本草精华4',add:1,count:5,indate:'2019-12-14'},
          {type:1,name:'本草精华1',add:1,count:2,indate:'2019-12-14'},
          {type:1,name:'本草精华32',add:1,count:3,indate:'2019-12-14'},
          {type:1,name:'本草精华3',add:1,count:4,indate:'2019-12-14'},
          {type:1,name:'本草精华4',add:1,count:5,indate:'2019-12-14'},
        ],
        // 持有套餐
        setmealli:[
          {type:2,name:'本草精华11',add:1,count:4,indate:'2019-12-14'},
          {type:2,name:'本草精华22',add:1,count:3,indate:'2019-12-14'},
          {type:2,name:'本草精华33',add:1,count:2,indate:'2019-12-14'},
          {type:2,name:'本草精华44',add:1,count:2,indate:'2019-12-14'},
        ],
        hasget:[],  // 已选的项目和套餐
        hasget1:[], // 添加的预约项目
        hasget2:[], // 添加的预约套餐
      }



    },
    methods: {
      Selection1(val) {
        this.hasget1 = val;
        this.hasget = this.hasget1.concat( this.hasget2 )
        console.log(this.hasget)
      },
      Selection2(val) {
        this.hasget2 = val;
        this.hasget = this.hasget1.concat( this.hasget2 )
        console.log(this.hasget)
      },
      // 购物列表加数
      plus:function(item,index){
        item.count+=1
      },
      // 购物列表减数
      minus:function(item,index){
        if(item.count==1){
          item.count = 1
        }else{
          item.count --
        }
      },


    },
  }
</script>



<style scoped lang="scss">

.dialog-box{
  display: flex;
  justify-content: space-around;
}
.boxli2{
  flex:0 0 400px;
}
.boxli3{
  flex:0 0 300px;
}



</style>
