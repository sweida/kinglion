<template>
  <div>
    <div class="top-box">
      <div class="leftbox">
        <!-- 购买项目产品内容 -->
        <product class="buybox"></product>


      </div>

      <!-- 生成订单 -->
      <div class="rightbox">
        <p class="title">生成订单</p>
        <div class="info">
          <li>
            <label>客户姓名</label>
            <span>王语嫣</span>
            <strong>非会员</strong>
          </li>
          <li>
            <label>销售人员</label>
            <el-select v-model="market" class="market" placeholder="请选择销售人员" >
              <el-option label="婷婷" value="shanghai"></el-option>
              <el-option label="娜娜" value="beijing"></el-option>
            </el-select>
          </li>

        </div>

        <div class="memberDeal">
          <li class="first"><h3>￥500000</h3>会员卡余额</li>
          <li><p>{{discount[level].project}}</p>项目</li>
          <li><p>{{discount[level].project}}</p>产品</li>
          <li><p>{{discount[level].project}}</p>套餐</li>
        </div>

        <div class="paybox-input">
          <span>实价</span>￥<h3>2344444</h3>
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

          <div class="paytypebox scroll">
            <li>
              <i class="el-icon-remove-outline" ></i>
              <span>支付宝</span>
              <input type="text" v-model="money" class="money">
            </li>

          </div>

          <div class="payend">
            <p>实收：<span class="red">￥{{recharge}}</span></p>
            <el-button type="primary" size="small">生成订单</el-button>
          </div>
      </div>
    </div>

    <div>

    </div>



        <span @click="btnDiscounts" class="discountstext">优惠赠送+</span>
        <discounts class="buybox" v-if="discounts"></discounts>


    <!-- 添加赠送商品 -->
    <el-dialog title="添加优惠" :visible.sync="productBox" class="buyproduct">
      <product></product>
      <div slot="footer" class="dialog-footer">
        <el-button @click="productBox = false">取 消</el-button>
        <el-button type="primary"  @click="productBox = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import product from './product'
import discounts from './discounts'

export default {
  components:{
    product,
    discounts
  },
  data() {
    return {
      recharge:0,
      money:'',
      market:'',
      xiaoshou:'婷婷',
      paytype:'支付宝',
      productBox: false,
      discounts:false,
      level:0,  //会员等级
      // 会员折扣
      discount:[
        {level:'初级会员',project:'无折扣',product:'无折扣',setMeal:'无折扣'},
        {level:'白银会员',project:'9折',product:'9折',setMeal:'9折'},
        {level:'黄金会员',project:'8折',product:'8折',setMeal:'8折'},
        {level:'白金会员',project:'7折',product:'7折',setMeal:'7折'},
      ],
    }
  },
  methods:{
    btnDiscounts:function(){
      this.discounts = !this.discounts
    }
  }
}
</script>

<style>
.buyproduct .el-dialog {
  width: 980px;
}
.market .el-input__inner{
  height: 34px;
}
</style>
<style scoped>
.top-box{
  background: #fff;
  height: 490px;
  box-sizing: border-box;
  margin-left: 10px;
  margin-bottom: 20px;
  display: flex;
}
.buybox{
  width: 1500px;
  padding:20px;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 15px;
  font-size: 14px;
}
.leftbox{
  margin-left: 10px;
  float: left;
}
.rightbox{
  display: none;
  width: 350px;
  margin-left: 20px;
  float: left;
  background: #fff;
  position: relative;
  padding:20px 25px;
  box-sizing: border-box;
  border-left: 1px solid #eee;
}
.rightbox .title{
  font-size: 18px;
  padding-bottom: 8px;
}

.rightbox .info li{
  font-size: 14px;
  line-height: 40px;
  color: #666;
  /*display: flex;*/
}
.rightbox .info li label{
  width: 70px;
  display: inline-block;
}
.rightbox .info li strong{
  color: #0099FF;
  font-weight:100;
  background: #D4E5F7;
  font-size: 12px;
  height: 20px;
  border-radius: 15px;
  float: right;
  padding:2px 15px;
  margin-top: 7px;
  line-height: 20px;
}

.rightbox .market{
  width: 150px;
  float: right;
}
.paybox-input{
  width: 100%;
  height: 60px;
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
  height: 86px;
  font-size: 12px;
  background: #f1f8ff;
  border-radius: 5px;
  padding:4px 10px;
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
  margin:6px 0;
  box-sizing: border-box;
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
.rightbox .payend{
  position: absolute;
  bottom: 20px;
  font-weight: bold;
  border-top:1px solid #4DA9FF;
  width: calc(100% - 50px);
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.rightbox .payend button{
  float: right;
}





.discountstext{
  font-size: 14px;
  color: #409EFF;
  line-height: 26px;
}
</style>