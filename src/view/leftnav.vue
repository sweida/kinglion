<template>
	<div class="aside">
		<!--添加新客户-->
        <newadd></newadd>

		<!--客户列表-->
		<div class="users scroll" >
            <!-- <div v-for="(user,index) in $store.state.userli" v-if="user.state==1 || user.state==2"> -->
            <div v-for="(user,index) in customer" >
                <li class="userli" @click="userInfo(index,$event)" >
                    <i :class="{ active: userindex==index }" class="animate03 i"></i>
                    <img :src="$store.state.admin.img" alt="">
                    <!-- <img :src="user.head_image_path" alt=""> -->
                    <div class="customertext">
                        <h4 class="name">{{user.bi_customer_name}}</h4> 
                        <p>
                            <span class="level" >{{user.customer_grade}}</span> 
                            <span class="payState red" v-if="user.order_status==1" >待支付</span>
                            <span class="payState zise" v-else-if="user.order_status==2" >已预约</span>
                            <span class="payState orange" v-else-if="user.order_status==3" >待服务</span>
                            <span class="payState success" v-else-if="user.order_status==4" >已完成</span>

                        </p>
                    </div> 
                </li>
                <!--客户信息-->
                <el-collapse-transition>
                    <div class="userInfo" v-if="userindex==index ">
                        <ul>
                            <li>
                                <span class="span1">账户余额：</span>
                                <span class="span2">{{user.real_balance}}</span>
                            </li>
                            <li>
                                <span class="span1">最近到店：</span> 
                                <span class="span2">{{user.last_arr_time}}</span> 
                            </li>
                            <li>
                                <span class="span1">联系方式：</span> 
                                <span class="span2">{{user.bi_mobile}}</span> 
                            </li>
                            <li>
                                <span class="span1">持有项目总数：</span> 
                                <span class="span2">{{user.projectAmount}}</span> 
                            </li>
                        </ul>
                        <div class="morebox">
                            <router-link class="moreli" to="/customerdetail">
                                <img src="../assets/nav/leftnav3.png" alt="">
                                <p>客户资料</p>
                            </router-link>
                            <div class="moreli">
                                <img src="../assets/nav/leftnav4.png" alt="">
                                <p>订单状态</p>
                            </div>
                        </div>
                        <div class="guwen">
                            <div class="guwenli">专属顾问：<span>{{user.customer_adviser_name}}</span></div>
                            <div class="guwenli">专属售后：<span>{{user.customer_cosmet_name}}</span></div>
                        </div>
                    </div>
                </el-collapse-transition>
            </div>
		</div>

	</div>
</template>

<script>
import newadd from '../view/Customer/new'
import {getinfo} from '@/api/user';
export default {
  components:{
    newadd
  },
  data () {
    return {
      state:true,
      customer:[],
      userindex:this.$store.state.userindex,
      param:{
        target_pagination:"1",
        branch_num:"1",
        condition_str:"1"
      }
    }
  },
  created:function() {
    getinfo(this.param).then(res=>{
      this.customer = res.data.data.restMoneyList
      // console.log(res.data.data.restMoneyList)
    })
  },
  methods: {
    userInfo: function(index){
      this.userindex=index
      this.$store.state.customer_id = this.customer[index].bi_customer_id
      this.$store.state.customer_info = this.customer[index]
      console.log(this.$store.state.customer_info)
    },
  }
}
</script>

<style scoped>
.aside{
    width: 300px;
    margin-right: 10px;
    height: 100%;
    position: relative;
    box-shadow: 2px 2px 10px #b5b4b4;
}

/*信息列表*/
.users{
    width: 100%;
    overflow:auto;
    background: #fff;
    height: calc(100% - 150px);
}
.users .userli{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #e6ebf5;
    font-size: 12px;
    color: #333;
    position: relative;
    background: #fff;

}
.userli .i{ 
    position: absolute;
    width: 4px;
    height: 0px;
    left: 0;
}
.userli .i.active{
    height: 44px;
    background: #59abff;
}
.users .userli:hover{
    cursor: pointer;
    background:#e5f1ff;
}
.users .userli img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 0 10px 0 6px;
}
.users .userli .customertext{
    line-height: 22px;
    color: #333;
    font-size: 12px;
    flex:1;
}
.users .userli .customertext h4{
    font-size: 14px;
}
.users .userli .payState{
    float: right;
}

/*信息详情*/
.userInfo{
    font-size: 12px;
    width: 100%;
    background: #f7f7f7;
    color: #333;
    padding: 10px 20px;
    box-sizing: border-box;
}
.userInfo ul li{
    height: 28px;
    line-height: 28px;
    border-bottom: 1px solid #e6ebf5;
}
.userInfo ul li:last-child{
    border-bottom:none;
}
.userInfo ul li .span2{
    float: right;
    text-align: right;
    color: #2883f0;
    font-weight: bold;
}
.morebox, .guwen{
    display: flex;
    justify-content: center;
}
.moreli{
    text-align: center;
    padding: 15px 20px;
    cursor: pointer;
    color: #333;
}
.guwenli{
    border:1px solid #ccc;
    line-height: 28px;
    padding: 0 10px;
    font-size: 12px;
    background: #fff;
}
.guwenli:first-child{
    border-right: 0;
}
.guwenli span{
    color: #2883f0;
}


</style>


