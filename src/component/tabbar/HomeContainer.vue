<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-title">武昌区劳动监察系统</a>
        </header>
        <div class="button-container">
            <img class="router-button" src="../../image/icon1.png" @click="goMyWork"></img>
            <img class="router-button" src="../../image/icon3.png" @click="goCompanyManager"></img>
            <img class="router-button" src="../../image/icon2.png"></img>
            <img class="router-button" src="../../image/icon4.png"></img>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            name: "武昌区劳动监察系统"
        }
    },
    created(){
        this.$emit("pageChanged",true);
    },
    methods: {
        goMyWork(){
            this.$router.push("/mywork");
        },
        goCompanyManager(){
            this.$router.push("/companymanager");
        },
    },
}

</script>
<style lang="scss">
.home-container{
    position: absolute;
    width: 100%;
    height: 92%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
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
    .button-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 70%;
        height: 100%;
        img{
            margin: 10px 0;
            width: 100%;
            height: 16%;
        }
    }
}
</style>