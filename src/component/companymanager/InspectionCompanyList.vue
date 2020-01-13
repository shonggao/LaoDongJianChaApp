<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业信息记录</a>
            <a class="mui-icon mui-icon-plusempty mui-pull-right" @click="goAddInspectionCompany"></a>
        </header>
        <!-- <div class="card-container"> -->

        <div class="card-container"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
            <div class="mui-card" v-for="(item,index) in $store.state.inspectionList" :key="item.QIYEXINXIGUANLI_ID" >
                <div class="mui-card-header">{{item.DWMC}}</div>
                <div class="mui-card-content">
                    <router-link class="mui-card-content-inner" tag="div" :to="'/companymanager/inspectioncompanyinfolist/'+item.QIYEXINXIGUANLI_ID">
                        <!-- <mt-cell title="公司名称" :value="item.enterpriseName"></mt-cell>
                        <mt-cell title="单位法人" :value="item.legalRepresentative"></mt-cell>
                        <mt-cell title="主管单位" :value="item.majorCharge"></mt-cell>
                        <mt-cell title="现地址" :value="item.enterpriseAddress"></mt-cell> -->
                        <ul class="mui-table-view">
                            <!-- <li class="mui-table-view-cell">
                                <div class="cell-title"><span class="cell-title-text">单位地址</span></div>
                                <div class="cell-value"><span>{{item.DWDZ | undefinedTo}}</span></div>                
                            </li> -->
                            <li class="mui-table-view-cell">
                                <div class="cell-title"><span class="cell-title-text">统一社会信用代码</span></div>
                                <div class="cell-value"><span>{{item.TYSHXYDM | undefinedTo}}</span></div>                
                            </li>
                            <li class="mui-table-view-cell ">
                                <div class="cell-title"><span class="cell-title-text">所属街道</span></div>
                                <div class="cell-value"><span>{{item.SSWGMC | undefinedTo}}</span></div>  
                            </li>
                            <li class="mui-table-view-cell">
                                <div class="cell-title"><span class="cell-title-text">经济类型</span></div>
                                <div class="cell-value"><span>{{item.JJLX | undefinedTo}}</span></div>  
                            </li>
                        </ul> 
                    </router-link>
                </div>
                <div class="mui-card-footer">
                    <div class="left-button-container">
                        <mt-button class="edit-button" @click.stop="goEditInspectionCompany(index)" size="small" type="primary">修改资料</mt-button>
                        <mt-button class="inspection-button" size="small" @click.stop="goAddInspectionCompanyList(item.QIYEXINXIGUANLI_ID, item.DWMC)" type="primary" style="margin-left: 10px;">企业年检</mt-button>
                    </div>
                    <mt-button class="delete-button" size="small" @click.stop="goDelInspectionCompany(item.QIYEXINXIGUANLI_ID,index)" type="danger">删除</mt-button>
                    <!-- <a class="mui-icon edit-button" @click.stop="goEditInspectionCompany(index)" style="color: #000000; font-size:17px"><span>修改资料</span></a>
                    <a class="mui-icon inspection-button" style="color: #000000; font-size:17px"><span>企业年检</span></a>
                    <a class="mui-icon delete-button" @click.stop="goDelInspectionCompany(item.QIYENIANJIAN_ID,index)" style="color: #e6533c; font-size:17px"><span>删除</span></a> -->
                </div>
            </div>
        </div>    
        <!-- </div>     -->
    </div>
</template>
<script>
import { Toast, MessageBox } from 'mint-ui';

export default{
    data() {
        return {
            inspectionList:[],   //年检信息列表
            page: [],		//分页类
            KEYWORDS:'',	//检索条件,关键词
            showCount: -1,	//每页显示条数(这个是系统设置里面配置的，初始为-1即可，固定此写法)
            currentPage: 1,	//当前页码
            add:false,		//增
            del:false,		//删
            edit:false,		//改
            toExcel:false,	//导出到excel权限
            loading:false	//加载状态
        }
    },
    created() {
        if(this.$store.state.inspectionList.length > 0){
            this.currentPage = parseInt(this.$store.state.inspectionList.length / 10) + 1;
        }
        else{
            this.getInspectionList();
        }
        this.$emit("pageChanged");
    },
    methods: {
        getInspectionList(){
            //获取企业年检信息列表数据
            this.inspectionList = this.$store.state.inspectionList;
            var data = {KEYWORDS:this.KEYWORDS,tm:new Date().getTime()};
            this.$http.post('qiyexinxiguanli/list?showCount='+this.showCount+'&currentPage='+this.currentPage,data,{withCredentials: true}).then(
                result => {
                    if( result.body.result == "success" ){
                        if(this.currentPage <=  result.body.page.totalPage){
                            // this.companyList.push(...result.body.varList);
                            this.$store.commit("pushInspectionCompany",result.body.varList);
                        }
                        this.page = result.body.page;
                    }
                }, error => {
                    Toast("获取年检企业信息数据失败");
                }
            );
        },
        goAddInspectionCompanyList(id,name){
            this.$router.push("/companymanager/inspectioncompanyinfolist/" + id +'?DWMC='+name);
        },
        goAddInspectionCompany(){
            //跳转到添加企业年检信息界面
            // this.$router.push("/companymanager/addinspectioncompany");
            this.$router.push("/companymanager/inspectioncompany/add");
        },
        goBack(){
			//点击后退
            // this.$router.go(-1);
            this.$router.replace("/companymanager");            
        },
        loadMore(){
            // 下滑加载更多数据

            if(this.currentPage + 1 <= this.page.totalPage){
                //假如下一页码未超过最大页码数,则更新数据
                this.currentPage = this.currentPage + 1;
                this.getInspectionList();
            }
        },
        goEditInspectionCompany(index){
            //跳转到修改信息界面
            // this.$router.push("/companymanager/editinspectioncompany/"+index);
            this.$router.push("/companymanager/inspectioncompany/edit/"+index);
        },
        goDelInspectionCompany(id,index){
            //弹出提示框确认是否删除信息
            MessageBox.confirm("确定删除该条记录？", "提示").then(
            data => {
                var Info = {QIYENIANJIAN_ID:id,tm:new Date().getTime()};
                this.$http.post('qiyexinxiguanli/delete', Info ,{withCredentials: true}).then(
                    result => {
                        if( result.body.result == "success" ){
                            // this.companyList = result.body.varList;
                            // this.companyList.splice(index,1);
                            this.$store.commit("deleteInspectionCompany",index);
                        }
                        else{
                            Toast("删除信息失败");
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
                // this.$store.commit("deleteInspectionCompany",index);
                // this.getInspectionList();    
            },
            error => {
                
            }
            );
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