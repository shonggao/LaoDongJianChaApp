<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="goBack"><span class="back-btn">返回</span></a> -->
            <a class="mui-title">个人事务</a>
            <!-- <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="capturePhoto()">test</a> -->
        </header>
        <img style="display:none;width:240px;height:320px;" id="smallImage" src="" />
        <div class="cell-container">
            <div class="user-container">
                <div class="user-img">
                </div>
                <div class="user-info">
                    <p class="user-name">
                        {{ user }}
                    </p>
                    <!-- <div class="user-position">
                        <p class="position-container">中队长</p>
                    </div> -->
                </div>
            </div>
            <div class="list-container">
                <!-- <mt-cell title="工作记录" is-link to="/personal/workrecord">
                </mt-cell> -->
                <mt-cell title="查看取证" is-link to="/personal/evidence">
                </mt-cell>
                <!-- <mt-cell title="查看下载内容" is-link to="/personal/download">
                </mt-cell> -->
            </div>       
            <div class="list-container">
                <mt-cell title="修改密码" is-link>
                </mt-cell>
                <mt-cell title="关于" is-link>
                </mt-cell>
                <mt-cell title="退出登录" is-link @click.native="goOut">
                </mt-cell>
            </div>
        </div>
    </div>
</template>
<script>
// var httpurl = 'http://192.168.190.205:8080/fhadmin/';
import httpurl from '../../js/config';


export default{
    data() {
        return {
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
    created() {
        this.$emit("pageChanged",true);
        this.getNowUser();
    },
    methods: {
        goBack(){
			//点击后退
            // this.$router.go(-1);
            this.$router.push("/home");            
        },
        logOut(){

        },
        getNowUser: function(){
            var vm = this;
        	$.ajax({
        		xhrFields: {
                    withCredentials: true
                },
            	type: "POST",
            	url: httpurl+'head/getInfo?tm='+new Date().getTime()+'&ran=' + Math.random(),
            	data: encodeURI(""),
            	dataType:'json',
            	success: function(data){
            		if('success' == data.result){
            			vm.user = data.USERNAME;						//用户名
                		vm.NAME = data.NAME;							//姓名
                		vm.fhsmsCount = data.fhsmsCount;				//站内信未读数量
                		vm.userPhoto = httpurl+data.userPhoto;			//用户头像
                		//vm.getTaskCount();								//获取待办任务数量
                		//vm.getDataToOnline();
            		}else if('errer' == data.result){
            			Toast('登录失效! 请求服务器无响应,稍后再试');
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
        goOut: function(){
            var vm = this;
        	$.ajax({
        		xhrFields: {
                    withCredentials: true
                },
        		type: "POST",
        		url: httpurl+'main/logout',
        		data: {tm:new Date().getTime()},
        		dataType:"json",
        		success: function(data){
                    // vm.$router.go(0-window.history.length+1);
                    vm.$router.push("/login");   
                    location.reload();         
        		}
        	}).done().fail(function(){
                // 
                vm.$router.push("/login");
                location.reload();        
                // vm.$router.replace("/login");             
            });
        },









       

    
            //拍照
            capturePhoto() {
                //拍照并获取Base64编码的图像（quality : 存储图像的质量，范围是[0,100]）
                console.log(navigator);
                console.log(destinationType);
                navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                                            destinationType: destinationType.FILE_URI }
                                            );
            },
    
            //拍照成功
            onPhotoDataSuccess(imageURL) {
                var smallImage = document.getElementById('smallImage');
                smallImage.style.display = 'block';
                smallImage.src = imageURL;
                //开始上传
                upload(imageURL);
            },
    
            //拍照失败
            onFail(message) {
                alert('拍照失败: ' + message);
            },
    
            //上传文件
            upload(fileURL) {
    
              //上传成功
              var success = function (r) {
                  console.log("上传成功! Code = " + r.responseCode);
              }
    
              //上传失败
              var fail = function (error) {
                  alert("上传失败! Code = " + error.code);
              }
    
              var options = new FileUploadOptions();
              options.fileKey = "file1";
              options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
              options.mimeType = "image/jpeg";
    
              //上传参数
              var params = {};
              params.value1 = "test";
              params.value2 = "param";
              options.params = params;
    
              var ft = new FileTransfer();
              //上传地址
              var SERVER = "http://www.hangge.com/upload.php"
              ft.upload(fileURL, encodeURI(SERVER), success, fail, options);
            }
    },
}
</script>
<style lang="scss" scoped>
.home-container{
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
            font-weight: bold;
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
    .cell-container{
        position: absolute;
        height: 100%;
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
    .list-container{
        margin: 15px;
        border-radius: 15px;
        overflow: hidden; 
    }
    .user-container{
        background-color: #fff;
        margin: 15px;
        padding: 15px;
        border-radius:15px ;
        display: flex;
        justify-content: flex-start;
        .user-img{
            background-image: url("../../image/icon.png");
            border-radius: 50%;
            height: 50px;
            width: 50px;
            background-position-x: center;
            background-position-y: center;
            background-size: 50px 50px;
        }
        .user-info{
            margin-top: 15px;
            margin-left: 10px;
            justify-content: space-between;
            flex-direction: column;
            color: white;
        }
        .user-name{
            font-size: 20px;
            color: black;   
        }
        .user-position{
            background-color: #FF9400; 
            border-radius: 2px;
            color: white;
            .position-container{
                color: black;
                margin: 3px;
            }
        }
    }
}
</style>