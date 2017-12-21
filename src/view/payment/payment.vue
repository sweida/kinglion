<!-- 当有充值订单存在时，购买订单不显示 -->
<template>
<div >
  <!-- 上部分 -->
  <div class="top-box scroll-x">
    <!-- 订单列表 -->
    <div class="paymain" v-show="item.show" v-for="(item,index) in paylist">
      <p class="title">N.0{{index+1}} {{item.type==4 ? "充值订单" : "购买订单"}}<span class="detail" @click="detail(index)">详情</span></p>
      <i class="el-icon-delete" @click="deleteli(index)"></i>
      <li>订单号： <span>{{item.orderNumber}}</span></li>
      <li>创单时间： <span>{{item.singleDate}}</span></li>
      <li v-if="item.type!=4">总价： <span class="amount">￥{{item.amount}}</span></li>
      <div class="recharge" v-if="item.type==4">
        <div class="paybox-input">
          <span>充值</span>￥<h3>{{item.amount}}</h3>
        </div>
        <div class="paybox-input paybox-input2">
          <span>实付</span>￥<h3>{{item.amount}}</h3>
        </div>
      </div>


      <div class="paybox-input" v-else>
        <span>实价</span>￥<h3>{{0.75 * item.amount}}</h3>
        <el-popover
          placement="top-end"
          width="200"
          trigger="hover"
          content="钻石会员卡享受购买优惠，项目7.5折，产品7.5折，套餐6.5折">
          <i class="el-icon-info" slot="reference"></i>
        </el-popover>

      </div>

      <li class="hasmoney" v-if="item.type!=4">当前会员卡余额<span>￥{{hasmoney}}</span></li>
      <div class="paytype">
        支付方式 
        <!-- <span class="add">新增 +</span> -->
        <el-dropdown class="add">
          <span class="addtext">
            新增 +
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>会员卡</el-dropdown-item>
            <el-dropdown-item>支付宝</el-dropdown-item>
            <el-dropdown-item>微信</el-dropdown-item>
            <el-dropdown-item >银行卡</el-dropdown-item>
            <el-dropdown-item >现金</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="paytypebox scroll">
        <li>
          <i class="el-icon-remove-outline" @click="deletePay"></i>
          <span>会员卡</span>
          <input type="text" v-model="money" class="money">
        </li>

      </div>

      <div class="qian" v-if="debt"><span class="text">还欠</span><span class="red">￥10000</span></div>
    </div>

  </div>

  <!-- 下面 -->
  <div class="paylibox">
    <!-- 左边 -->
    <div class="left">
      <div class="payli" >
        <p class="title">全部订单</p>
        <li class="tr">
          <!-- <el-checkbox class="tr1" label="NO.01" checked>全选</el-checkbox> -->
          <span>选择</span>
          <span class="tr2">订单序号</span>
          <span class="tr3">总价</span>
          <span class="tr3">实价</span>
          <span class="tr4">创建时间</span>
          <span class="tr5">操作</span>

        </li>
        <li v-for="(item,index) in paylist">
          <el-checkbox class="tr1"  @change="item.show=!item.show" checked></el-checkbox>
          <span class="tr2"> N.0{{index+1}} {{item.type==4 ? "充值订单" : "购买订单"}}</span>
          <span class="tr3">￥{{item.amount}}</span>
          <span class="tr3">￥{{item.amount}}</span>
          <span class="tr4">{{item.singleDate}}</span>
          <span class="delete" @click="deleteli(index)">删除</span>
        </li>
      </div>
    </div>
    
    <!-- 右边 -->
    <div class="right">
      <div class="top">
        <div class="textbox">

          <div class="alllibox">
            <p>共付</p>
            <p>会员卡<span>￥2000</span></p>
            <p>优惠券<span>￥2000</span></p>
          </div>
          <p class="debt">欠款<span>￥10000</span></p>
        </div>
        <div class="paybg">
          <p>收款</p>
          <p class="end">￥<span>320000</span></p>
        </div>
      </div>
      <div class="bottom">
        <div class="receipt">
          <input type="password" placeholder="请输入密码" v-model="password">
          <button @click="onSubmit">确认收款</button>
        </div>

      </div>
    </div>

  </div>


    <el-dialog :visible.sync="moredetail" title="订单详情" width="1150px">
      <detail></detail>
    </el-dialog>



</div>  
</template>

<script>
import detail from './detail'

  export default {
    data() {
      return {
        password:'',
        paymoney:'',
        money:22300,
        hasmoney:42300,
        paymainbox:true,
        li1:true,
        li2:true,
        allcountend:40000,
        debt:false,
        disabled:true,
        moredetail:false,//弹框
        // 订单列表 type充值订单4  购买订单3
        paylist:[
          {show:true,type:4,orderNumber:'12314411343',singleDate:'2017-12-01 16:55:21',amount:24000,discounts:200},
          {show:true,type:3,orderNumber:'12314411343',singleDate:'2017-12-01 16:55:21',amount:25000,discounts:300},
          {show:true,type:3,orderNumber:'12314411343',singleDate:'2017-12-01 16:55:21',amount:26000,discounts:300},
        ],
        paytype:[
          {name:"会员卡",},
          {name:"支付宝",},
          {name:"微信",},
          {name:"银行卡",},
          {name:"现金",},
        ]
      }
    },
    methods:{
      // 删除订单
      deleteli(index) {
        this.$confirm('确认删除该订单吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.paylist.splice(index, 1);
        }).catch(() => {

        });
        
      },
      // 输入密码
      onSubmit() {
        if(this.password != '123456' ){
          this.$message.error('密码不正确')
        }else{
          this.$message.success('收款成功')

        }
      },
      // 查看订单详情
      detail(index) {
        this.moredetail = true
      },
      // 删除支付方式
      deletePay:function(){

      }

    },
    components:{
      detail
    }
  }
</script>

<style scoped>
.top-box{
  /*width: 100%;*/
  background: #fff;
  height: 490px;
  box-sizing: border-box;
  margin-left: 10px;
  margin-bottom: 20px;
  display: flex;
}
.paymain{
  flex: 0 0 300px;
  height: 420px;
  position: relative;
  float: left;
  margin:30px 40px;
  background: #fff;
  box-shadow: 2px 2px 10px #b5b4b4;
  padding:10px 20px;
  box-sizing:border-box;
  font-size: 14px;

}
.paymain h3{
  padding: 5px 0 10px;
}
.paymain li{
  line-height: 26px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.paymain li span{
  color: #888;
  margin-left: 10px;
}
.paymain .title{
  font-size: 16px;
  line-height: 30px;
  padding-bottom: 10px;
}
.paymain .title .detail{
  margin-left: 15px;
  color: #3DB4FF;
  cursor: pointer;
}
.paymain li .amount{
  font-weight: bold;
  font-size:16px;
  color: #475669;
}
.money{
  background: transparent;
  border:0;
  float: right;
  text-align: right;
  outline: none;
  color: #475669;
  font-weight: bold;
  width: 150px;
  font-family: "微软雅黑";
}
.el-icon-delete{
  position: absolute;
  right: 17px;
  top: 15px;
  font-size: 20px;
  color: #888;
  cursor: pointer;
}

.paybox-input{
  width: 100%;
  height: 64px;
  background:-webkit-linear-gradient(left , #39b2ff, #8ed9ff);
  border-radius: 5px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  padding:0 10px;
  box-sizing: border-box;
  position: relative;
}
.paybox-input2{
  background:-webkit-linear-gradient(left, #40cdd1, #80d5d4);
}
.paybox-input span{
  border-right: 1px solid #fff;
  line-height: 32px;
  padding-right: 10px;
}
.paybox-input h3{
  font-weight: 100;
  color:#fff;
  font-size: 30px;
  width: 145px;
}
.paybox-input i{
  position: absolute;
  right: 8px;
  top: 5px;
  font-size: 18px;
  cursor: pointer;
}
li.hasmoney{
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
  font-size: 15px;
  padding-bottom: 5px;
}
li.hasmoney span{
  font-weight: bold;
  color: #475669;
}
.paytype{
  line-height: 28px;
}
.paytype .add{
  float: right;
  color: #3DB4FF;
}
.paytype .add span{
  cursor: pointer;
}
.paytypebox{
  width: 100%;
  height: 100px;
  font-size: 12px;
  background: #f1f8ff;
  border-radius: 5px;
  padding:5px 10px;
  box-sizing:border-box;
}
.paytypebox li span{
  line-height: 26px;
  color: #333;
}
.paytypebox li i{
  color: #4DA9FF;
  font-size: 17px;
}
.paytypebox li .right{
  float: right;
  color: #475669;
  font-weight: bold;
}
.qian{
  padding:5px 10px;
}
.qian .text{
  padding-left: 32px;
}
.qian .red{
  float: right;
}


.paylibox{
  font-size: 14px;
  /*width: 100%;*/
  height: calc(100% - 510px);
  box-sizing: border-box;
  margin-left: 10px;
  display: flex;
  min-height: 300px;
}
.paylibox .left{
  background: #fff;
  width: calc(100% - 620px);
  height: 100%;
  margin-right: 20px;
  box-sizing: border-box;
  padding: 20px;

}
.paylibox .left .title{
  padding-bottom: 8px;
}
.paylibox .left li{
  padding: 0 20px;
  display: flex;
  line-height: 38px;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #f3f3f3;
}
.paylibox .left li.tr{
  background: #d3d8e1;
}
.paylibox .left li .tr1{
  width: 60px;
  text-align: left;
}
.paylibox .left li .tr2{
  width: 140px;
}
.paylibox .left li .tr3{
  width: 120px;
}
.paylibox .left li .tr4{
  width: 160px;
}
.paylibox .left li .tr5{
  width: 60px;
}
.paylibox .left li .delete{
  background: #FF546C;
  display: block;
  width: 50px;
  height: 24px;
  line-height: 24px;
  margin: 7px 0;
  color: #fff;
  border-radius: 3px;  
  cursor: pointer;
}
.paylibox .right{
  width: 600px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
}

.paylibox .right .top{
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #EBEBEB;
}
.paylibox .right .top .textbox{
  width: 200px;
  flex:1;
}
.paylibox .right .top .textbox .debt{
  line-height: 24px;
  padding: 4px 20px;
}
.paylibox .right .top .textbox .debt span{
  float: right;
  color: red;
  font-weight: bold;
}
.paylibox .right .top .textbox .alllibox{
  background: #F1F8FF;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  padding: 8px 20px;
  box-sizing: border-box;
}
.paylibox .right .top .textbox .alllibox p{
  line-height: 24px;
}
.paylibox .right .top .textbox .alllibox span{
  float: right;
  color: #475669;
  font-weight:bold;
}
.paylibox .right .top .paybg{
  font-size: 16px;
  margin-left: 30px;
  flex: 1;
  background: url('../../assets/paybg2.png') left bottom repeat-x;
  height: 160px;
  /*background-size: cover;*/
  width: 200px;
  border-radius: 4px;
  color: #fff;
}
.paylibox .right .top .paybg p{
  padding:15px 15px 6px;
}
.paylibox .right .top .paybg .end{
  text-align: center;
  font-size: 30px;
}
.paylibox .right .bottom{
  display: flex;
  /*justify-content: space-around;*/
}
.paylibox .right .bottom .receipt{
  display: flex;
  border: 1px solid #409eff;
  border-radius: 5px;
  height: 34px;
  line-height: 34px;
  /*flex:3;*/
  /*overflow: hidden;*/
}
.paylibox .right .bottom .receipt input{
  outline: none;
  text-indent: 10px;
  border:none;
  border-radius: 10px;
}
.paylibox .right .bottom .receipt button{
  border: none;
  background: #409eff;
  outline: none;
  padding:0 10px;
  cursor: pointer;
  color: #fff;
/*  margin-left: 30px;*/
}
.paylibox .right .bottom button{
  margin-left:30px;
}



.footbutton{
    position: absolute;
    bottom: 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-around;
    width: 260px;
    box-sizing: border-box;
    padding: 0 10px;
}
</style>

