<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"  @click.prevent="goBack"><span class="back-btn">返回</span></a>
            <a class="mui-title">工作记录</a>
        </header>
        <h1>工作记录</h1>
    </div>
</template>
<script>
export default{
    data() {
        return {
            name: "工作记录"
        }
    },
    created() {
        this.$emit("pageChanged");
    },
    methods: {
        goBack(){
			//点击后退
            // this.$router.go(-1);
            this.$router.replace('/personal');            
		}
    },
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
</style>