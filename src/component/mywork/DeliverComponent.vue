<template>
    <form class="mui-input-group">
        <mt-field placeholder="请输入用户名" v-model="keyword"></mt-field>
        <mt-radio v-model="assignee" :options="userOption"></mt-radio>
    </form>
</template>

<script>
import httpurl, { fileurl } from '../../js/config';
export default {
    props: {
        value: String
    },
    data () {
        return {
            assignee: "",
            keyword: "",
            userList: []
        }
    },
    computed: {
        userOption: function () {
            return this.userList.map(item => ({
                label: item.USERNAME,
                value: item.NAME
            }));
        }
    },
    mounted () {
        this.getUserList();
    },
    watch: {
        keyword: function () {
            this.getUserList();
        },
        value: function (val) {
            this.assignee = val;
        },
        assignee: function (val) {
            this.$emit("input", val)
        }
    },
    methods: {
        getUserList: function () {
            var vm = this;
            this.loading = true;
            if (this.keyword === "") {
                vm.userList = [];
                return;
            }
            //发送 post 请求
            $.ajax({
                xhrFields: {
                    withCredentials: true
                },
                type: "POST",
                url: httpurl + 'user/listUsersForWindow?showCount=-1&currentPage=1'+'&caseID='+this.CASE_ID_+"&taskID="+this.TASK_ID_+"&KEYWORDS="+this.keyword,
                data: { PROC_INST_ID_: this.PROC_INST_ID_, ID_: this.ID_, FILENAME: this.FILENAME, tm: new Date().getTime() },
                dataType: "json",
                success: function (data) {
                    if ("success" == data.result) {
                        vm.userList = data.userList;
                    } else if ("exception" == data.result) {
                        showException("用户列表", data.exception);	//显示异常
                    }
                }
            }).done().fail(function () {
                swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
            });
        }
    }
}
</script>