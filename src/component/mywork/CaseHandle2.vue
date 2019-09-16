<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">案件办理</a>
            <mt-button type="primary" class="mui-pull-right" @click="caseHandle">处理</mt-button>
        </header>
        <div class="mui-page-content">
            <p>案件描述</p>
            <div class="row mui-input-row">
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div>
            <p>案件负责人</p>
            <div class="mui-input-row">
                <input id='contact' type="text" class="mui-input-clear  contact" placeholder="(选填,方便我们联系你 )" />
            </div>
            <p>案件处理日期</p>
            <div class="mui-input-row">
                <input type="date" class="datetime">
            </div>
            <!-- <p>问题和意见</p>
            <div class="row mui-input-row">
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div>
            <p>问题和意见</p>
            <div class="row mui-input-row">
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div>
            <p>问题和意见</p>
            <div class="row mui-input-row">
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div>
            <p>问题和意见</p>
            <div class="row mui-input-row">
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div>
            <p>问题和意见</p>
            <div class="row mui-input-row">
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div>
            <p>问题和意见</p>
            <div class="row mui-input-row">
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div>
            <p>问题和意见</p>
            <div class="row mui-input-row">
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div>
            <p>问题和意见</p>
            <div class="row mui-input-row">
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div> -->
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            index: this.$route.params.id,            
        }
    },
    created() {
        this.$emit('pageChanged');
    },
    methods: {
        goBack(){
            //点击后退
            this.$router.go(-1);
        },
        caseHandle(){
            this.$store.commit("deleteCase", this.index);
        }
    },
}
</script>
<style lang="scss" scoped> 
.home-container{
    .mui-bar.mui-bar-nav{
        font-size: 19px;
        z-index: 80;
        height: 50px;
        background-color: #26a2ff;
        .mui-action-back.mui-icon.mui-icon-left-nav.mui-pull-left{
            color: #fff;
            padding-top: 14px;
            .back-btn{
                font-size: 19px;
                font-weight: bold;
            }
        }
        .mui-title{
            height: 50px;
            background-color: #26a2ff;
            display: flex;
            justify-content: center;
            overflow: hidden;
            font-weight: bold;
            line-height: 52px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #fff;
            font-size: inherit;
        }
        .mui-pull-right{
            font-size: inherit;
            color: #fff;
            background-color: inherit;
            font-weight: bold;
            line-height: 52px;
        }
    }
    .mui-page-content {
        position: relative;
        top:2px;
        width: 100%;
        height: 100%;
        background-color: #efeff4;
        p{
            margin: 0;
        }
        textarea{
            height: 120px;
            resize: none;
            border-radius: 5px;
            margin: 0;
        }
        input{
            border-radius: 5px;
            margin: 0;
        }
    }
}
</style>