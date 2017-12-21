<template>
  <div>
    <div class="box-main">
      <p class="title">更改密码</p>
      <el-form ref="form"  label-width="100px" >
        <el-form-item label="原账号密码">
          <el-input v-model="userpassword" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="新账号密码">
          <el-input type="password" v-model="newpassword1" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码">
          <el-input type="password" v-model="newpassword2" size="medium"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="medium">更改</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        userpassword: '',
        newpassword1: '',
        newpassword2:''
      };
    },
    methods: {
      onSubmit:function () {
        if(this.userpassword =='' || this.newpassword1 ==''){
          this.$message.error('密码不能为空');
        }else if(this.userpassword != this.$store.state.admin.password){
          this.$message.error('原密码不正确');
        }else if (this.newpassword1 != this.newpassword2){
          this.$message.error('2次输入的密码不一样');
        }else {
          this.$message.success('密码修改成功');
          this.$store.state.admin.password = this.newpassword1 
        }
      }
    }
  }
</script>

<style scoped>
.el-form{
  width:300px;
  margin:20px auto;
}
.box-main .title{
  font-size: 16px;

}
</style>