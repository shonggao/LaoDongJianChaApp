<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
                <a class="mui-title">我的工作</a>
			<!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="goBack"><span class="back-btn">返回</span></a> -->
			<!-- <mt-navbar class="mui-title" v-model="selected">
                <mt-tab-item id="1">待办任务</mt-tab-item>
                <mt-tab-item id="2">已办任务</mt-tab-item>
            </mt-navbar> -->
            <a class="mui-icon mui-icon-plusempty mui-pull-right" @click="goAddCase" v-show="flag"></a>
        </header>
        <div class="card-container">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">待办任务</mt-tab-item>
                <mt-tab-item id="2">已办任务</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="card-container1">
                        <div class="mui-card" v-for="(item,index) in varList" :key="index">
                            <div class="mui-card-header">
                                {{ item.CaseID }}
                                <p>{{ item.CREATE_TIME_ | dateFormat }}</p>
                            </div>
                            <div class="mui-card-content">
                                <div class="mui-card-content-inner" style="padding: 16px;line-height: 1.6em;">
                                    <p>被投诉单位： {{ item.BTSDW_ }}</p>
                                    <p>投诉人：{{ item.TSR_ }}</p>
                                    <p>投诉人电话：{{ item.PHONE_ }}</p>
                                    <p>案件类型： {{ item.CASE_TYPE_ }}</p>
                                    <p>承办人：{{ item.ASSIGNEE_ }}</p>
                                </div>
                            </div>
                            <div class="mui-card-footer">
                                <mt-button type="primary" size="small" @click="goCaseHandle(item.PROC_INST_ID_,item.ID_,1,item.CASE_ID_,item.NAME_)">案件处理</mt-button>
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="card-container1">
                        <div class="mui-card" v-for="(item,index) in overDownList" :key="index" @click="goCaseHandle(item.PROC_INST_ID_,item.ID_,0,item.CASE_ID_,item.NAME_)">
                            <div class="mui-card-header">
                                {{ item.PNAME_ }}
                                <p>{{ item.CREATE_TIME_ | dateFormat }}</p>
                            </div>
                            <div class="mui-card-content">
                                <div class="mui-card-content-inner" style="padding: 16px;line-height: 1.6em;">
                                    <p>被投诉单位： {{ item.BTSDW_ }}</p>
                                    <p>投诉人：{{ item.TSR_ }}</p>
                                    <p>投诉人电话：{{ item.PHONE_ }}</p>
                                    <p>案件类型： {{ item.CASE_TYPE_ }}</p>
                                    <p>承办人：{{ item.ASSIGNEE_ }}</p>
                                    <!-- <p>承办人：{{ item.PNAME_ }}</p> -->
                                </div>
                            </div>
                        </div>   
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>    
        </div>
       
    </div>
</template>
<script>
import httpurl from '../../js/config';

import {Toast} from 'mint-ui';
export default{
    data() {
        return {
            // name: "待办任务 已办任务",
            selected: "1",
            flag: true,
            // caseList: [],
            // overDownList: []
            varList: [],	//list
            overDownList: [],  //已办任务列表
            page: [],		//分页类
            KEYWORDS: '',	//检索条件
            showCount: -1,	//每页显示条数(这个是系统设置里面配置的，初始为-1即可，固定此写法)
            currentPage: 1,	//当前页码
            Delegate:false,	//委派按钮权限
            edit:false,		//办理权限
            loading:false	//加载状态
        }
    },
    created() {
        // this.getCaseList();
        this.getList();
        this.$emit("pageChanged",true);
    },
    methods: {
        appInfoShow(){
            let instance = Toast('本系统正在升级'+"\n"+'预计2019年10月正式上线运行');
            setTimeout(() => {
            instance.close();
            }, 2000);
        },
        getCaseList(){
            //获取案件列表数据
            this.caseList = this.$store.state.caseList;
            this.overDownList = this.$store.state.overDownList;
        },
                //获取列表
        getList: function(){
            this.loading = true;
            var vm = this;
        	// var STRARTTIME = $("#STRARTTIME").val();
        	// var ENDTIME = $("#ENDTIME").val();
        	$.ajax({
        		xhrFields: {
                    withCredentials: true
                },
        		type: "POST",
        		url: httpurl+'rutask/list?showCount='+this.showCount+'&currentPage='+this.currentPage,
        		data: {KEYWORDS:this.KEYWORDS,STRARTTIME:"",ENDTIME:"",tm:new Date().getTime()},
        		dataType:"json",
        		success: function(data){
        		 if("success" == data.result){
        			 vm.varList = data.varList;
        			 vm.page = data.page;
        			//  vm.hasButton();
        			 vm.loading = false;
        		 }else if ("exception" == data.result){
                 	showException("待办任务",data.exception);//显示异常
                 }
        		}
        	}).done().fail(function(){
                swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
                setTimeout(function () {
                	window.location.href = "../../login.html";
                }, 2000);
            });
            $.ajax({
        		xhrFields: {
                    withCredentials: true
                },
        		type: "POST",
        		url: httpurl+'hitask/list?showCount='+this.showCount+'&currentPage='+this.currentPage,
        		data: {KEYWORDS:this.KEYWORDS,STRARTTIME:"",ENDTIME:"",tm:new Date().getTime()},
        		dataType:"json",
        		success: function(data){
        		 if("success" == data.result){
        			 vm.overDownList = data.varList;
        			 vm.page = data.page;
        			 vm.loading = false;
        			//  vm.hasButton();
        		 }else if ("exception" == data.result){
                 	showException("已办任务",data.exception);//显示异常
                 }
        		}
        	}).done().fail(function(){
                swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
                setTimeout(function () {
                	window.location.href = "../../login.html";
                }, 2000);
            });
        },
        goCaseHandle(PROC_INST_ID_,ID_,flag,CASE_ID_,TASK_ID_){
            //跳转到案件处理界面
            // this.$router.push("/mywork/casehandle/"+type+"/"+id);
            // Toast("案件处理功能将在后期上线");
            this.$router.push('/mywork/casehandle?PROC_INST_ID_='+PROC_INST_ID_+"&ID_="+ID_+'&flag='+flag+'&CASE_ID_='+CASE_ID_+'&TASK_ID_='+TASK_ID_);
        },
        goAddCase(){
            //跳转到录入案件界面
            this.$router.push("/mywork/addcase");
        },
        goBack(){
			//点击后退
            // this.$router.go(-1);
            this.$router.push("/home");            
		}
    },
    watch: {
        'selected': function(newVal){
            this.getList();
            if(newVal == "1"){
                this.flag = true;
            }else{
                this.flag = false;
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.mui-bar.mui-bar-nav{
    font-size: 19px;
    z-index: 99;
    height: 75px;
    /* background-color: #26a2ff; */
    .mui-action-back.mui-icon.mui-icon-left-nav.mui-pull-left{
        /* color: #fff; */
        color: black;
        /* padding-top: 14px; */
        padding-top: 39px;
        .back-btn{
            font-size: 19px;
            font-weight: bold;
        }
    }
    .mui-title{
        height: 50px;
        /* background-color: #26a2ff; */
        display: flex;
        justify-content: center;
        background-color: inherit;
        overflow: hidden;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        /* color: #fff; */
        color: black;
        font-size: inherit;
    }
    .mui-pull-right{
        padding-top: 38px;
        color: black;
        background-color: inherit;
        font-weight: bold;
    }
}
.card-container{
    position: absolute;
    /* height: 100%; */
    width: 100%;
    padding-bottom: 50px;    
    vertical-align: middle;
    p{
        margin: 0;
    }
    .mui-card{
        border-radius: 7px; 
        .mui-card-content-inner{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 5px;
        }
    }
    
}
.mint-tab-container{
    width: 100%;
    position: initial;
    overflow: auto;
}
/deep/.mint-tab-item-label {
    color: inherit;
    font-size: 19px;
    line-height: 1;
    width: 90px;
}
/deep/.mint-tab-item {
    display: flex;
    text-decoration: none;
    flex: unset;
    padding: 10px 0;
    color: #8f8f94;
}
/deep/.mint-navbar {
    margin-top: 7px;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-around;
    text-align: center;
}
/deep/.mint-navbar .mint-tab-item.is-selected {
    /* border-bottom: 3px solid black; */
    /* color: black; */
    margin-bottom: 4px;
}
</style>