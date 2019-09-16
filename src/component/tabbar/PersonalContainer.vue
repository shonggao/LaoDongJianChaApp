<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">个人事务</a>
        </header>
        <div class="cell-container">
            <li class="mui-table-view-cell mui-media">
                <a>
                    <img class="mui-media-object mui-pull-left" width="50" height="50" src="../../image/userheader.jpg">
                    <img class="twodimention-code" width="35" height="35" src="../../image/twodimentioncode.jpg">
                </a>
            </li>
            <mt-cell title="工作记录" is-link to="/personal/workrecord">
            </mt-cell>
            <mt-cell title="查看取证" is-link to="/personal/evidence">
            </mt-cell>
            <mt-cell title="查看下载内容" is-link to="/personal/download">
            </mt-cell>
            <mt-cell title="修改密码" is-link>
            </mt-cell>
            <mt-cell title="关于" is-link>
            </mt-cell>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            name: "个人事务"
        }
    },
    created() {
        this.$emit("pageChanged",true);
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
    }
    .cell-container{
        position: absolute;
        /* height: 100%; */
        width: 100%;
        padding-bottom: 13%;        
        li{
            background-color: white;
            list-style: none;
            h2{
                font-size:16px;
                margin: 0 5
            }
            .twodimention-code{
                position: absolute;
                background-color: white;
                right: 15px;
                top: 15px;
            }
        }
    }
}
</style>