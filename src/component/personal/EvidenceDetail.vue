<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"  @click.prevent="goBack"><span class="back-btn">返回</span></a>
            <a class="mui-title">文件列表</a>
            <!-- <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="handle('yes')"
                v-show="(formKey0 == undefined)">添加</a> -->
            <!-- <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="addCase">添加</a> -->
        </header>
        <div id="file-list" style="width: 100%;">
            <!-- <mt-cell v-for="(file, index) in fileList" :key="`case-file-${index}`" :label="file.file_name" is-link
                :to="httpurl + 'file/download?fileName='+file.file_name+'&fileType='+file.file_type+'&caseID='+file.case_id+'&taskID='+file.task_id"
                style="overflow-x: hidden;">
                <img v-if="file.file_type === '文档'" slot="icon" src="../../image/企业基本信息.png" alt="文档" width="34" height="34">
                <img v-else slot="icon" src="../../image/图片.png" alt="图片" width="34" height="34">
            </mt-cell> -->
            <div class="img-container">
                <div class="img-item-container" v-for="item in imageList" :key="`image-${item.file_name}`">
                    <img style="width: 100%;" preview="0" :src="imageLink(item)" :alt="item.file_name">
                    <!-- <img style="width: 100%;" src="https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=2d903c23b50e7bec238f0be71f1e9500/472309f790529822669f11efdaca7bcb0a46d469.jpg" :alt="item.file_name"> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import httpurl from '../../js/config';
    import moment from 'moment';
    export default {
        data() {
            return {
                caseID: this.$route.params.caseID,
                fileList: [],
                httpurl: httpurl
            }
        },
        mounted () {
            this.$emit("pageChanged");
            this.getFileList();
        },
        computed: {
            imageList: function () {
                console.log(this.fileList.filter(item => item.file_type === '图片'))
                return this.fileList.filter(item => item.file_type === '图片')
            },
            imageLink: function () {
                return function (item) {
                    return httpurl + 'file/download?fileName='+item.file_name+'&fileType='+item.file_type+'&caseID='+item.case_id+'&taskID='+item.task_id;
                }
            }
        },
        methods: {
            getFileList () {
                let vm = this;
                this.loading = true;
                this.TYPE = null == $("#TYPE").val() ? '' : $("#TYPE").val();
                $.ajax({
                    xhrFields: {
                        withCredentials: true
                    },
                    type: "POST",
                    url: httpurl + 'file/fileList2?showCount=-1&currentPage=1&caseID=' + this.caseID,
                    data: { KEYWORDS: this.KEYWORDS, TYPE: this.TYPE, tm: new Date().getTime() },
                    dataType: "json",
                    success: function (data) {
                        if ("success" == data.result) {
                            vm.fileList = data.varList;
                        } else if ("exception" == data.result) {
                            showException("证据归档", data.exception);//显示异常
                        }
                    }
                }).done().fail(function () {
                    swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
                });
            },
            goBack (){
                //点击后退
                // this.$router.go(-1);
                this.$router.replace('/personal/evidence');            
            },
        }
    }
</script>
<style lang="scss" scoped>
.mui-bar.mui-bar-nav{
    font-size: 19px;
    z-index: 80;
    height: 75px;
    /* background-color: #26a2ff; */
    .mui-action-back.mui-icon.mui-icon-left-nav.mui-pull-left{
        color: black;
        padding-top: 39px;
        .back-btn{
            font-size: 19px;
            font-weight: bold;
        }
    }
    .mui-title{
        height: 50px;
        background-color: inherit;
        display: flex;
        justify-content: center;
        overflow: hidden;
        /* font-weight: bold; */
        line-height: 52px;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: black;
        font-size: inherit;
    }
    .mui-pull-right{
        font-size: inherit;
        color: black;
        margin-top: 25px;
        background-color: inherit;
        font-weight: bold;
        line-height: 52px;
    }
}

.img-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 120px;

  .img-item-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
  }
}
</style>