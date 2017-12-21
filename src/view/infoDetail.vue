<template>
  <div >
    <indexbox1 class="box1" ></indexbox1>
    <indexbox2 class="box2 animate03" ></indexbox2>
    <indexbox3 class="box2 animate03" ></indexbox3>

  </div>
</template>

<script>
import indexbox1 from '../view/infoDetail/box1'
import indexbox2 from '../view/infoDetail/box2'
import indexbox3 from '../view/infoDetail/box3'

export default {
  name: 'app',
  components:{
    indexbox1,
    indexbox2,
    indexbox3,

  },
  data(){
    return{

    }
  }
}
</script>

<style>

.box1{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.box2{
  width: calc(100% - 20px);
  background: #fff;
  box-sizing: border-box;
  margin:0 10px 20px 10px;
}

.box2:hover{
  box-shadow: 2px 2px 12px #b5b4b4;
}
.animate03{
  -webkit-transition-duration:0.3s;
   -moz-transition-duration:0.3s;
    -ms-transition-duration:0.3s;
    transition-duration:0.3s;
}

</style>
