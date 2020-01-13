<template>
        <div class="home-container">
            <header id="header" class="mui-bar mui-bar-nav">
                <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
                <a class="mui-title">投诉登记表</a>
                <!-- <mt-button type="primary" class="mui-pull-right" @click="addCase">添加</mt-button> -->
                <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="addCase">保存</a>
            </header>
            <div class="card-container">
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>案件编号：</label>
                        <input type="text" placeholder="输入姓名" v-model="pd.ldbzjctsdjb_tsrqk_anjianbianhao">
                    </div>
                </form>
                <div class="form-label">
                    <h4 class="form-title">投诉人情况</h4>
                </div>
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>姓名：</label>
                        <input type="text" placeholder="输入姓名" v-model="pd.ldbzjctsdjb_tsrqk_xingming">
                    </div>
                    <div class="mui-input-row">
                        <label>性别：</label>
                        <input type="text" placeholder="输入性别" v-model="pd.ldbzjctsdjb_tsrqk_xingbie">
                    </div>
                    <div class="mui-input-row">
                        <label>联系电话：</label>
                        <input type="text" placeholder="输入联系电话" v-model="pd.ldbzjctsdjb_tsrqk_lianxidianhua">
                    </div>
                    <div class="mui-input-row">
                        <label>地址：</label>
                        <input type="text" placeholder="输入地址" v-model="pd.ldbzjctsdjb_tsrqk_dizhi">
                    </div>
                    <div class="mui-input-row">
                        <label>邮编：</label>
                        <input type="text" placeholder="输入邮编" v-model="pd.ldbzjctsdjb_tsrqk_youbian">
                    </div>
                    <div class="mui-input-row">
                        <label>其他联系<br>方式：</label>
                        <input type="text" placeholder="输入其他联系方式" v-model="pd.ldbzjctsdjb_tsrqk_qitalianxifangshi">
                    </div>
                    <div class="mui-input-row">
                        <label>身份证件<br>种类：</label>
                        <select name="caseSource" id="caseSource" class="mui-select fluid" v-model="pd.ldbzjctsdjb_tsrqk_shenfenzhengjianzhonglei">
                                <option value="身份证">身份证</option>
                                <option value="户口本">户口本</option>
                                <option value="军人身份证件">军人身份证件</option>
                                <option value="港澳居民往来内地通行证">港澳居民往来内地通行证</option>
                                <option value="台湾居民往来大陆通行证">台湾居民往来大陆通行证</option>
                                <option value="护照">护照</option>
                        </select>
                    </div>
                    <div class="mui-input-row">
                        <label>证件号码：</label>
                        <input type="text" placeholder="输入证件号码" v-model="pd.ldbzjctsdjb_tsrqk_haoma">
                    </div>
                </form>
                <div class="form-label">
                    <h4 class="form-title">被投诉人情况</h4>
                </div>
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>单位名称：</label>
                        <input type="text" placeholder="输入单位名称" v-model="pd.ldbzjctsdjb_btsrqk_danweimingcheng">
                    </div>
                    <div class="mui-input-row">
                        <label>地址：</label>
                        <input type="text" placeholder="输入地址" v-model="pd.ldbzjctsdjb_btsrqk_dizhi">
                    </div>
                    <div class="mui-input-row">
                        <label>邮编：</label>
                        <input type="text" placeholder="输入邮编" v-model="pd.ldbzjctsdjb_btsrqk_youbian">
                    </div>
                    <div class="mui-input-row">
                        <label>主要负责人姓名：</label>
                        <input type="text" placeholder="输入主要负责人姓名" v-model="pd.ldbzjctsdjb_btsrqk_zhuyaofuzerenxingming">
                    </div>
                    <div class="mui-input-row">
                        <label>职务：</label>
                        <input type="text" placeholder="输入职务" v-model="pd.ldbzjctsdjb_btsrqk_zhiwu">
                    </div>
                    <div class="mui-input-row">
                        <label>联系电话：</label>
                        <input type="text" placeholder="输入联系电话" v-model="pd.ldbzjctsdjb_btsrqk_lianxidianhua">
                    </div>
                    <div class="mui-input-row">
                        <label>其他联系<br>方式：</label>
                        <input type="text" placeholder="输入其他联系方式" v-model="pd.ldbzjctsdjb_btsrqk_qitalianxifangshi">
                    </div>
                    <div class="mui-input-row">
                        <label>所属街道：</label>
                        <input type="text" placeholder="输入所属街道" v-model="pd.ldbzjctsdjb_btsrqk_suoshujiedao">
                    </div>
                </form>
                <div class="form-label">
                    <h4 class="form-title">其他</h4>
                </div>
                <form class="mui-input-group">
                    <div class="mui-input-row" style="margin: 2px 0">
                        <textarea id="textarea" rows="5" placeholder="输入投诉内容" v-model="pd.ldbzjctsdjb_tousuneirong"></textarea>
                    </div>
                    <div class="mui-input-row" style="margin: 2px 0">
                        <textarea id="textarea" rows="5" placeholder="输入证据材料" v-model="pd.ldbzjctsdjb_zhengjucailiao"></textarea>
                    </div>
                    <div class="mui-input-row" style="margin: 2px 0">
                        <textarea id="textarea" rows="5" placeholder="输入备注" v-model="pd.ldbzjctsdjb_beizhu"></textarea>
                    </div>
                </form>
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>本表填写地：</label>
                        <input type="text" placeholder="输入本表填写地" v-model="pd.ldbzjctsdjb_benbiaotianxiedi">
                    </div>
                </form>
            </div>
        </div>
    </template>
    <script>
    import httpurl, { fileurl } from '../../js/config';
    export default {
        data() {
            return {
               pd:{}
            }
        },
        created() {
            this.$emit("pageChanged");
        },
        methods: {
            addCase(){
    			// this.pd = layui.form.val("ldbzjctsdjb")
                var vm = this;
                // $("#showform").hide();
                // $("#jiazai").show();

                //发送 post 请求提交保存
                $.ajax({
                    xhrFields: {
                        withCredentials: true
                    },
                    type: "POST",
                    url: httpurl + 'casehandle/add',
                    data: {
                        ...this.pd,
                        tm: new Date().getTime()
                    },
                    dataType: "json",
                    success: function (data) {
                        if ("success" == data.result) {
                            // top.vm.fhtaskmsg(data.ASSIGNEE_); //websocket即时通讯用于给待办人发送新任务消息 ，fhtaskmsg()函数 在 WebRoot\assets\js-v\index.js
                            // swal("", "保存成功", "success");
                            // setTimeout(function () {
                            //     top.Dialog.close();//关闭弹窗
                            // }, 1000);
                            vm.$router.go(-1);
                        } else if ("errer" == data.result) {
                            // swal("审批流启动失败!", "请联系管理员部署相应业务流程!", "warning");//显示异常
                            // $("#showform").show();
                            // $("#jiazai").hide();
                        } else if ("exception" == data.result) {
                            // showException("添加请假单", data.exception);//显示异常
                            // $("#showform").show();
                            // $("#jiazai").hide();
                        }
                    }
                }).done().fail(function () {
                    // swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
                    // $("#showform").show();
                    // $("#jiazai").hide();
                });
            },
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
                margin-top: 15px;
                /* background-color: inherit; */
                font-weight: bold;
                line-height: 52px;
            }
        }
        .card-container{
            position: absolute;
            height: 100%;
            width: 100%;
            /deep/ .mint-field-core{
                margin: 0 !important;
            }
            .mui-textarea{
                margin: 10px 0 0 0;
                p {
                    font-size: 17px;
                    margin-top: 0;
                    margin-bottom: 0px;
                    color: #000;
                    margin-left: 15px;
                }
            }
            .mui-input-group{
                margin: 4px 0;
            }
            .mui-input-group .mui-input-row {
                height: auto;
            }
            .mui-input-row{
                textarea{
                    border: 0px;
                    margin-bottom: 0;
                }
                select {
                    /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
                    border: solid 1px #000;
    
                    /*很关键：将默认的select选择框样式清除*/
                    appearance:none;
                    -moz-appearance:none;
                    -webkit-appearance:none;
    
                    /*在选择框的最右侧中间显示小箭头图片*/
                    background: url("https://raw.githubusercontent.com/ourjs/static/gh-pages/2015/arrow.png") no-repeat scroll right center transparent;
    
    
                    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
                    padding-right: 14px;
    
                    option{
                        line-height: 15px; 
                    }
                }
    
    
                /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
                select::-ms-expand { display: none; }   
            }
            .mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea {
                position: absolute;
                float: right;
                width: 65%;
                top: 50%;
                transform: translateY(-50%);
                margin-bottom: 0;
                padding-left: 0;
                border: 0;
            }
        }
        .form-label{
            background-color: white; 
            padding: 7px;
            padding-left: 15px;
        .form-title:before{
            /* margin: 10px; */
            content: "";
            width: 8px;
            display: inline-block;
            height: 25px;
            background-color: #2e8000c2;
            margin-right: 10px;
            vertical-align: middle;
        }
        }
    }
    </style>