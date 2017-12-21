<template>
  <div>
    <div class="box-main">
      <p>客户详情</p>
      <div class="rechargemain">
        <!-- 第一步 -->
        <div class="rechargeli">
          <div class="top"></div>
          <p class="title">客户信息*</p>
          <div class="user-img">
            <img :src="$store.state.admin.img" alt="">
          </div>

          <el-form ref="form" :model="rechargeuser" label-width="80px">
            <el-form-item label="会员编号">
             <el-input v-model="newcustomer.id" size="mini" disabled></el-input>
            </el-form-item>
            <el-form-item label="中文名字">
             <el-input v-model="newcustomer.name" size="mini" ></el-input>
            </el-form-item>
            <el-form-item label="英文名字">
             <el-input v-model="newcustomer.enname" size="mini" ></el-input>
            </el-form-item>

            <el-form-item label="性别">
              <el-radio-group v-model="newcustomer.sex">
                <el-radio :label="1">女</el-radio>
                <el-radio :label="2">男</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-date-picker
                v-model="rechargeuser.date"
                type="date"
                placeholder="选择日期" 
                size="mini">
              </el-date-picker>
              <!-- <el-input v-model="rechargeuser.date" size="mini" ></el-input> -->
            </el-form-item>
            <el-form-item label="手机号码">
             <el-input v-model="newcustomer.phone" size="mini" ></el-input>
            </el-form-item>
            <el-form-item label="微信号码">
             <el-input v-model="newcustomer.weixin" size="mini" ></el-input>
            </el-form-item>
            <el-form-item label="Email地址">
             <el-input v-model="newcustomer.email" size="mini" ></el-input>
            </el-form-item>
            </el-form-item>

          </el-form>

        </div>
        <!-- 第二步 -->
        <div class="rechargeli rechargeli2">
          <div class="top"></div>
          <p class="title">属性信息*</p>
          <div class="user-img">
            <img :src="$store.state.admin.img" alt="">
          </div>

          <el-form ref="form" :model="rechargeuser" label-width="80px">
            <el-form-item label="会员编号">
             <el-input v-model="newcustomer.id" size="mini" disabled></el-input>
            </el-form-item>
            <el-form-item label="中文名字">
             <el-input v-model="newcustomer.name" size="mini" ></el-input>
            </el-form-item>
            <el-form-item label="英文名字">
             <el-input v-model="newcustomer.enname" size="mini" ></el-input>
            </el-form-item>

            <el-form-item label="婚否">
              <el-radio-group v-model="newcustomer.sex">
                <el-radio :label="1">否</el-radio>
                <el-radio :label="2">是</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="开卡日期">
              <el-date-picker
                v-model="rechargeuser.date"
                type="date"
                placeholder="选择日期" 
                size="mini"
                default-value="1990-01-01">
              </el-date-picker>
              <!-- <el-input v-model="rechargeuser.date" size="mini" ></el-input> -->
            </el-form-item>
            <el-form-item label="手机号码">
             <el-input v-model="newcustomer.phone" size="mini" ></el-input>
            </el-form-item>
            <el-form-item label="微信号码">
             <el-input v-model="newcustomer.weixin" size="mini" ></el-input>
            </el-form-item>
            <el-form-item label="Email地址">
             <el-input v-model="newcustomer.email" size="mini" ></el-input>
            </el-form-item>
          </el-form>
        </div>

      </div>
        <button class="submit animate03" @click="loginSubmit">保存信息</button>
    </div>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        paymoney:'',
        discount:0.85,
        // paymoneyend:this.paymoney * 0.5,
        radio2: 3,
        userindex:this.$store.state.userindex,
        customer:this.$store.state.userli,
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
        rechargeuser: {
          name: '',
          id:'',
          leve: '',
          date: '',
          phone: '',
          salesman:'',
          resource: '',
          desc: ''
        },
        value2: ''
      }
    },
    created:function() {
      userindex:5
    },
    methods: {
      loginSubmit:function() {
        this.$message.success('资料保存成功');
      }
    }
  }
</script>


<style scoped lang="scss">


.rechargemain{
  display: flex;
  justify-content: space-around;
}

.rechargeli2{
  border-bottom:4px solid #ffa4b3;
}
.rechargeli2 .top{
  background: -webkit-linear-gradient(left , #ffa4b3, #e8667c);
}
.rechargeli3{
  border-bottom:4px solid #6286ff;
}
.rechargeli3 .paybg{
  background: url('../../assets/rechange.png') no-repeat;
  height: 140px;
  background-size: cover;
  width: 100%;
  border-radius: 4px;
  color: #fff;
}
.paybg p{
  padding: 10px 15px;
}
.paymoney{
  width: 75%;
  margin:auto;
}
.paymoney span{
  font-size: 32px;
  padding: 0 5px;
}



.rechange-input{
  width: 100%;
  height: 80px;
  background:-webkit-linear-gradient(left , #39b2ff, #8ed9ff);
  border-radius: 5px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  padding:0 10px;
  box-sizing: border-box;
}
.rechange-input span{
  border-right: 1px solid #fff;
  line-height: 32px;
  padding-right: 10px;
}
.rechange-input input{
  border:0;
  border-bottom: 1px solid #fff;
  background: transparent;
  color:#fff;
  font-size: 30px;
  width: 170px;
  outline: none;
}
.rechange-input .shishou{
  font-size: 30px;
  width: 170px;
}
.end{
  background:-webkit-linear-gradient(left , #40cdd1, #80d5d4);
}
.end input{
  border-bottom:0;
}
.discount{
  color: red;
  font-size: 12px;
  position: relative;
  top:-12px;
}
.present{
  line-height: 36px;
  border-bottom: 1px solid #acdcdd;
}
.present span{
  float: right;
  color: red;
}
.submit{
  width:150px;
  background: #83b5ff;
  border:0;
  color: #fff;
  padding: 8px;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  left: 50%;
  margin-top:40px;
  position: relative;
  margin-left: -75px;
}
.submit:hover{
  box-shadow: 0px 5px 15px #9db7f1;
  transition: all 0.2;
}
</style>
