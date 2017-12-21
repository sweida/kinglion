<!-- 每次充值都生成一个等级，等级保存一年，可以持有多个等级，但只显示最高等级 -->
<template>
  <div>
    <div class="recharge">


      <div class="rechargemain">
        <!-- 第一个框 -->
        <div class="rechargeli">
          <div class="top"></div>
          <p class="title">客户信息*</p>
          <div class="user-img">
            <img :src="$store.state.admin.img" alt="">
            <p>{{customer.name}}</p>
            <div class="grade">至尊会员</div>
          </div>
          <div class="info">
            <li><label>会员编号</label><span>{{customer.id}}</span></li>
            <li><label>联系方式</label><span>{{customer.phone}}</span></li>
            <li><label>专属顾问</label><span>{{customer.salesman}}</span></li>
            <li><label>会员卡余额</label><span class="bold">￥{{customer.money}}</span></li>
          </div>
        </div>

        <!-- 第二步 -->
        <div class="rechargeli">
          <p class="title">充值</p>
          <div class="rechange-input">
            <span>充值</span>￥<input type="text" v-model="recharge" v-on:input="rechargeFun" autofocus="autofocus">
          </div>
          <div class="present">
            充值后
            <el-popover
              ref="popover"
              placement="top-end"
              width="160"
              trigger="hover"
              >
              <p>这是一段内容这是一段内容确定删除吗？</p>
            </el-popover>
            <span>活动说明<i class="el-icon-info" v-popover:popover></i></span>
          </div>


          <div class="after">
            <li>会员卡余额为<span class="red">￥{{recharge == '' ? customer.money : customer.money+parseInt(recharge)}}</span>
            </li>
            <li>会员卡等级为<span class="blue">{{discount[level].level}}</span></li>
          </div>
          <div class="memberDeal">
            <li class="first">享有<br/>会员优惠</li>
            <li><p>{{discount[level].project}}</p>项目</li>
            <li><p>{{discount[level].project}}</p>产品</li>
            <li><p>{{discount[level].project}}</p>套餐</li>
          </div>
        </div>
        
        <!-- 第三步 -->
        <div class="rechargeli">
          <p class="title">生成订单</p>
          <div class="sales">
          <span>销售人员</span>
          <el-select v-model="value" class="salesbox" placeholder="请选择" size="small">
            <el-option
              v-for="item in marketing"
              :key="item.value"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
          </div>

          <div class="paytype">
            支付方式 
            <el-dropdown class="add">
              <span class="addtext">
                新增 +
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>支付宝</el-dropdown-item>
                <el-dropdown-item>微信</el-dropdown-item>
                <el-dropdown-item >银行卡</el-dropdown-item>
                <el-dropdown-item >现金</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="paytypebox">
            <li>
              <i class="el-icon-remove-outline" ></i>
              <span>支付宝</span>
              <input type="text" v-model="money" class="money">
            </li>

          </div>
          <div class="qian" v-if="debt"><span class="text">还欠</span><span class="red">￥10000</span></div>
          <div class="payend">
            <p>实收：<span class="red">￥{{recharge}}</span></p>
            <el-button type="primary" size="small">生成订单</el-button>
          </div>
        </div>

      </div>


    </div>

    <div class="discBox">
      <div class="left">
        添加赠送+

      </div>
      <div class="right">
        已获赠送
        
<!-- @selection-change="handleSelectionChange" -->
      <el-table
        :data="hasdiscounts"
        stripe
        class="box-main"
        style="width: 100%"
        tooltip-effect="dark"
        
        >
        <el-table-column
          type="index"
          label="类型"
          width="60px"
          >
        </el-table-column>
        <el-table-column
          prop="box1"
          label="已添加赠送"
          width="100px"
          >
        </el-table-column>
        <el-table-column
          prop="box2"
          label="价值"
          width="100px"
          >
        </el-table-column>
        <el-table-column
          prop="box3"
          label="数量"
          width="130px">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="morebtn(scope.$index)" >查看</el-button>

          <div class="countbox">
            <i class="el-icon-minus" @click="minus(item,index)"></i>
            <span>{{item.count}}</span>
            <i class="el-icon-plus" @click="plus(item,index)"></i>
          </div>
          </template>


        </el-table-column>


      </el-table>
      </div>
    </div>


    <!-- 添加赠送商品 -->
    <el-dialog title="添加优惠" :visible.sync="discountsBox">
      <discounts></discounts>
      <div slot="footer" class="dialog-footer">
        <el-button @click="discountsBox = false">取 消</el-button>
        <el-button type="primary"  @click="discountsBox = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>



<script>
import discounts from './discounts'

export default {
  components:{
    discounts
  },
  data() {
    return {
      level:0,  //会员等级
      // 会员折扣
      discount:[
        {level:'初级会员',project:'无折扣',product:'无折扣',setMeal:'无折扣'},
        {level:'白银会员',project:'9折',product:'9折',setMeal:'9折'},
        {level:'黄金会员',project:'8折',product:'8折',setMeal:'8折'},
        {level:'白金会员',project:'7折',product:'7折',setMeal:'7折'},
      ],
      // 选择销售人员
      marketing:[{name:'婷婷'},{name:'娜娜'},{name:'小甜甜'}],

      hasdiscounts:[],
      customer: {
        name: '王语嫣',
        id:'20543518',
        leve: '金卡',
        phone: '13798661922',
        salesman:'婷婷',
        money: 0,
      },
      recharge:'',
      after:'',
      money:'',
      value: '婷婷',
      debt:false,
      discountsBox:false,
    }
  },
  created:function() {

  },
  methods:{
    rechargeFun(){
      let recharge = parseInt(this.recharge)
      if(recharge >= 100000 ){
        console.log('白金会员')
        this.level = 3
      }else if(recharge >= 50000){
        console.log('黄金会员')
        this.level = 2
      }else if(recharge >= 20000){
        console.log('白银会员')
        this.level = 1
      }else{
        console.log('普通会员')
        this.level = 0
      }
    }
  }

}
</script>

<style>
.sales .el-input__inner{
  border-bottom: 0;
}
</style>


<style scoped>
.recharge{
  /*width: 100%;*/
  background: #fff;
  height: 490px;
  margin-left: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding:20px;
}

.rechargemain{
  width: 90%;
  margin:auto;
  display: flex;
  justify-content: space-around;
}
.rechargeli{
  width: 320px;
  height: 450px;
  background: #fff;
  overflow: hidden;
  box-shadow: 2px 2px 12px #b5b4b4;
  position: relative;
  padding: 15px 20px;
  box-sizing: border-box;
}
.rechargeli:first-child{
  border-bottom: 4px solid #a78eff;
}

/*第一步*/
.rechargeli .top{
  width: 110%;
  height: 130px;
  margin-left: -30px;
  margin-top:-40px;
  background:-webkit-linear-gradient(left , #8e8eff, #a88fff);
  transform:rotate(8deg);
  position: absolute;
}
.rechargeli .title{
  color:#333;
  position: relative;
  padding-bottom:15px; 
}
.rechargeli:first-child .title{
  color:#fff;
}
.user-img{
    display: flex;
    flex-direction: column;
    margin-top:10px;
    position: relative;
}
.user-img img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 2;
  margin:auto;
}
.user-img p{
  text-align: center;
  line-height: 40px;
}
.user-img .grade{
  position: absolute;
  right: 20px;
  color: #0099FF;
  font-size: 12px;
  background: #D4E5F7;
  border-radius: 20px;
  padding: 3px 12px;
  bottom: 10px;
}
.rechargeli .info{

}
.rechargeli .info li{
  line-height: 40px;
  color: #666;
  font-size: 14px;
}
.rechargeli .info li label{
  width: 110px;
  text-align: right;
  display: inline-block;
  padding-right: 15px;
}
.rechargeli .info li span{
  border-bottom: 1px solid #ccc;
  display: inline-block;
  width: 120px;
  line-height: 30px;
}
.rechargeli .info li span.bold{
  color: #475669;
}


/*第二步*/
.rechange-input{
  width: 100%;
  height: 70px;
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
  /*border-bottom: 1px solid #fff;*/
  background: transparent;
  color:#fff;
  font-size: 30px;
  width: 150px;
  outline: none;
}
.present{
  line-height: 36px;
  border-bottom: 1px solid #acdcdd;
}
.present span{
  float: right;
  color: #3DB4FF;
  font-size:14px;
}
.present span i{
  font-size: 16px;
  margin-left: 10px;
}
.after{
  padding: 20px 0 30px;
  font-size: 14px;
}
.after li{
  line-height: 30px;
  color: #666;
}
.after li:before{
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #40b5ff;
  display: inline-block;
  margin-right: 8px;
}
.after li span{
  float:right;
  font-weight: bold;
}
.memberDeal{
  width: 100%;
  border:1px solid #4DA9FF;
  height: 60px;
  border-radius: 5px;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 12px;
  overflow: hidden;
  margin-top:30px;
}
.memberDeal li{
  flex:2;
  color: #999;
}
.memberDeal li.first{
  flex:2.5;
  background: #4DA9FF;
  color: #fff;
  padding:15px 0;
  font-size: 12px;
}
.memberDeal li p{
  font-size: 14px;
  color: #475669;
  font-weight: bold;

}


/*第三步*/
.sales{
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin-bottom: 10px;
  font-size: 14px;
}
.salesbox{
  width: 60%;
}
.paytype{
  line-height: 36px;
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
  height: 115px;
  font-size: 12px;
  background: #f1f8ff;
  border-radius: 5px;
  padding:5px 10px;
  box-sizing:border-box;
}
.paytypebox li{
  line-height: 26px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.paytypebox li .money{
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
.qian{
  padding:5px 10px;
}
.qian .text{
  padding-left: 45px;
}
.qian .red{
  float: right;
  font-weight: bold;
}

.payend{
  position: absolute;
  bottom: 25px;
  font-weight: bold;
  border-top:1px solid #4DA9FF;
  width: calc(100% - 40px);
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.payend button{
  float: right;
}


/*下面*/
.discBox{
  /*width: 100%;*/
  height: calc(100% - 511px);
  min-height: 300px;
  margin-left: 10px;
  /*margin-bottom: 20px;*/
  display: flex;
}
.discBox .left{
  width: 700px;
  height: 100%;
  padding:20px;
  box-sizing: border-box;
  background: #fff;
  margin-right:20px;
}
.discBox .right{
  width: calc(100% - 720px);
  height: 100%;
  padding:20px;
  box-sizing: border-box;
  background: #fff;
}
/*添加赠送*/

/*已获赠送*/
.box-main{
  margin-left:0;
  padding:10px 0;
}

</style>

