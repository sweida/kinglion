<template>
	<div class="header">
            <div class="logo"><img src="../assets/logo.png" alt=""></div>
            <div class="nav">
                <div>
                    <el-menu
                      :router="true" 
                      :default-active="$route.path"
                      class="el-menu-demo"
                      mode="horizontal"
                      background-color="#3a4354"
                      text-color="#fff"
                      active-text-color="#ffd04b">
                      <el-menu-item index="/home">首页</el-menu-item>
                      <el-menu-item index="/buyproduct">购买</el-menu-item>
                      <el-menu-item index="/orderlist">订单管理</el-menu-item>
                      <el-menu-item index="/HoldRecord">持有记录</el-menu-item>
                      <!-- <el-menu-item index="/customer"><a>客户列表</a></el-menu-item> -->
                      <el-menu-item index="/reservation">预约表</el-menu-item>
                      <el-menu-item index="/OperationPage">耗卡</el-menu-item>
                      <el-menu-item index="/recharge">会员充值</el-menu-item>
                      <el-menu-item index="/payment">付款</el-menu-item>
                      <el-menu-item index="/debt">欠款</el-menu-item>
                    </el-menu>

                </div>

                <div class="right-nav">
                    <!-- 通知 -->
                    <div class="bell" @click="tip=!tip">
                        <i class="el-icon-bell"></i>
                        <span class="num">2</span>
                    </div>
                    <!-- 通知提示 -->
                    <div class="tip" v-if="tip">
                    <div class="tip-top"></div>
                        这是通知提示
                    </div>
                    
                    <el-menu
                      :router="true" 
                      :default-active="$route.path"
                      class="el-menu-demo2"
                      mode="horizontal"
                      background-color="#3a4354"
                      text-color="#fff"
                      active-text-color="#ffd04b">
                        <el-submenu  class="user-nav" index="">
                            <template slot="title" >
                                <img :src="$store.state.admin.img" alt="" class="userimg">
                              <span class="admin-name">{{$store.state.admin.name}}
                              </span>
                            </template>
                            <el-menu-item index="/message">账号信息</el-menu-item>
                            <el-menu-item index="/password">修改密码</el-menu-item>
                            <el-menu-item index="/password">后台</el-menu-item>
                            <el-menu-item index="" @click.native="logout">退出登录</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </div>

	</div>
</template>

<script>
export default {
  data () {
    return {
      tip:false,
    }
  },
  methods: {
    logout: function () {
      // var _this = this;
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        // 删除登录信息
        sessionStorage.removeItem('user');
        this.$router.push('/login');
        this.$message.success('已退出登录')
      }).catch(() => {

      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      this.$router.push(command);
    }

  }
}
</script>
<style>
.el-menu-demo2 .el-submenu__title{
    color: #fff !important;
    border-bottom-color:#3a4354 !important;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
    display: flex;
    height: 60px;
    background: #3a4354;
}
.logo{
    width: 360px;
    display: flex;
    justify-content: center;
    align-content: center;
}
.logo img{width: 200px;}
.header .nav{
    display: flex;
    justify-content: space-between;
    width: calc(100% - 360px);
}
.el-menu-demo li{
    width:100px;
    text-align: center;
}
.right-nav{
    /*width: 300px;*/
    display: flex;
    margin-right: 30px;
}
.user-nav img{
    width: 42px;
    border-radius: 50%;
    margin-right: 5px;

}

.bell{
    width: 60px;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
}
.bell .el-icon-bell{
    color: #fff;
    font-size: 22px;
}
.bell .num{
    border:0;
    background: red;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    color: #fff;
    position: absolute;
    right: 8px;
    top: 12px;
}
.tip{
    width: 300px;
    height: 150px;
    padding: 20px;
    background: #475368;
    position: absolute;
    top: 65px;
    z-index: 100;
    right: 205px;
    color: #fff;
    font-size: 14px;
}
.tip-top{
    position: absolute;
    right: 20px;
    top: -15px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 15px solid #475368;
}
</style>



