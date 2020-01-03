<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">限期改正指令书</a>
            <!-- <mt-button type="primary" class="mui-pull-right" @click="addCase">添加</mt-button> -->
            <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="handle('yes')" v-show="(formKey0 == formname)">保存</a>
        </header>
        <div class="card-container">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>被指令单位或个人：</label>
                    <input type="text" placeholder="输入被指令单位或个人：" v-model="docVarList.ldbzjcxqgzzls_beizhilingdanweihuogeren">
                </div>
                <div class="mui-input-row" style="margin: 2px 0">
                    <textarea id="textarea" rows="5" placeholder="输入认定的事实" v-model="docVarList.ldbzjcxqgzzls_rendingdeshishi"></textarea>
                </div>
            </form>
            <form class="mui-input-group">
                <!-- <label style="width:35%;padding: 5px 15px;">产业类别：</label> -->
                <div class="mui-input-row">
                    <label>立案依据：</label>
                    <input type="text" placeholder="输入立案依据" v-model="docVarList.ldbzjcxqgzzls_lianyiju">
                </div>
                <div class="mui-input-row">
                    <label>指令依据：</label>
                    <input type="text" placeholder="输入指令依据" v-model="docVarList.ldbzjcxqgzzls_zhilingyiju">
                </div>
            </form>
            <form class="mui-textarea">
                <!-- <label style="width:35%;padding: 5px 15px;">产业类别：</label> -->
                <div class="mui-input-row" style="margin: 2px 0">
                    <textarea id="textarea" rows="5" placeholder="输入改正的内容和期限" v-model="docVarList.ldbzjcxqgzzls_gaizhengdeneirongheqixian"></textarea>
                </div>
            </form>
            <form class="mui-input-group">
                <!-- <label style="width:35%;padding: 5px 15px;">产业类别：</label> -->
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('Date1',$event)">
                    <label data-options='{"type":"date"}'>截止日期：</label>
                    <input type="text" id="Date1" data-options='{"type":"date"}' readonly="readonly" v-model="docVarList.ldbzjcxqgzzls_jiezhiriqi">
                </div>
                <div class="mui-input-row">
                    <label>逾期处罚依据：</label>
                    <input type="text" placeholder="输入逾期处罚依据" v-model="docVarList.ldbzjcxqgzzls_yuqichufayiju">
                </div>
            </form>
            <form  class="mui-input-group">
                <div class="mui-input-row">
                    <label>后续处理：</label>
                    <select name="caseSource" id="caseSource" class="mui-select fluid" v-model="docVarList.RESULT">
                        <option value="行政处罚事先告知" selected>行政处罚事先告知</option>
                        <option value="主动整改">主动整改</option>
                        <option value="移交公安">移交公安</option>
                    </select>
                </div>
            </form>
            <div class="form-label">
                <h4 class="form-title">委派</h4>
            </div>
            <deliver-component v-model="ASSIGNEE_"></deliver-component>
            <div class="form-label">
                <h4 class="form-title">相关文件</h4>
            </div>
            <mt-cell v-for="(file, index) in fileList" :key="`case-file-${index}`" :title="file.file_name" is-link
                :to="`http://192.168.190.205:8080/fhadminfile/${file.case_id}/${file.task_id}/${file.file_name}`">
                <img v-if="file.file_type === '文档'" slot="icon" src="../../image/企业基本信息.png" alt="文档" width="34" height="34">
                <img v-else slot="icon" src="../../image/图片.png" alt="图片" width="34" height="34">
            </mt-cell>
            <mt-cell title="上传文件" @click.native="uploadFiles" style="margin-bottom: 16px;">
                <img slot="icon" src="../../image/上传.png" alt="上传" width="34" height="34">
                <input type="file" name="file-upload" multiple="multiple" id="file-upload" style="display: none;">
            </mt-cell>
        </div>
    </div>
</template>
<script>
import httpurl from '../../js/config';
import {Toast} from 'mint-ui';
export default {
    data() {
        return {
            docVarList: {},
            formname: "5",
            formKey0: this.$route.params.formKey0,
            PROC_INST_ID_: this.$route.query.PROC_INST_ID_,		//流程实例ID
            ID_: this.$route.query.ID_,				//任务ID
            OPINION: this.$route.query.OPINION,			//审批意见
            ASSIGNEE_: this.$route.query.ASSIGNEE_,			//待办人
            vars: [
                "ldbzjcxqgzzls_beizhilingdanweihuogeren",
                "ldbzjcxqgzzls_rendingdeshishi",
                "ldbzjcxqgzzls_lianyiju",
                "ldbzjcxqgzzls_zhilingyiju",
                "ldbzjcxqgzzls_gaizhengdeneirongheqixian",
                "ldbzjcxqgzzls_jiezhiriqi",
                "ldbzjcxqgzzls_yuqichufayiju",
                "RESULT",
            ],
            CASE_ID_: "",
            TASK_ID_: "责令整改",
            fileList: [],
            httpurl: httpurl
        }
    },
    created() {
        this.$emit("pageChanged");
        this.docVarList = this.$store.state.docVarList;
    },
    computed: {
        varListSelected: function () {
			var self = this;
			var originVarList = {}
            for( const key in this.vars){
                originVarList[this.vars[key]] = this.docVarList[this.vars[key]];
            }
			return originVarList;
		},
    },
    mounted() {
        this.init();
    },
    methods: {
        init () {
            this.CASE_ID_ = this.$route.query.CASE_ID_;
            this.getFileList();
        },
        addCase(){

        },
        handle: function (msg) {
            var taskVariables;
            var vm = this;
			 taskVariables = vm.varListSelected;
			// $(".form-variables").each(function (index, element) {
			// 	var key = $(element).attr("name");
			// 	var value = $(element).val();
			// 	taskVariables[key] = value;
			// 	console.log("form-variables", key, value);
			// });
			//zty
			var self = this;
			//var FormResult;
			if (!this.CONNULL || this.CONNULL) {
				$.ajax({
					xhrFields: {
						withCredentials: true
					},
					type: "POST",
					url: httpurl + 'rutask/handle',
					data: { taskVariables: taskVariables, msg: msg, ID_: this.ID_, ASSIGNEE_: this.ASSIGNEE_, PROC_INST_ID_: this.PROC_INST_ID_, OPINION: this.OPINION, tm: new Date().getTime() },
					dataType: 'json',
					success: function (data) {
						if ("success" == data.result) {
                            vm.$router.go(-2);
						} else if ("exception" == data.result) {
							Toast("提交审批", data.exception);//显示异常
						}
					}
				}).done().fail(function () {
					Toast("登录失效!", "请求服务器无响应，稍后再试", "warning");
				});
			}
		},
        openPicker(id,$event){
            var that = this;
            var _self = $event.target;
            var item = document.getElementById(id);
            if(that.picker){
                that.picker.show(function (rs) {
                    // that.datetime = rs.text;
                    item.value = rs.text;
                    that.picker.dispose();
                    that.picker = null;
                });
            }
            else{
                var optionsJson = _self.getAttribute('data-options') || '{}';
                var options = JSON.parse(optionsJson);
                // var id = _self.getAttribute('id');
                // console.log(mui.picker);
                that.picker = new window.mui.DtPicker(options);
                that.picker.show(function(rs) {
                    console.log("show callback")
                    /*
                        * rs.value 拼合后的 value
                        * rs.text 拼合后的 text
                        * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
                        * rs.m 月，用法同年
                        * rs.d 日，用法同年
                        * rs.h 时，用法同年
                        * rs.i 分（minutes 的第二个字母），用法同年
                        */
                    // result.innerText = '选择结果: ' + rs.text;
                    // that.datetime = rs.text;
                    item.value = rs.text;
                    /* 
                        * 返回 false 可以阻止选择框的关闭
                        * return false;
                        */
                    /*
                        * 释放组件资源，释放后将将不能再操作组件
                        * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
                        * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
                        * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
                        */
                    that.picker.dispose();
                    that.picker = null;
                });
            }
        },
        getFileList: function () {
            let self = this;
            var vm = this;
            this.loading = true;
            //发送 post 请求
            $.ajax({
                xhrFields: {
                    withCredentials: true
                },
                type: "POST",
                url: httpurl + 'file/fileList?showCount=-1&currentPage=1'+'&caseID='+this.CASE_ID_+"&taskID="+this.TASK_ID_,
                data: { PROC_INST_ID_: this.PROC_INST_ID_, ID_: this.ID_, FILENAME: this.FILENAME, tm: new Date().getTime() },
                dataType: "json",
                success: function (data) {
                    if ("success" == data.result) {
                        vm.hitaskList = data.hitaskList;
                        vm.varList = data.varList;
                        vm.imgSrc = data.imgSrc;
                        vm.loading = false;
                        // vm.formKey0 = "over";
                        vm.formKey = data.formKey;
                        vm.fileList = data.varList;
                    } else if ("exception" == data.result) {
                        showException("流程信息", data.exception);	//显示异常
                    }
                }
            }).done().fail(function () {
                swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
            });
        },
        // 上传文件
        uploadFiles: function () {
            let self = this;
            let fileInput = document.getElementById("file-upload");
            if (fileInput) {
                fileInput.onchange = function () {
                    let fileList = this.files;
                    if (fileList.length) {
                        for (const file of fileList) {
                            var fileType = "";
                            if (file.type.startsWith("image")) {
                                fileType = "图片"
                            } else {
                                switch (file.type) {
                                    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                                    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                                    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                                    case "application/vnd.ms-excel":
                                    case "application/vnd.ms-powerpoint":
                                    case "application/msword":
                                    case "application/pdf":
                                        fileType = "文档"
                                        break;
                                    default:
                                        break;
                                }
                            }
                            if (fileType === "") {
                                swal("上传失败", "未知的文件类型", "warning");
                            } else {
                                self.submitFiles(file, fileType)
                            }
                        }
                    }
                }
                fileInput.click();
            }
        },
        submitFiles: function (file, type) {
            var self = this;
            var formData = new FormData();
            formData.append("files", file);
            formData.append("caseID", this.CASE_ID_);
            formData.append("fileType", type);
            formData.append("taskID", this.TASK_ID_);
            $.ajax({
                xhrFields: {
                    withCredentials: true
                },
                type: "POST",
                url: httpurl + 'file/upload',
                data: formData,
                processData: false,
                contentType: false,
                success: function (body) {
                    let data = JSON.parse(body);
                    if (data.result == "exception") {
                        //showException("上传失败", data.exception);	//显示异常
                    } else if (data.error == "duplicate") {
                        swal("上传失败", "已存在同名文件", "warning");
                    } else if (data.success) {
                        swal("上传成功", "已上传到服务器", "success");
                        let fileInput = document.getElementById("file-upload");
                        fileInput.value = "";
                        self.getFileList();
                    }
                },
                error: function (jqXHR) {
                    $("#ueFrame").tips({
                        side: 1,
                        msg: '上传失败',
                        bg: '#AE81FF',
                        time: 3
                    });
                }
            })
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
        .mui-input-group{
            margin: 10px 0;
        }
        .mui-input-group .mui-input-row {
            height: auto;
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