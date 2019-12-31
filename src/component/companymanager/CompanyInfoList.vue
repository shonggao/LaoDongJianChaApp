<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业基本信息</a>
            <a class="mui-icon mui-icon-plusempty mui-pull-right" @click="goAddCompanyInfo"></a>
        </header>
        <div class="card-container" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
        <!-- <div class="card-container"> -->
            <div class="mui-card" v-for="(item,index) in $store.state.companyInfoList" :key="item.ENTERPRISE_ID" >
                <div class="mui-card-header">{{item.DWMC}}</div>
                <div class="mui-card-content">
                    <router-link class="mui-card-content-inner" tag="div" :to="'/companymanager/companyinfo/'+index">
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                                <div class="cell-title"><span class="cell-title-text">单位名称</span></div>
                                <div class="cell-value"><span>{{item.DWMC}}</span></div>                
                            </li>
                            <li class="mui-table-view-cell">
                                <div class="cell-title"><span class="cell-title-text">法定代表人</span></div>
                                <div class="cell-value"><span>{{item.FDDBRXM | undefinedTo}}</span></div>                
                            </li>
                            <li class="mui-table-view-cell ">
                                <div class="cell-title"><span class="cell-title-text">经济类型</span></div>
                                <div class="cell-value"><span>{{item.JJLX | undefinedTo}}</span></div>  
                            </li>
                            <li class="mui-table-view-cell">
                                <div class="cell-title"><span class="cell-title-text">单位地址</span></div>
                                <div class="cell-value"><span>{{item.DWDZ | undefinedTo}}</span></div>  
                            </li>
                        </ul> 
                        <!-- <mt-cell title="公司名称" :value="item.DWMC"></mt-cell>
                        <mt-cell title="单位法人" :value="item.FDDBRXM"></mt-cell>
                        <mt-cell title="经济类型" :value="item.JJLX"></mt-cell>
                        <mt-cell title="现地址" :value="item.DWDZ"></mt-cell> -->
                    </router-link>
                </div>
                <div class="mui-card-footer">
                    <!-- <mt-button type="primary" size="normal"  style="background-color: #2cba44" @click.stop="goEditCompanyInfo(index)">修改资料</mt-button>
                    <mt-button type="primary" size="normal" style="background-color: #e6533c" @click.stop="goDelCompanyInfo(index)">删除</mt-button> -->
                    <a class="mui-icon edit-button" @click.stop="goEditCompanyInfo(index)" style="color: #000000; font-size:17px"><span>修改资料</span></a>
                    <a class="mui-icon delete-button" @click.stop="goDelCompanyInfo(item.ENTERPRISE_ID,index)" style="color: #e6533c; font-size:17px"><span>删除</span></a>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
import { MessageBox,Toast } from 'mint-ui';


export default{
    data() {
        return {
            companyList: [
               
            ],  //企业列表信息
            name: "企业管理",
            showCount: -1,	//每页显示条数(这个是系统设置里面配置的，初始为-1即可，固定此写法)
            KEYWORDS:'',	//检索条件,关键词
            page: [],		//分页类
            currentPage: 1,	//当前页码
        }
    },
    created() {
        if(this.$store.state.companyInfoList.length > 0){
            this.currentPage = parseInt(this.$store.state.companyInfoList.length / 10) + 1;
        }
        else{
            this.getCompanyList();
        }
        this.$emit("pageChanged");
    },
    methods: {
        getCompanyList(){
            var data = {KEYWORDS:this.KEYWORDS,tm:new Date().getTime()};
            this.$http.post('enterprise/list?showCount='+this.showCount+'&currentPage='+this.currentPage,data,{withCredentials: true}).then(
                result => {
                    if( result.body.result == "success" ){
                        // this.companyList = result.body.varList;
                        // console.log(this.currentPage);
                        if(this.currentPage <=  result.body.page.totalPage){
                            // this.companyList.push(...result.body.varList);
                            this.$store.commit("pushCompanyInfo",result.body.varList);
                        }
                        this.page = result.body.page;
                    }
                }, error => {
                    Toast("获取企业信息数据失败");
                }
            );
            this.companyList = this.$store.state.companyInfoList;
        },
        // getCompanyList(){
        //     this.$http.post();
        // },
        loadMore(){
            // 下滑加载更多数据

            if(this.currentPage + 1 <= this.page.totalPage){
                //假如下一页码未超过最大页码数,则更新数据
                this.currentPage = this.currentPage + 1;
                this.getCompanyList();
            }
        },
        goAddCompanyInfo(){
            // this.$router.push("/companymanager/addcompanyinfo");
            this.$router.push("/companymanager/companyinfo/add");
        },
        goBack(){
			//点击后退
            // this.$router.go(-1);
            this.$router.replace("/companymanager");
        },
        goEditCompanyInfo(index){
            // this.$router.push("/companymanager/editcompanyinfo/"+index);
            this.$router.push("/companymanager/companyinfo/edit/"+index);
        },
        goDelCompanyInfo(id,index){
            MessageBox.confirm("确定删除该条记录？", "提示").then(data => {
                var Info = {ENTERPRISE_ID:id,tm:new Date().getTime()};
                this.$http.post('enterprise/delete', Info,{withCredentials: true}).then(
                    result => {
                        if( result.body.result == "success" ){
                            // this.companyList = result.body.varList;
                            // this.companyList.splice(index,1);
                            this.$store.commit("deleteCompanyInfo",index);
                        }
                        else{
                            Toast("删除信息失败");
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
                // this.getCompanyList();    
            }, error => {
                // this.getCompanyList();
            });
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
            /* font-size: inherit; */
            color: black;
            margin-top: 23px;
            background-color: inherit;
            font-weight: bold;
            line-height: 52px;
            padding-top: 0 ;
            padding-bottom: 0 ;
        }
    }
.card-container{
    position: absolute;
    height: 100%;
    width: 100%;
    /* padding-bottom: 13%;     */
    /* padding-top: 14%; */
    .mui-card{
        border-radius: 7px; 
        .mui-card-content-inner{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0;
        }
    }
    
}
.mui-bar .mui-icon {
    padding-top: 12px;
}
.mui-table-view-cell{
    padding: 10px 10px;
    display: flex;
    align-items: center;
    pointer-events: none;
    .cell-title{
        -webkit-box-flex: 1;
        /* -ms-flex: 1; */
        flex: 1;
    }
    .cell-title-text{
        vertical-align: middle;
        font-size: 16px;
    }
    .cell-value{
        color: #888;
        width: 75%;
        text-align: right;
        justify-content: flex-end;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    p{
        text-align: right;
        align-items: center;
        float: right;
    }
}
.mui-table-view-cell::after{
    display: none;
}
</style>