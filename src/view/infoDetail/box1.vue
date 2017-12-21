<template>
    <div>

      <div class="boxli animate03">
        <p>今日服务</p>
        <div class="todyprogress">
          <el-progress type="circle" :percentage="75" :width="100" ></el-progress>
          <div class="hr"></div>
          <div class="data">
              <p>今日预约人数</p>
              <h6>100人</h6>
              <p>今日到店人数</p>
              <h6>75人</h6>
          </div>
        </div>
      </div>

      <div class="boxli animate03">
        <p>近7日收入</p>
        <div class="">
            <div id="chartLine" style="width:100%; height:180px;top:-38px;"></div>
        </div>
      </div>

      <div class="boxli animate03">
        <p>今日收入</p>
        <div class="income">
          ￥<span>234522.0</span>
        </div>
        <div class="todygoal">
          <div>今日目标</div>
          <div class="rate"><div class="rate2"></div></div>
        </div>
      </div>

<!--       <div class="boxli animate03">
        <p>今日收入</p>
        <div class="income">
          ￥<span>234522.0</span>
        </div>
        <div class="todygoal">
          <div>今日目标</div>
          <div class="rate"><div class="rate2"></div></div>
        </div>
      </div> -->

    </div>


</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartLine: null,
            }
        },

        methods: {

            drawLineChart() {
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                this.chartLine.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },

                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true,
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['6天前', '5天前', '4天前', '3天前', '前日', '昨日', '今日']
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            name: '当日收入',
                            type: 'line',
                            smooth:true,  //平滑曲线
                            itemStyle:{  //折线样式
                              normal:{
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#1474ed' // 0% 处的颜色
                                }, {
                                    offset: 0.5, color: '#2883f0' //50% 处的颜色
                                }, {
                                    offset: 1, color: '#88d8ff' // 100% 处的颜色
                                }], false)
                              }
                            },
                            areaStyle: {  //折线面积
                              normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#88d8ff' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#dff4fe' // 100% 处的颜色
                                }], false)
                              },
                            },
                            data: [1200, 1320, 1100, 1300, 1000, 2000, 2100]
                        }
                    ]
                });
            },
            drawCharts() {
                this.drawLineChart()
            },
        },

        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

</script>

<style scoped>

.box1 .boxli{
  flex: 1;
  margin: 0 10px 20px 10px;
  height: 190px;
  background: #fff;
  box-shadow: 1px 1px 1px #b5b4b4;
  padding:12px 20px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 2px;
}
.box1 .boxli:hover{
  box-shadow: 2px 2px 12px #b5b4b4;
}
.todyprogress{
  display: flex;
  margin-top: 22px;
  justify-content: space-around;
  padding: 0 10px;
}
.hr{
  width: 1px;
  background: #ddd;
  height: 100px;
}
.data{
  line-height: 25px;
}
.data h6{
  color: #2883f0;
}
.el-progress__text{
  font-size: 32px !important;
}
.box1 .income{
  padding: 30px;
  text-align: center;
  color: #2883f0;
}
.box1 .income span{
  font-size: 36px;
}
.todygoal{
  display: flex;
  padding: 0 20px;
  align-items: center;
}
.todygoal .rate{
  height: 8px;
  background: #ddd;
  flex: 1;
  margin: 0 10px;
  border-radius: 5px;
}
.todygoal .rate .rate2{
    /*background: #000;#1474ed*/
    background:-webkit-linear-gradient(left , #207bee, #85d5fe);
    /*background:-webkit-gradient(linear, 0 0, 0 right, from(#85d5fe), to(#207bee));*/
    width: 75%;
    height: 100%;
    border-radius: 5px;
}
</style>
