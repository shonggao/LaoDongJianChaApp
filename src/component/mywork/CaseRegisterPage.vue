<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">立案审批表</a>
            <!-- <mt-button type="primary" class="mui-pull-right" @click="addCase">添加</mt-button> -->
            <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="handle('yes')" v-show="(formKey0 == formname)">保存</a>
        </header>
        <div class="card-container">
            <div class="form-label">
                <h4 class="form-title">投诉人情况</h4>
            </div>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>案由：</label>
                    <input type="text" placeholder="输入案由" v-model="docVarList.ldbzjclaspb_anyou">
                </div>
                <div class="mui-input-row">
                    <label>单位名称：</label>
                    <input type="text" placeholder="输入单位名称" v-model="docVarList.ldbzjclaspb_danweimingcheng">
                </div>
                <div class="mui-input-row">
                    <label>地址：</label>
                    <input type="text" placeholder="输入地址" v-model="docVarList.ldbzjclaspb_dizhi">
                </div>
                <div class="mui-input-row">
                    <label>邮编：</label>
                    <input type="text" placeholder="输入邮编" v-model="docVarList.ldbzjclaspb_youbian">
                </div>
                <div class="mui-input-row">
                    <label>法定代表人姓名：</label>
                    <input type="text" placeholder="输入法定代表人姓名" v-model="docVarList.ldbzjclaspb_fddbr_xingming">
                </div>
                <div class="mui-input-row">
                    <label>职务：</label>
                    <input type="text" placeholder="输入职务" v-model="docVarList.ldbzjclaspb_fddbr_zhiwu">
                </div>
                <div class="mui-input-row">
                    <label>联系电话：</label>
                    <input type="text" placeholder="输入联系电话" v-model="docVarList.ldbzjclaspb_fddbr_lianxidianhua">
                </div>
                <div class="mui-input-row">
                    <label>主要负责人姓名：</label>
                    <input type="text" placeholder="输入主要负责人姓名" v-model="docVarList.ldbzjclaspb_zyfzr_xingming">
                </div>
                <div class="mui-input-row">
                    <label>职务：</label>
                    <input type="text" placeholder="输入职务" v-model="docVarList.ldbzjclaspb_zyfzr_zhiwu">
                </div>
                <div class="mui-input-row">
                    <label>联系电话：</label>
                    <input type="text" placeholder="输入联系电话" v-model="docVarList.ldbzjclaspb_zyfzr_lianxidianhua">
                </div>
                <div class="mui-input-row">
                    <label>其他联系<br>方式：</label>
                    <input type="text" placeholder="输入其他联系方式" v-model="docVarList.ldbzjclaspb_zyfzr_qitalianxifangshi">
                </div>
            </form>
            <div class="form-label">
                <h4 class="form-title">其他</h4>
            </div>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>案件来源：</label>
                    <select name="caseSource" id="caseSource" class="mui-select fluid" v-model="docVarList.ldbzjclaspb_anjianlaiyuan"> 
                        <option value="12345市长热线" selected>12345市长热线</option>
                        <option value="12333举报投诉">12333举报投诉</option>
                        <option value="举报投诉">举报投诉</option>
                        <option value="省市转办件">省市转办件</option>
                        <option value="阳光信访 ">阳光信访 </option>
                        <option value="日常巡查案件">日常巡查案件</option>
                        <option value="其他">其他</option>
                    </select>
                </div>
                <div class="mui-input-row" style="margin: 2px 0">
                    <textarea id="textarea" rows="5" placeholder="输入基本案情" v-model="docVarList.ldbzjclaspb_jibenanqing"></textarea>
                </div>
                <div class="mui-input-row">
                    <label>立案依据：</label>
                    <input type="text" placeholder="输入立案依据" v-model="docVarList.ldbzjclaspb_lianyiju">
                </div>
            </form>
            <form class="mui-input-group">
                <!-- <div class="mui-input-row">
                    <label>立案审理部门（检察员）意见：</label>
                    <input type="text" placeholder="输入立案审理部门（检察员）意见 ">
                </div> -->
                <div class="mui-input-row" style="margin: 2px 0">
                    <textarea id="textarea" rows="5" placeholder="输入立案审理部门（检察员）意见" v-model="docVarList.ldbzjclaspb_lianshenchabumenyijian"></textarea>
                </div>
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('Date1',$event)">
                    <label data-options='{"type":"date"}'>日期：</label>
                    <input type="text" id="Date1"  data-options='{"type":"date"}' readonly="readonly" v-model="docVarList.ldbzjclaspb_lianshenchabumenyijianriqi">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" style="margin: 2px 0">
                    <textarea id="textarea" rows="5" placeholder="输入监察机构负责人审批意见" v-model="docVarList.ldbzjclaspb_jianchajigoufuzerenshenpiyijian"></textarea>
                </div>
                <!-- <div class="mui-input-row">
                    <label>监察机构负责人审批意见：</label>
                    <input type="text" placeholder="输入监察机构负责人审批意见">
                </div> -->
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('Date2',$event)">
                    <label data-options='{"type":"date"}'>日期：</label>
                    <input type="text" id="Date2" data-options='{"type":"date"}' readonly="readonly" v-model="docVarList.ldbzjclaspb_jianchajigoufuzerenshenpiyijianriqi">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>备注：</label>
                    <input type="text" placeholder="输入备注" v-model="docVarList.ldbzjclaspb_beizhu">
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
            formname: "2",
            formKey0: this.$route.params.formKey0,
            PROC_INST_ID_: this.$route.query.PROC_INST_ID_,		//流程实例ID
            ID_: this.$route.query.ID_,				//任务ID
            OPINION: this.$route.query.OPINION,			//审批意见
            ASSIGNEE_: this.$route.query.ASSIGNEE_,			//待办人
            vars: [
               "ldbzjclaspb_anyou",
               "ldbzjclaspb_danweimingcheng",
               "ldbzjclaspb_dizhi",
               "ldbzjclaspb_youbian",
               "ldbzjclaspb_fddbr_xingming",
               "ldbzjclaspb_fddbr_zhiwu",
               "ldbzjclaspb_fddbr_lianxidianhua",
               "ldbzjclaspb_zyfzr_xingming",
               "ldbzjclaspb_zyfzr_zhiwu",
               "ldbzjclaspb_zyfzr_lianxidianhua",
               "ldbzjclaspb_zyfzr_qitalianxifangshi",
               "ldbzjclaspb_anjianlaiyuan",
               "ldbzjclaspb_jibenanqing",
               "ldbzjclaspb_lianyiju",
               "ldbzjclaspb_lianshenchabumenyijian",
               "ldbzjclaspb_lianshenchabumenyijianriqi",
               "ldbzjclaspb_jianchajigoufuzerenshenpiyijian",
               "ldbzjclaspb_jianchajigoufuzerenshenpiyijianriqi",
               "ldbzjclaspb_beizhu",
            ],
            CASE_ID_: "",
            TASK_ID_: "立案审批",
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
                originVarList[this.vars[key]] = this.docVarList[this.vars[key]] || "";
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
                            vm.$router.go(-2);
						} else if ("exception" == data.result) {
							showException("提交审批", data.exception);//显示异常
						}
					}
				}).done().fail(function () {
					swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
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
}
</style>
