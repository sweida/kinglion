<template >
  <div class="el-fade-in">
    <div class="box-main">
      <p class="title">账号信息</p>
      <el-form ref="form"  label-width="100px" class="formbox">
        <el-form-item label="管理员账号">
          <el-input v-model="admin.id" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="管理员昵称">
          <el-input v-model="admin.name" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="管理员级别">
          <el-select v-model="admin.region" placeholder="请选择级别" size="medium">
            <el-option label="超级管理员" value="level1"></el-option>
            <el-option label="普通管理员" value="level2"></el-option>
            <el-option label="临时管理员" value="level3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="更改头像">
          <div class="adminimg" >
            <img :src="admin.img" alt="">
          </div>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :limit=1
            >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="medium">保存</el-button>
        </el-form-item>
      </el-form>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        admin:{
          id:this.$store.state.admin.id,
          name:this.$store.state.admin.name,
          region:this.$store.state.admin.region,
          img:this.$store.state.admin.img,
          password:this.$store.state.admin.password
        },
        dialogImageUrl: 'https://avatars2.githubusercontent.com/u/23181508?s=460&v=4',
        dialogVisible: false
      }
    },
    methods: {
      onSubmit() {
        if(this.$store.state.admin.id == '' ||this.$store.state.admin.name == ''){
          this.$message.error('信息不能为空')
        }else{
          this.$store.state.admin.id = this.admin.id
          this.$store.state.admin.name = this.admin.name
          this.$store.state.admin.region = this.admin.region
          this.$message.success('账号信息修改成功')
        }
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style scoped>
.formbox{
  width:600px;
  margin:20px auto 0;
}

.formbox .el-input{
  width:220px;
}
.line {
    text-align: center;
}
.adminimg{
  width:148px;
  height: 148px;
  margin-right: 10px;
  float: left;
}
.adminimg img{
  width:100%;
}
</style>
