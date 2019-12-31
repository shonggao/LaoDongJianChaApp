<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">投诉登记表</a>
            <!-- <mt-button type="primary" class="mui-pull-right" @click="addCase">添加</mt-button> -->
            <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="handle('yes')" v-show="(formKey0 == formname)">保存</a>
        </header>
        <div class="card-container">
            <div class="form-label">
                <h4 class="form-title">投诉人情况</h4>
            </div>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>姓名：</label>
                    <input type="text" placeholder="输入姓名" v-model="docVarList.ldbzjctsdjb_tsrqk_xingming">
                </div>
                <div class="mui-input-row">
                    <label>性别：</label>
                    <input type="text" placeholder="输入性别" v-model="docVarList.ldbzjctsdjb_tsrqk_xingbie">
                </div>
                <div class="mui-input-row">
                    <label>联系电话：</label>
                    <input type="text" placeholder="输入联系电话" v-model="docVarList.ldbzjctsdjb_tsrqk_lianxidianhua">
                </div>
                <div class="mui-input-row">
                    <label>地址：</label>
                    <input type="text" placeholder="输入地址" v-model="docVarList.ldbzjctsdjb_tsrqk_dizhi">
                </div>
                <div class="mui-input-row">
                    <label>邮编：</label>
                    <input type="text" placeholder="输入邮编" v-model="docVarList.ldbzjctsdjb_tsrqk_youbian">
                </div>
                <div class="mui-input-row">
                    <label>其他联系<br>方式：</label>
                    <input type="text" placeholder="输入其他联系方式" v-model="docVarList.ldbzjctsdjb_tsrqk_qitalianxifangshi">
                </div>
                <!-- <div class="mui-input-row">
                    <label>案件来源：</label>
                    <select name="caseSource" id="caseSource" class="mui-select fluid">
                        <option value="12345市长热线" selected>12345市长热线</option>
                        <option value="12333举报投诉">12333举报投诉</option>
                        <option value="举报投诉">举报投诉</option>
                        <option value="省市转办件">省市转办件</option>
                        <option value="阳光信访 ">阳光信访 </option>
                        <option value="日常巡查案件">日常巡查案件</option>
                        <option value="其他">其他</option>
                    </select>
                </div> -->
                <div class="mui-input-row">
                    <label>身份证件<br>种类：</label>
                    <select name="caseSource" id="caseSource" class="mui-select fluid" v-model="docVarList.ldbzjctsdjb_tsrqk_shenfenzhengjianzhonglei">
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
                    <input type="text" placeholder="输入证件号码" v-model="docVarList.ldbzjctsdjb_tsrqk_haoma">
                </div>
            </form>
            <div class="form-label">
                <h4 class="form-title">被投诉人情况</h4>
            </div>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>单位名称：</label>
                    <input type="text" placeholder="输入单位名称" v-model="docVarList.ldbzjctsdjb_btsrqk_danweimingcheng">
                </div>
                <div class="mui-input-row">
                    <label>地址：</label>
                    <input type="text" placeholder="输入地址" v-model="docVarList.ldbzjctsdjb_btsrqk_dizhi">
                </div>
                <div class="mui-input-row">
                    <label>邮编：</label>
                    <input type="text" placeholder="输入邮编" v-model="docVarList.ldbzjctsdjb_btsrqk_youbian">
                </div>
                <div class="mui-input-row">
                    <label>主要负责人姓名：</label>
                    <input type="text" placeholder="输入主要负责人姓名" v-model="docVarList.ldbzjctsdjb_btsrqk_zhuyaofuzerenxingming">
                </div>
                <div class="mui-input-row">
                    <label>职务：</label>
                    <input type="text" placeholder="输入职务" v-model="docVarList.ldbzjctsdjb_btsrqk_zhiwu">
                </div>
                <div class="mui-input-row">
                    <label>联系电话：</label>
                    <input type="text" placeholder="输入联系电话" v-model="docVarList.ldbzjctsdjb_btsrqk_lianxidianhua">
                </div>
                <div class="mui-input-row">
                    <label>其他联系<br>方式：</label>
                    <input type="text" placeholder="输入其他联系方式" v-model="docVarList.ldbzjctsdjb_btsrqk_qitalianxifangshi">
                </div>
            </form>
            <div class="form-label">
                <h4 class="form-title">其他</h4>
            </div>
            <form class="mui-input-group">
                <div class="mui-input-row" style="margin: 2px 0">
                    <textarea id="textarea" rows="5" placeholder="输入投诉内容" v-model="docVarList.ldbzjctsdjb_tousuneirong"></textarea>
                </div>
                <div class="mui-input-row" style="margin: 2px 0">
                    <textarea id="textarea" rows="5" placeholder="输入证据材料" v-model="docVarList.ldbzjctsdjb_zhengjucailiao"></textarea>
                </div>
                <div class="mui-input-row" style="margin: 2px 0">
                    <textarea id="textarea" rows="5" placeholder="输入备注" v-model="docVarList.ldbzjctsdjb_beizhu"></textarea>
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>本表填写地：</label>
                    <input type="text" placeholder="输入本表填写地" v-model="docVarList.ldbzjctsdjb_benbiaotianxiedi">
                </div>

            </form>
            <div class="form-label">
                <h4 class="form-title">相关文件</h4>
            </div>
            <mt-cell v-for="(file, index) in fileList" :key="`case-file-${index}`" :title="file.file_name" is-link
                :to="httpurl + 'file/download?fileName='+file.file_name+'&fileType='+file.file_type+'&caseID='+file.case_id+'&taskID='+file.task_id">
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
export default {
    data() {
        return {
            docVarList: {},
            formname: "1",
            formKey0: this.$route.params.formKey0,
            PROC_INST_ID_: this.$route.query.PROC_INST_ID_,		//流程实例ID
            ID_: this.$route.query.ID_,				//任务ID
            OPINION: this.$route.query.OPINION,			//审批意见
            ASSIGNEE_: this.$route.query.ASSIGNEE_,			//待办人
            vars: [
                "ldbzjctsdjb_tsrqk_xingming",
                "ldbzjctsdjb_tsrqk_xingbie",
                "ldbzjctsdjb_tsrqk_lianxidianhua",
                "ldbzjctsdjb_tsrqk_dizhi",
                "ldbzjctsdjb_tsrqk_youbian",
                "ldbzjctsdjb_tsrqk_qitalianxifangshi",
                "ldbzjctsdjb_tsrqk_shenfenzhengjianzhonglei",
                "ldbzjctsdjb_tsrqk_haoma",
                "ldbzjctsdjb_btsrqk_danweimingcheng",
                "ldbzjctsdjb_btsrqk_dizhi",
                "ldbzjctsdjb_btsrqk_youbian",
                "ldbzjctsdjb_btsrqk_zhuyaofuzerenxingming",
                "ldbzjctsdjb_btsrqk_zhiwu",
                "ldbzjctsdjb_btsrqk_lianxidianhua",
                "ldbzjctsdjb_btsrqk_qitalianxifangshi",
                "ldbzjctsdjb_tousuneirong",
                "ldbzjctsdjb_zhengjucailiao",
                "ldbzjctsdjb_beizhu",
                "ldbzjctsdjb_benbiaotianxiedi",
            ],
            CASE_ID_: "",
            TASK_ID_: "投诉登记",
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
            this.getFileList();
        },
        addCase(){

        },
        handle: function (msg = "123") {
            var taskVariables;
            var vm = this;
			 taskVariables = vm.varListSelected;
            var self = this;
            // console.log(msg);
			//var FormResult
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
                        // console.log(taskVariables);
                        vm.$router.go(-2);
                    } else if ("exception" == data.result) {
                        showException("提交审批", data.exception);//显示异常
                    }
                }
            }).done().fail(function () {
                swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
            });
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
            let self = this;
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
            width: 20px;
            display: inline-block;
            height: 25px;
            background-color: green;
            margin-right: 10px;
            vertical-align: middle;
        }
    }
}
</style>