<template>
    
    <div class="chooseUser">
        <p class="title">客户管理</p>
        <div class="new-customer">
            <div class="button" @click="addcustome = true">
                <img src="../../assets/nav/leftnav1.png" alt="">
                <p>增加临客</p>
            </div>
            <div class="button" @click="addcustome = true">
                <img src="../../assets/nav/leftnav2.png" alt="">
                <p>增加新客</p>
            </div>
        </div>
        <!-- 搜索 -->
        <div class="search">
            <input type="text" >
            <i class="el-icon-search "></i>
        </div>

        <!-- 添加新客户弹框 -->
      <el-dialog  :visible.sync="addcustome" width="800px">
        <div class="rechargeli">
          <div class="top"></div>
          <p class="title">新增客户*</p>
          <div class="user-img">
            <img :src="$store.state.admin.img" alt="">
          </div>

          <el-form ref="form" :model="newcustomer" label-width="80px">
            <el-form-item label="客户名字">
             <el-input v-model="newcustomer.name" size="mini" ></el-input>
            </el-form-item>
            <el-form-item label="客户编号">
             <el-input v-model="newcustomer.id" size="mini" disabled></el-input>
            </el-form-item>

            <el-form-item label="性别">
              <el-radio-group v-model="newcustomer.sex">
                <el-radio :label="1">女</el-radio>
                <el-radio :label="2">男</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-date-picker
                v-model="newcustomer.date"
                type="date"
                placeholder="选择日期" 
                size="mini"
                default-value="1990-01-01">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="手机号码">
             <el-input v-model="newcustomer.phone" size="mini" ></el-input>
            </el-form-item>
            <el-form-item label="门店">
              <el-select v-model="newcustomer.address" placeholder="请选择门店" size="mini">
                <el-option label="南山店" value="nanshan"></el-option>
                <el-option label="罗湖店" value="luohu"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="接待人">
              <el-select v-model="newcustomer.address" placeholder="请选择门店" size="mini">
                <el-option label="娜娜" value="nanshan"></el-option>
                <el-option label="婷婷" value="luohu"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addcustome = false">取 消</el-button>
          <el-button type="primary" @click="confirmNew" >确 定</el-button>
        </div>
      </el-dialog>   

      <!-- 是否成为会员弹框 -->
      <el-dialog
        class="addsuccessbox"
        :visible.sync="addsuccessbox"
        width="380px"
        center>
        <div class="addsuccess">
            <img src="../../assets/success.png" alt="">
            <p>客户添加成功，是否成为会员？</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="notoMember">取 消</el-button>
          <el-button type="primary" @click="becomeMember">确 定</el-button>
        </span>
      </el-dialog>


    </div>

</template>



<script>
import addCustomer from '@/api/user';
  export default {
    data() {
      return {
        addsuccessbox: false,
        addcustome: false,
        param:{
          page:'1',
          rows:'100',
          bi_customer_id:this.$store.state.customer_id,
          query_type:'1',
        },
        newcustomer:{
          id:'123234122',
          name:'',
          enname:'',
          sex:1,
          phone:'',
          weixin:'',
          email:'',
          date:''
        },

      }
    },
    created:function() {
      addCustomer(this.param).then(res=>{
        
        console.log(res.data)
      })
    },
    methods:{
        // 添加会员成功
        confirmNew: function() {
            this.addsuccessbox = true
        },
        // 不成为会员
        notoMember: function() {
            this.addcustome = false
            this.addsuccessbox = false
        },
        // 成为会员
        becomeMember: function() {
            this.addcustome = false
            this.addsuccessbox = false
            this.$router.push('/recharge')
        }
    }
  }
</script>

<style>
.el-form-item {
    margin-bottom: 12px;
}

</style>

<style scoped lang="scss">

.chooseUser{
    height: 150px;
    width: 100%;
    color: #fff;
    font-size: 14px;
    background: -webkit-linear-gradient(left top, #50a9ff , #79b2ff);
    .title{
        text-indent: 15px;
        line-height: 36px;
    }
    .new-customer{
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding: 8px 0;
    }
    .button{
        cursor: pointer;
        flex: 1;
    }
    .button:first-child{
        border-right: 1px solid #c6e1ef;
    }
    .search{
        clear: both;
        width: 90%;
        margin:auto;
        text-align: center;
        position: relative;
        .el-icon-search{
            position: absolute;
            right: 10px;
            top:5px;
        }
        input{
            width: 100%;
            height: 24px;
            border-radius: 15px;
            outline: none;
            padding: 0 30px 0 15px;
            background: rgba(255, 255, 255, 0.5);
            color: #fff;
            border: none;
            box-sizing: border-box;
        }
    }
}

.rechargeli{
  margin:auto;
}


/*是否充值*/
.addsuccess{
    text-align: center;
    padding-top: 10px;
}
.addsuccess p{
    padding-top: 10px;
}
</style>

