<template>
  <div>
    <!-- <button @click="productBox = true">添加</button> -->
    <div class="leftbox">

      <!-- <p>选择购买项目和产品</p> -->
      <product class="buybox"></product>
      <!-- 优惠赠送 -->
      <!-- <el-checkbox label="优惠赠送">优惠赠送</el-checkbox> -->
      <discounts class="buybox"></discounts>
    </div>

    <div class="rightbox">
      <h3>生产订单</h3>
      <div>客户姓名：<span>王语嫣</span></div>
      <div>
        销售人员：
        <el-select  class="dd" placeholder="请选择销售人员" size="mini">
          <el-option label="银卡" value="shanghai"></el-option>
          <el-option label="金卡" value="beijing"></el-option>
        </el-select>
      </div>
      <div>
        支付方式：
        <el-select  class="dd" placeholder="请选择销售人员" size="mini">
          <el-option label="银卡" value="shanghai"></el-option>
          <el-option label="金卡" value="beijing"></el-option>
        </el-select>
      </div>
      <div>总价<span>￥23444</span></div>
      <div>实收<span>￥23444</span></div>
        <div class="footbutton">
          <el-button type="" size="small" >打　　印</el-button>
          <el-button type="primary" size="small">生产订单</el-button>
        </div>

    </div>

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
import discounts from '../recharge/discounts'

export default {
  components:{
    product,
    discounts
  },
  data() {
    return {
      productBox: false,
    }
  }
}
</script>

<!-- <style>
.buyproduct .el-dialog {
  width: 980px;
}
</style> -->
<style scoped>
.buybox{
  width: 1000px;
  padding:20px;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 20px;
}
.leftbox{
  margin-left: 10px;
  float: left;
}
.rightbox{
  width: 400px;
  height: 600px;
  margin-left: 20px;
  float: left;
  background: #fff;
  position: relative;
  padding:20px 30px;
  box-sizing: border-box;
}
.rightbox h3{
  text-align: center;
  /*line-height: 40px;*/
  padding-bottom: 5px;
}
.footbutton{
  display: flex;
  justify-content: space-around;
  padding: 0 60px;
  position: absolute;
  bottom: 30px;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  left: 0;
}

</style>