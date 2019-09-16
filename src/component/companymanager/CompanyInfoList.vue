<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业管理</a>
            <a class="mui-icon mui-icon-plusempty mui-pull-right" @click="goAddCompanyInfo"></a>
        </header>
        <div class="card-container">
            <router-link class="mui-card" tag="div" v-for="(item,index) in companyList" :key="item.enterpriseID" :to="'/companymanager/companyinfo/'+index">
                <div class="mui-card-header">{{item.enterpriseName}}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>公司名称：{{item.enterpriseName}}</p>
                        <p>单位法人：{{item.legalRepresentative}}</p>
                        <p>主管单位：{{item.majorCharge}}</p>
                        <p>现地址：{{item.enterpriseAddress}}</p>
                    </div>
                </div>
            </router-link>
                <!-- <div class="mui-card-footer">页脚</div> -->
        </div>    
    </div>
</template>
<script>
export default{
    data() {
        return {
            companyList: [
               
            ],  //企业列表信息
            name: "企业管理"
        }
    },
    created() {
        this.getCompanyList();
        this.$emit("pageChanged");
    },
    methods: {
        getCompanyList(){
            this.companyList = this.$store.state.companyInfoList;
        },
        goAddCompanyInfo(){
            this.$router.push("/companymanager/addcompanyinfo");
        },
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
    .mui-pull-right{
        color: #fff;
        background-color: inherit;
        font-weight: bold;
    }
}
.card-container{
    position: absolute;
    /* height: 100%; */
    width: 100%;
    /* padding-bottom: 13%;     */
    /* padding-top: 14%; */
    .mui-card{
        border-radius: 7px; 
        .mui-card-content-inner{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    
}
.mui-bar .mui-icon {
    padding-top: 12px;
}
</style>