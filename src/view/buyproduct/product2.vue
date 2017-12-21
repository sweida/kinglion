<template>

<div >
  <span>选择购买项目和产品</span>
  <input  placeholder="请输入内容" class="search" v-on:keyup.enter="searchProduct"><i class="el-icon-search" @click="searchProduct"></i>
  <div class="tac">
    <!-- 左侧菜单 -->
    <div class="lefttree scroll">
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="active"
         @select="handleSelect"

         >
        <el-submenu index="project">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>项目</span>
          </template>
          <el-menu-item-group v-for="(item,index) in project">
            <el-menu-item :index="item.id">{{item.type}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="product">
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>产品</span>
          </template>
          <el-menu-item-group v-for="(item,index) in product">
            <el-menu-item :index="item.id">{{item.type}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="setmeal">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>套餐</span>
          </template>
          <el-menu-item-group v-for="(item,index) in setmeal">
            <el-menu-item :index="item.id">{{item.type}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </div>

    <!-- 项目产品列表 -->
    <div class="discountbox">
      <div class="tabletitle">
        <span class="span1">序号</span>
        <span class="span2">名称</span>
        <span class="span3">价值</span>
        <span class="span4">选择</span>
      </div>
      <!-- 项目列表 -->
      <div class="discountlist" v-for="item in project" v-show="index==item.id">
        <li v-for="(li,index) in item.children" :class="ischeck">
          <span class="span1">{{index+1}}</span>
          <!-- <span class="span1">{{li.id}}</span> -->
          <span class="span2">{{li.name}}</span>
          <span class="span3">￥{{li.price}}</span>
          <span class="span4"><el-checkbox @change="hascheck(li,index)" v-model="li.checked"></el-checkbox></span>
        </li>
      </div>
      <!-- 产品列表 -->
      <div class="discountlist" v-for="item in product" v-show="index==item.id">
        <li  v-for="(li,index) in item.children" :class="ischeck">
          <span class="span1">{{index+1}}</span>
          <span class="span2">{{li.name}}</span>
          <span class="span3">￥{{li.price}}</span>
          <span class="span4"><el-checkbox @change="hascheck(li,index)" v-model="li.checked"></el-checkbox></span>
        </li>
      </div>
      <!-- 套餐列表 -->
      <div class="discountlist" v-for="item in setmeal" v-show="index==item.id">
        <li v-for="(li,index) in item.children" :class="ischeck">
          <span class="span1">{{index+1}}</span>
          <span class="span2">{{li.name}}</span>
          <span class="span3">￥{{li.price}}</span>
          <span class="span4"><el-checkbox @change="hascheck(li,index)" v-model="li.checked"></el-checkbox></span>
        </li>
      </div>
    </div>

    <!-- 已添加项目产品 -->
    <div class="hasdiscount">
      <li class="title">
        <span class="span1">已添加购买</span>
        <span class="span2">价格</span>
        <span class="span3">数量</span>
      </li>
      <div class="scroll" style=" height: 316px;">
        <li v-for="(item,index) in SelecteBox" >
          <span class="span1" :title="item.name">{{item.name}}</span>
          <!-- <span class="span1">{{item.id}}</span> -->
          <span class="span2">￥{{item.sum}}</span>
          <div class="countbox">
            <i class="el-icon-minus" @click="minus(item,index)"></i>
            <span>{{item.count}}</span>
            <i class="el-icon-plus" @click="plus(item,index)"></i>
          </div>
        </li>
      </div>
        <div class="allcount">总价：<span>￥{{allcount}}{{_allcount}}</span></div>
    </div>

  </div>


</div>

</template>



<script>
  export default {
    data() {
      return {
        count:1,
        ischeck:false,
        allcount:0,
        active: 'project1',
        index: 'project1',
        //所有项目产品id不能相同
        project:[
          {id:'project1',type:'面部',children:[
            {id:11,name: '白瓷面部(体验)护1', price:2300,checked:false,count:1,}, 
            {id:12,name: '白瓷面部(体验)护2', price:1900,checked:false,count:1,}, 
            {id:13,name: '白瓷面部(体验)护3', price:1200,checked:false,count:1,},
          ]},
          {id:'project2',type:'手部',children:[
            {id:14,name: '白瓷面部(体验)护2', price:2300,checked:false,count:1,}, 
            {id:15,name: '白瓷面部(体验)护3', price:1900,checked:false,count:1,}, 
            {id:16,name: '白瓷面部(体验)护4', price:1200,checked:false,count:1,},
          ]},
          {id:'project3',type:'胸部',children:[
            {id:17,name: '白瓷面部(体验)护3', price:2300,checked:false,count:1,}, 
            {id:18,name: '白瓷面部(体验)护4', price:1900,checked:false,count:1,}, 
            {id:19,name: '白瓷面部(体验)护5', price:1200,checked:false,count:1,},
          ]},
          {id:'project4',type:'腿部',children:[
            {id:21,name: '白瓷面部(体验)护4', price:2300,checked:false,count:1,}, 
            {id:22,name: '白瓷面部(体验)护5', price:1900,checked:false,count:1,}, 
            {id:23,name: '白瓷面部(体验)护6', price:1200,checked:false,count:1,},
          ]},
        ],
        product:[
          {id:'product1',type:'面部',children:[
            {id:31,name: '白瓷面部(体验)护21', price:2300,checked:false,count:1,}, 
            {id:32,name: '白瓷面部(体验)护22', price:1900,checked:false,count:1,}, 
            {id:33,name: '白瓷面部(体验)护23', price:1200,checked:false,count:1,},
          ]},
          {id:'product2',type:'手部',children:[
            {id:41,name: '白瓷面部(体验)护22', price:2300,checked:false,count:1,}, 
            {id:42,name: '白瓷面部(体验)护23', price:1900,checked:false,count:1,}, 
            {id:43,name: '白瓷面部(体验)护24', price:1200,checked:false,count:1,},
          ]},
          {id:'product3',type:'胸部',children:[
            {id:51,name: '白瓷面部(体验)护23', price:2300,checked:false,count:1,}, 
            {id:62,name: '白瓷面部(体验)护24', price:1900,checked:false,count:1,}, 
            {id:73,name: '白瓷面部(体验)护25', price:1200,checked:false,count:1,},
          ]},
        ],
        setmeal:[
          {id:'setmeal1',type:'面部',children:[
            {id:1,name: '白瓷面部(体验)护31', price:2300,checked:false,count:1,}, 
            {id:2,name: '白瓷面部(体验)护32', price:1900,checked:false,count:1,}, 
            {id:3,name: '白瓷面部(体验)护33', price:1200,checked:false,count:1,},
          ]},
          {id:'setmeal2',type:'手部',children:[
            {id:1,name: '白瓷面部(体验)护32', price:2300,checked:false,count:1,}, 
            {id:2,name: '白瓷面部(体验)护33', price:1900,checked:false,count:1,}, 
            {id:3,name: '白瓷面部(体验)护34', price:1200,checked:false,count:1,},
          ]},
          {id:'setmeal3',type:'胸部',children:[
            {id:1,name: '白瓷面部(体验)护33', price:2300,checked:false,count:1,}, 
            {id:2,name: '白瓷面部(体验)护34', price:1900,checked:false,count:1,}, 
            {id:3,name: '白瓷面部(体验)护35', price:1200,checked:false,count:1,},
          ]},
        ],
        SelecteBox: [],//添加的项目

      }
    },
    methods: {
      // tab菜单
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
        this.index=keyPath[1]
        // console.log("this.index:"+this.index);
      },
      //搜索
      searchProduct:function(){
        console.log(77)
      },
      //添加项目列表
      hascheck:function(li,index){
        if(li.checked == true){
          this.ischeck = true
          this.SelecteBox.push({
            id:li.id,
            name:li.name,
            price:li.price,
            sum:li.price,
            count:li.count,
          })
          // this.allcount = this.SelecteBox.sum
          console.log('点击选择框'+li.id)
        }else{
          console.log('关闭选择框'+li.id+'--'+this.SelecteBox.id)
          let getArrIndex = function(arr, obj) {
              let index = null;
              let key = Object.keys(obj)[0];
              arr.every(function(value, i) {
                  if (value[key] === obj[key]) {
                      index = i;
                      return false;
                  }
                  return true;
              });
              return index;
          };
          let getIndex = getArrIndex(this.SelecteBox,{id:li.id});
          this.SelecteBox.splice(getIndex, 1)

        }
      }, 
      // 购物列表加数
      plus:function(item,index){
        item.count+=1
        item.sum = item.price * item.count
        // this.allcount = item.sum
      },
      // 购物列表减数
      minus:function(item,index){
        if(item.count==1){
          item.count = 1
          // let getArrIndex = function(arr, obj) {
          //     let index = null;
          //     let key = Object.keys(obj)[0];
          //     arr.every(function(value, i) {
          //         if (value[key] === obj[key]) {
          //             index = i;
          //             return false;
          //         }
          //         return true;
          //     });
          //     return index;
          // };
          // let getIndex = getArrIndex(this.SelecteBox,{id:li.id});
          // this.SelecteBox.splice(getIndex, 1)
          // this.SelecteBox.splice(index, 1)
        }else{
          item.count --
          item.sum = item.price * item.count
        }
      },
    },
    computed:{
      // 总价格
      _allcount:function(){
        this.allcount = 0
        for(let i=0, j=this.SelecteBox.length; i< j;i++){
          let sum = this.SelecteBox[i].sum
          this.allcount += sum;
        }
      }
    }

  }
</script>



<style >
.tac{
  display: flex;
}

.lefttree .el-menu {
  border-right: 0; 
}
.el-menu-item-group__title{
  display: none;
}
.el-menu-item, .el-submenu__title{
  height: 40px;
  line-height: 40px;
}
.lefttree .el-submenu .el-menu-item{
  padding-left: 65px !important;
}
.el-submenu .el-menu-item{
  height: 36px;
  line-height: 36px;
}
</style>

<style scoped>
.lefttree{
  width: 150px;
  height: 368px;
  overflow-x: hidden;
}
.search{
  width:200px;
  margin-left:20px;
  margin-bottom:10px;
  border:0;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  outline: none;
  line-height: 32px;
}
/*搜索框按钮*/
.el-icon-search{
  font-size: 18px;
  margin-left: 8px;
  color: #777;
  cursor: pointer;
}
.discountbox{
  width: 460px;
  height: 368px;
  border-left: 1px solid #d3d8e1;
  padding: 0 10px;

}
.tabletitle, .hasdiscount .title{
  background: #d3d8e1;
  line-height: 32px;
  display: flex;
  text-align: center;
}
.tabletitle span{
  border-left: 1px solid #fff;
}
.discountbox .span1{
  width: 80px;
}

.discountbox .span2{
  width: 200px;
}
.discountbox .span3{
  width: 100px;
}
.discountbox .span4{
  width: 80px;
  display: block;
}

.discountlist li span button{
  cursor: pointer;
  border:0;
  padding:4px 10px;
  background: #409EFF;
  color: #fff;
  outline: none;
  border-radius:4px;
}
.discountlist li, .hasdiscount li{
  display: flex;
  text-align: center;
  line-height: 32px;
  border-bottom: 1px solid #e9ecf1;
}
.discountlist li:nth-child(2n){
background: #f3f5f9;
}
.hasdiscount{
  width: 300px;
  border-left: 1px solid #d3d8e1;
  padding-left: 10px;
}
.hasdiscount li .span1{
  width: 120px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hasdiscount li .span2{
  width: 80px;
}
.hasdiscount li .span3{
  width: 100px;
}
.countbox{
  margin:auto;
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
.allcount{
  text-align: right;
}
.allcount span{
  color: red;
}

</style>

