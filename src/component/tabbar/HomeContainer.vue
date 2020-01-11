<template>
    <div class="home-container1">
        <div id="header" class="mui-bar mui-bar-nav">
            <!-- <a class="mui-title">武昌区劳动监察系统</a> -->
            <!-- <div class="home-title">首页</div> -->
            <img class="backicon-container" src="../../image/首页banner.png"> 
            <div class="userinfo-container">
                <div class="user-container1">
                    <img class="user-img1" src="../../image/icon-user.png"></img>
                    <div class="user-info1">
                        <p class="user-name1">
                            {{ user }}
                        </p>
                        <!-- <div class="user-position1">
                            <p class="position-container1">中队长</p>
                        </div> -->
                    </div>
                </div>
                <div class="count-container">
                    <div>待办任务</div>
                    <div class="count">{{taskCount}}</div>
                </div>
            </div>
            <!-- <img class="backicon-container" src="../../image/icon-background.png"> -->
        </div>
        <div class="button-container">
            <div class="router-button" @click="goMyWork" style="background: linear-gradient(to right bottom, #00BFFF, #1E90FF 100%);">
                <p>
                    我的工作
                </p>
            </div>
            <div class="router-button" @click="goCompanyManager" style="background: linear-gradient(to right bottom, #FFB90F , #EEB422 100%);">
                <p>
                    企业管理
                </p>
            </div>
            <div class="router-button" style="background: linear-gradient(to right bottom, #48D1CC, #7FFFD4 100%)">
                <p>
                    综合查询
                </p>
            </div>
            <div class="router-button" style="background: linear-gradient(to right bottom, #4F4F4F ,#828282 100%);">
                <p>
                    拓展功能
                </p>
            </div>
            <!-- <img class="router-button" src="../../image/icon1.png" @click="goMyWork"></img>
            <img class="router-button" src="../../image/icon3.png" @click="goCompanyManager"></img>
            <img class="router-button" src="../../image/icon2.png"></img>
            <img class="router-button" src="../../image/icon4.png"></img> -->
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
// var httpurl = 'http://172.16.10.84:8081/';
import httpurl from '../../js/config';
//   var httpurl = 'http://192.168.190.205:8080/fhadmin/';
export default{
    data() {
        return {
            name: "武昌区劳动监察系统",

            //购买手机端源码data
            user: '',			//用于即时通讯（ 当前登录用户）
            userPhoto: '',		//用户头像
            NAME: '',			//姓名
            fhsmsCount: 0,		//站内信未读数量
            taskCount: 0,		//待办任务
            indexActive: true,		//底部菜单选中状态(首页)
            fhsmsActive: false,		//底部菜单选中状态(站内信)
            myimActive: false,		//底部菜单选中状态(我的通讯)
            usercenterActive: false//底部菜单选中状态(用不中心)
        }
    },
    created(){
        console.log("login");
        this.$emit("pageChanged",true);
        this.init();
    },
    methods: {
        goMyWork(){
            this.$router.push("/mywork");
        },
        goCompanyManager(){
            this.$router.push("/companymanager");
        },

        //购买手机端源码
        init() {
            this.goIndex();
            this.getNowUser();
        },
        
        //进入首页
        goIndex: function(){
            var vm = this;
        	$.ajax({                
        		xhrFields: {
                    withCredentials: true
                },
                // cache:false, 
            	type: "POST",
            	url: httpurl+'main/index?tm='+new Date().getTime(),
            	data: encodeURI(""),
            	dataType:'json',
            	success: function(data){
            		if('success' == data.result){
            			// vm.getNowUser();
            		}else if('errer' == data.result){
            			Toast('登录失效! 请求服务器无响应,稍后再试1');
            			// vm.logOut();
            		}else if('exception' == data.result){
            			Toast('后台程序异常');
            		}
            	}
            }).done().fail(function(){
                Toast('登录失效! 请求服务器无响应,稍后再试2');

                // vm.logOut();
            });
        },
        getListCount: function(){
            var vm = this;
        	// var STRARTTIME = $("#STRARTTIME").val();
        	// var ENDTIME = $("#ENDTIME").val();
        	$.ajax({
        		xhrFields: {
                    withCredentials: true
                },
        		type: "POST",
        		url: httpurl+'rutask/list?showCount='+-1+'&currentPage='+1,
        		data: {KEYWORDS:"",STRARTTIME:"",ENDTIME:"",tm:new Date().getTime()},
        		dataType:"json",
        		success: function(data){
        		 if("success" == data.result){
                    console.log(data)
                    vm.taskCount = data.page.totalResult;
        		 }else if ("exception" == data.result){
                    // swal("待办任务",data.exception);//显示异常
                 }
        		}
        	}).done().fail(function(){
                swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
            });
        },
        //基本信息
        getNowUser: function(){
            var vm = this;
        	$.ajax({
        		xhrFields: {
                    withCredentials: true
                }, 
            	type: "POST",
            	url: httpurl+'head/getInfo?tm='+new Date().getTime(),
            	data: encodeURI(""),
            	dataType:'json',
            	success: function(data){
            		if('success' == data.result){
            			vm.user = data.USERNAME;						//用户名
                		vm.NAME = data.NAME;							//姓名
                		vm.fhsmsCount = data.fhsmsCount;				//站内信未读数量
                        vm.userPhoto = httpurl+data.userPhoto;			//用户头像
                        vm.getListCount();
                		//vm.getTaskCount();								//获取待办任务数量
                		//vm.getDataToOnline();
            		}else if('error' == data.result){
            			// Toast('登录失效! 请求服务器无响应,稍后再试3');
                        location.reload();
            			// vm.logOut();
            		}else if('exception' == data.result){
            			Toast('第二次后台程序异常');
            		}
            	}
            }).done().fail(function(){
                Toast('登录失效! 请求服务器无响应,稍后再试');
                // vm.logOut();
            });
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
    /* padding-top: 50px; */
    padding-top: 75px;
    .mui-bar.mui-bar-nav{
        font-size: 19px;
        z-index: 80;
        /* height: 50px; */
        height: 75px;
        background-color: #fff;
        .mui-title{
            height: 50px;
            /* background-color: #26a2ff; */
            display: flex;
            justify-content: center;
            overflow: hidden;
            font-weight: bold;
            margin-top: 25px;
            line-height: 52px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: black;
            font-size: inherit;
        }
    }
}
.home-container1{
    position: absolute;
    width: 100%;
    height: 92%;
    display: flex;
    justify-content: center;
    /* padding-top: 50px; */
    padding-top: 25%;
    .mui-bar.mui-bar-nav{
        font-size: 19px;
        z-index: 80;
        /* height: 50px; */
        height: 175px;
        padding: 0;
        /* height: 25%; */
        /* background-color: #fff; */
        .home-title{
            padding-left: 10px;
            height: 50px;
            overflow: hidden;
            font-weight: bold;
            margin-top: 25px;
            line-height: 52px;
            color: black;
            font-size: inherit;
            text-overflow: ellipsis;
        }
        .mui-title{
            height: 50px;
            /* background-color: #26a2ff; */
            display: flex;
            justify-content: center;
            overflow: hidden;
            /* font-weight: bold; */
            margin-top: 25px;
            line-height: 52px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: black;
            font-size: inherit;
        }
    }
    .userinfo-container{
        width: 90%;
        height: 60%;
        position: absolute;
        /* margin: 15px 0; */
        /* margin-top: 20px; */
        margin-left: 5%;
        margin-right: 5%; 
        display: flex;
        border-radius: 18px;
        background: white;
        top: 64%;
        justify-content: space-between;
        padding-top: 8%;
        padding-left: 35px;
        padding-right: 35px;
        .count-container{
            display: flex;
            justify-content: flex-start;
            padding-top: 10px;
            div{
                font-size: 15px !important;
            }
            .count{
                margin-left:5px; 
                height: 20px;
                width: 30px;
                float: inline-end !important; 
                background-color: red; 
                border-radius: 2px;
                color: white;
                text-align: center;
            }
        }
    }
    .user-container1{
        /* background-color: #fff; */
        height: 100%;
        /* margin: 15px 0; */
        display: flex;
        justify-content: flex-start;

        .user-img1{
            margin-top: 5px; 
            height: 30px;
        }
        .user-info1{
            margin-top: 8px;
            margin-left: 8px;
            justify-content: space-between;
            flex-direction: column;
            color: white;
            p{
                font-size: 17px;
            }
        }
        .user-name1{
            font-size: 14px;
            color: black;  
            margin: 0; 
            line-height: initial;
        }
        .user-position1{
            /* background-color: #FF9400; 
            border-radius: 2px;
            color: white; */
            .position-container1{
                line-height: initial;
                font-size: 12px;
                margin: 0;
            }
        }
    }
    .backicon-container{
        width: 100%;
        /* height: 100%; */
        /* background-color: #fff; */
    }
    .button-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        /* width: 100%; */
        height: 100%;
        /* background-color: white; */
        padding-top: 37%;
       .router-button{
            /* margin: 5px 0; */
            background-color: black;
            display: flex;
            justify-content: center;
            /* margin-left: 15%; */
            height: 100px;
            width: 290px;
            border-radius: 10px;
            p{
                margin-top: 56px;
                transform: translateY(-50%);
                font-size: 26px;
                /* margin-bottom: 0; */
                color: white;
            }
        }
    }
}
</style>