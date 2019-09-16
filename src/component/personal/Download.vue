<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">查看下载内容</a>
        </header>
        <div class="card-container">
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                </div>
                <div class="mui-card-footer">
                    <mt-button type="primary" size="normal">查看全部</mt-button>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                </div>
                <div class="mui-card-footer">
                    <mt-button type="primary" size="normal">查看全部</mt-button>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                </div>
                <div class="mui-card-footer">
                    <mt-button type="primary" size="normal">查看全部</mt-button>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">
                    案件名称
                    <p>2018-11-30 10:28</p>
                </div>
                <div class="mui-card-content">
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                    <mt-cell title="下载内容" is-link class="download-link"></mt-cell>
                </div>
                <div class="mui-card-footer">
                    <mt-button type="primary" size="normal">查看全部</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            name: "查看下载内容"
        }
    },
    created() {
        this.$emit("pageChanged");
    },
    methods: {
        goBack(){
			//点击后退
			this.$router.go(-1);
		}
    },
}
</script>
<style lang="scss" scoped>
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
    }
.card-container{
    position: absolute;
    width: 100%;
    /* padding-bottom: 13%;     */
    vertical-align: middle;
    .mui-card{
        p{
            margin: 0;
        }
        border-radius: 7px; 
        .mui-card-content{
            .download-link{
                background-color: WhiteSmoke;
                margin: 3px 0;
            }
        }
        .mui-card-footer{
            justify-content: flex-end;
        }
    }
    
}   
</style>