<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">图片预览</a>
            <!-- <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="handle('yes')"
                v-show="(formKey0 == undefined)">添加</a> -->
            <!-- <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="addCase">添加</a> -->
        </header>
        <div class="card-container">
            <img v-if="showImg" :src="imgSrc" alt="" style="width: 100%;">
        </div>
    </div>
</template>

<script>
import httpurl from '../../js/config';
export default {
    data () {
        return {
            
        }
    },
    computed: {
        imgSrc: function () {
            return `http://192.168.190.205:8080/fhadminfile/${this.case_id}/${this.task_id}/${this.file_name}`;
        },
        file_type () {
            return this.$route.query.file_type || "";
        },
        file_name () {
            return this.$route.query.file_name || "";
        },
        case_id () {
            return this.$route.query.case_id || "";
        },
        task_id () {
            return this.$route.query.task_id || "";
        },
        showImg: function () {
            return true;
            if (this.file_type !== "" && this.file_type !== "" && this.case_id !== "" && this.task_id !== "") {
                return true
            } else {
                return false
            }
        }
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

.card-container {
    width: 100%;
}
</style>