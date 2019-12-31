<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">案件处理</a>
            <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="handle('yes')"
                v-show="(formKey0 == undefined)">添加</a>
            <!-- <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="addCase">添加</a> -->
        </header>
        <div class="card-container">
            <div class="form-label">
                <h4 class="form-title">案件文书</h4>
            </div>
            <mt-cell title="投诉登记表" is-link
                :to="'/mywork/complaintregistration/'+formKey0+'?PROC_INST_ID_='+PROC_INST_ID_+'&ID_='+ID_+'&OPINION='+OPINION+'&ASSIGNEE_='+ASSIGNEE_+'&CASE_ID_='+CASE_ID_">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell>
            <mt-cell title="立案审批表" is-link
                :to="'/mywork/caseregisterpage/'+formKey0+'?PROC_INST_ID_='+PROC_INST_ID_+'&ID_='+ID_+'&OPINION='+OPINION+'&ASSIGNEE_='+ASSIGNEE_+'&CASE_ID_='+CASE_ID_">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell>
            <mt-cell slot="icon" title="调查询问通知书" is-link
                :to="'/mywork/filesendpage/'+formKey0+'?PROC_INST_ID_='+PROC_INST_ID_+'&ID_='+ID_+'&OPINION='+OPINION+'&ASSIGNEE_='+ASSIGNEE_+'&CASE_ID_='+CASE_ID_">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell>
            <mt-cell title="限期改正指令书" is-link
                :to="'/mywork/correctioninstruction/'+formKey0+'?PROC_INST_ID_='+PROC_INST_ID_+'&ID_='+ID_+'&OPINION='+OPINION+'&ASSIGNEE_='+ASSIGNEE_+'&CASE_ID_='+CASE_ID_">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell>
            <mt-cell title="行政处理决定书" is-link
                :to="'/mywork/punishpage/'+formKey0+'?PROC_INST_ID_='+PROC_INST_ID_+'&ID_='+ID_+'&OPINION='+OPINION+'&ASSIGNEE_='+ASSIGNEE_+'&CASE_ID_='+CASE_ID_">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell>
            <mt-cell title="行政处罚决定书" is-link
                :to="'/mywork/planpunishpage/'+formKey0+'?PROC_INST_ID_='+PROC_INST_ID_+'&ID_='+ID_+'&OPINION='+OPINION+'&ASSIGNEE_='+ASSIGNEE_+'&CASE_ID_='+CASE_ID_">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell>
            <mt-cell title="移送审批表" is-link
                :to="'/mywork/trialtransferpage/'+formKey0+'?PROC_INST_ID_='+PROC_INST_ID_+'&ID_='+ID_+'&OPINION='+OPINION+'&ASSIGNEE_='+ASSIGNEE_+'&CASE_ID_='+CASE_ID_">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell>
            <mt-cell title="行政处罚事先告知书" is-link
                :to="'/mywork/administrativepenaltypriornotice/'+formKey0+'?PROC_INST_ID_='+PROC_INST_ID_+'&ID_='+ID_+'&OPINION='+OPINION+'&ASSIGNEE_='+ASSIGNEE_+'&CASE_ID_='+CASE_ID_">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell>
            <mt-cell title="结案审批表" is-link
                :to="'/mywork/caseendpage/'+formKey0+'?PROC_INST_ID_='+PROC_INST_ID_+'&ID_='+ID_+'&OPINION='+OPINION+'&ASSIGNEE_='+ASSIGNEE_+'&CASE_ID_='+CASE_ID_">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell>
            <div class="form-label">
                <h4 class="form-title">流程图</h4>
            </div>
            <div class="img-container">
                <!-- <img slot="icon" src="../../image/流程图.jpg"> -->
                <!-- <vue-preview class="preimg" :slides="diagram""></vue-preview> -->
                <img v-if="imgSrc !== ''" :src="imgSrc" alt="流程图" style="width: 100%;">
            </div>
            <!-- <div class="form-label">
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
            </mt-cell> -->
        </div>
    </div>
</template>
<script>
    import httpurl from '../../js/config';

    export default {
        data() {
            return {
                flag: this.$route.query.flag,                //任务是否已完成
                serverurl: '',			//后台地址
                hitaskList: [],			//历史任务节点列表
                varList: [],			//流程变量列表
                PROC_INST_ID_: '',		//流程实例ID
                ID_: '',				//任务ID
                OPINION: '',			//审批意见
                ASSIGNEE_: '',			//待办人
                messagetext: '',		//作废缘由
                FILENAME: '',			//流程图文件名ID
                imgSrc: '',				//流程图base64数据
                Reject: false,			//驳回按钮权限
                Abolish: false,			//作废按钮权限
                NextASSIGNEE_: false,	//指定下一办理人按钮权限
                msg: true,				//判断是否从办理任务进入
                CONNULL: false,			//判断是否输入文本
                loading: false,			//加载状态
                formKeyList: {
                    "form/劳动保障监察投诉登记表.html": 1,
                    "form/劳动保障监察立案审批表.html": 2,
                    "form/劳动保障监察调查询问通知书.html": 3,
                    "form/劳动保障监察限期改正指令书.html": 4,
                    "form/劳动保障监察行政处理决定书.html": 5,
                    "form/劳动保障监察行政处罚决定书.html": 6,
                    "form/劳动保障涉嫌犯罪案件移送审批表.html": 7,
                    "form/劳动保障监察行政处罚（行政处理）事先告知书.html": 8,
                    "form/劳动保障监察结案审批表.html": 9
                },
                formKey: "",			//外部表单,
                formKey0: "",
                docHTML: "",
                cacheTimmer: null,
                docVarList: {},
                CASE_ID_: "",
                TASK_ID_: "",
                fileList: [],
                httpurl: httpurl
            }
        },
        computed: {
            diagram: function () {
                return [
                    {
                        msrc: this.imgSrc,
                        src: this.imgSrc,
                        w: 600,
                        h: 400
                    }
                ]
            }
        },
        created() {
            this.$emit("pageChanged");
            this.init();
        },
        methods: {
            init() {
                var msg = this.getUrlKey('msg');	//链接参数
                if (null != msg) {
                    this.msg = false;
                }
                this.serverurl = httpurl;
                this.PROC_INST_ID_ = this.getUrlKey('PROC_INST_ID_');	//链接参数
                this.ID_ = this.getUrlKey('ID_');						//链接参数
                this.FILENAME = this.getUrlKey('FILENAME');				//链接参数
                this.CASE_ID_ = this.getUrlKey('CASE_ID_');				//链接参数
                this.TASK_ID_ = this.getUrlKey('TASK_ID_');				//链接参数
                if (this.flag == '1') {
                    this.getData();
                }
                else {
                    this.getData2();
                    console.log(2);
                }
                this.getFileList();
            },
            getData: function () {
                let self = this;
                var vm = this;
                this.loading = true;
                //发送 post 请求
                $.ajax({
                    xhrFields: {
                        withCredentials: true
                    },
                    type: "POST",
                    url: httpurl + 'rutask/getHandleData',
                    data: { PROC_INST_ID_: this.PROC_INST_ID_, ID_: this.ID_, FILENAME: this.FILENAME, tm: new Date().getTime() },
                    dataType: "json",
                    success: function (data) {
                        if ("success" == data.result) {
                            vm.hitaskList = data.hitaskList;
                            vm.varList = data.varList;
                            vm.imgSrc = data.imgSrc;
                            vm.loading = false;
                            vm.formKey0 = vm.formKeyList[data.formKey];
                            vm.formKey = data.formKey;
                            for (const item of vm.hitaskList) {
                                vm.docVarList[item.NAME_] = item.TEXT_
                            }
                            for (const item of vm.varList) {
                                vm.docVarList[item.NAME_] = item.TEXT_
                            }
                            vm.$store.commit("pushdocVarList", vm.docVarList);
                        } else if ("exception" == data.result) {
                            showException("流程信息", data.exception);	//显示异常
                        }
                    }
                }).done().fail(function () {
                    swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
                });
            },
            getData2: function () {
                let self = this;
                var vm = this;
                this.loading = true;
                //发送 post 请求
                $.ajax({
                    xhrFields: {
                        withCredentials: true
                    },
                    type: "POST",
                    url: httpurl + 'hiprocdef/view',
                    data: { PROC_INST_ID_: this.PROC_INST_ID_, ID_: this.ID_, FILENAME: this.FILENAME, tm: new Date().getTime() },
                    dataType: "json",
                    success: function (data) {
                        if ("success" == data.result) {
                            vm.hitaskList = data.hitaskList;
                            vm.varList = data.varList;
                            vm.imgSrc = data.imgSrc;
                            vm.loading = false;
                            vm.formKey0 = "over";
                            vm.formKey = data.formKey;
                            for (const item of vm.hitaskList) {
                                vm.docVarList[item.NAME_] = item.TEXT_
                            }
                            for (const item of vm.varList) {
                                vm.docVarList[item.NAME_] = item.TEXT_
                            }
                            vm.$store.commit("pushdocVarList", vm.docVarList);
                        } else if ("exception" == data.result) {
                            showException("流程信息", data.exception);	//显示异常
                        }
                    }
                }).done().fail(function () {
                    swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
                });
            },
            getUrlKey: function (name) {
                return decodeURIComponent(
                    (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
            },
            handle: function (msg) {
                var taskVariables = {};
                var vm = this;
                // $(".form-variables").each(function (index, element) {
                // 	var key = $(element).attr("name");
                // 	var value = $(element).val();
                // 	taskVariables[key] = value;
                // 	console.log("form-variables", key, value);
                // });
                //zty
                var self = this;
                if (!this.CONNULL || this.CONNULL) {
                    $.ajax({
                        xhrFields: {
                            withCredentials: true
                        },
                        type: "POST",
                        url: httpurl + 'rutask/handle',
                        data: { taskVariables: taskVariables, msg: msg, ID_: vm.ID_, ASSIGNEE_: vm.ASSIGNEE_, PROC_INST_ID_: vm.PROC_INST_ID_, OPINION: vm.OPINION, tm: new Date().getTime() },
                        dataType: 'json',
                        success: function (data) {
                            if ("success" == data.result) {
                                console.log(taskVariables);
                                vm.$router.go(-1);
                            } else if ("exception" == data.result) {
                                showException("提交审批", data.exception);//显示异常
                            }
                        }
                    }).done().fail(function () {
                        swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
                    });
                }
            },
            openPicker(id, $event) {
                var that = this;
                var _self = $event.target;
                var item = document.getElementById(id);
                if (that.picker) {
                    that.picker.show(function (rs) {
                        // that.datetime = rs.text;
                        item.value = rs.text;
                        that.picker.dispose();
                        that.picker = null;
                    });
                }
                else {
                    var optionsJson = _self.getAttribute('data-options') || '{}';
                    var options = JSON.parse(optionsJson);
                    // var id = _self.getAttribute('id');
                    // console.log(mui.picker);
                    that.picker = new window.mui.DtPicker(options);
                    that.picker.show(function (rs) {
                        console.log("show callback")
                        item.value = rs.text;
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
    .home-container {
        .mui-bar.mui-bar-nav {
            font-size: 19px;
            z-index: 80;
            height: 75px;

            /* background-color: #26a2ff; */
            .mui-action-back.mui-icon.mui-icon-left-nav.mui-pull-left {
                color: black;
                padding-top: 39px;

                .back-btn {
                    font-size: 19px;
                    font-weight: bold;
                }
            }

            .mui-title {
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

            .mui-pull-right {
                font-size: inherit;
                color: black;
                margin-top: 15px;
                /* background-color: inherit; */
                font-weight: bold;
                line-height: 52px;
            }
        }

        .form-label {
            background-color: white;
            margin-top: 10px;
            margin-bottom: 7px;
            padding: 7px;
            padding-left: 15px;

            .form-title:before {
                /* margin: 10px; */
                content: "";
                width: 10px;
                display: inline-block;
                height: 25px;
                background-color: #2e8000c2;
                margin-right: 10px;
                vertical-align: middle;
            }
        }

        .card-container {
            position: absolute;
            height: 100%;
            width: 100%;

            .img-container {
                width: 100%;
                /* margin-top: 20px; */
                background-color: white;

                .preimg {
                    /deep/ .my-gallery {
                        margin: 0;
                        padding: 0;
                        flex-wrap: wrap;
                        display: flex;
                        justify-content: center;

                        figure {
                            width: 85%;
                            margin: 5px;

                            img {
                                width: 100%;
                                /* box-shadow: 0 0 8px #999; */
                            }
                        }
                    }
                }
            }
        }
    }
</style>